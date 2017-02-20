import React, { PropTypes } from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import './CardManager.scss'
import {
  watchForTransitionEnd,
  getTextElementTransforms,
  getChildElementTransforms,
  getParentElementTransforms } from './helpers'

class CardManager extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      isOpen: false
    }
    this.nodes = null

    this.getNodes = this.getNodes.bind(this)
    this.toggleCardState = this.toggleCardState.bind(this)
    this.slideInContent_ = this.slideInContent_.bind(this)
    this.flipHeader_ = this.flipHeader_.bind(this)
    this.handleBackdropClick = this.handleBackdropClick.bind(this)
  }

  // gets all the individual nodes/parts of the card and 'caches' them in this.nodes
  getNodes(element) {
    if (!element) return
    const parts = {
      card: "Card",
      header: "Card_header",
      title: "Card_header_title",
      toggle: "Fab",
      content: "Card_content"
    }
    this.nodes = { root: element }

    Object.keys(parts)
      .forEach(key => this.nodes[key] =
        element.getElementsByClassName(parts[key])[0])
  }

  /* returns an objects with the bounding rect of all header elements
     which will be transformed when expanding/collapsing */
  getHeaderSizes_() {
    const header = this.nodes.header.getBoundingClientRect()
    const title = this.nodes.title.getBoundingClientRect()
    const toggle = this.nodes.toggle.getBoundingClientRect()

    return { header, title, toggle }
  }

  /* calculates css transforms required to get header elements from 'target' to 'initial' state
     expects 'target' and 'initial' to be objects returned by this.getHeaderSizes_ */
  getHeaderTransforms_(target, initial) {
    const header = getParentElementTransforms(target.header, initial.header)
    const toggle = getChildElementTransforms(target.toggle, initial.toggle, header)
    const title = getTextElementTransforms(target.title, initial.title, header)
    return {
      header,
      toggle,
      title
    }
  }

  /*if click is not on child elements calls closeCard else does nothing*/
  handleBackdropClick(event){
    if (event.target !== event.currentTarget) return

    this.closeCard()
  }
  /* given an array of nodeNames
     forEach 'node':
      removes style.transform from this.nodes['node'] */
  removeTransformFromElements_(nodeNames) {
    nodeNames.forEach(node => {
      this.nodes[node].style.transform = ""
    })
  }

  // removes transform from header elements which will be transformed when collapsing/expanding the card
  removeTransformFromHeaderElements_() {
    return watchForTransitionEnd(this.nodes.header,
      () => this.removeTransformFromElements_([
        'header', 'toggle', 'title'
      ])
    )()
  }

  // enables or disables css transitions depending on given 'state' boolean
  setAnimations_(state) {
    state ?
    this.nodes.root.classList.add('Card-transition') :
    this.nodes.root.classList.remove('Card-transition')
  }

  /* sets given transforms object to given element
   'transforms' should be an object containing 0 or more of the following properties:
    transformX, transformY, scaleX, scaleY */
  setTransformsOnElement_(element, transforms) {
    const scale =
    transforms.scaleX ?
      `scale(${transforms.scaleX}, ${transforms.scaleY})` : '';
    const transform =
    transforms.translateX ?
      `translate(${transforms.translateX}px, ${transforms.translateY}px)` : '';
    element.style.transform = scale + transform
  }

  // slides content up and out when not in hidden state
  slideOutContent_() {
    return watchForTransitionEnd( this.nodes.content,
      () => this.nodes.content.style.transform = 'translateY(-100%)'
    )()
  }

  // slides content down when in hidden state
  slideInContent_() {
    const { card, content } = this.nodes
    return watchForTransitionEnd(content,
      () => {
        card.style.overflow = 'hidden'
        content.style.opacity = 1
        content.style.transform = ''
      }
    )()
  }

  /* flips headers open state and transforms it back to initial position using
    only css transforms so it looks as if it never moved, we can then add a
    transition to the elements and remove the transforms to cause the header
    to animate to the new position in a performant fashion */
  flipHeader_() {
    const { root, header, title, toggle, content } = this.nodes
    let initialHeaderSizes, targetHeaderSizes, transforms

    this.setAnimations_(false)
    // get collapsed sizes
    initialHeaderSizes = this.getHeaderSizes_()
    // add expanded styles
    root.classList.toggle('Card-open')
    // get expanded sizes
    targetHeaderSizes = this.getHeaderSizes_()

    // calculate transforms required to move from expanded to collapsed position
    transforms = this.getHeaderTransforms_(initialHeaderSizes, targetHeaderSizes)
    // set transforms on elements so it looks as if nothing has moved
    this.setTransformsOnElement_(header, transforms.header)
    this.setTransformsOnElement_(toggle, transforms.toggle)
    this.setTransformsOnElement_(title, transforms.title)
  }

  openCard() {
    // disable scrolling on body
    document.body.style.overflow = 'hidden'

    this.flipHeader_()

    // slide card content out of view
    this.nodes.content.style.opacity = 0
    this.nodes.content.style.transform = 'translateY(-100%)'

    // force synchronous layout so transforms are set before animations are enabled
    this.nodes.root.offsetLeft

    // re-enable animations so elements animate when transforms are removed
    this.setAnimations_(true)

    // remove transforms next frame so it animates to final position
    requestAnimationFrame(() => {
      this.removeTransformFromHeaderElements_()
        // when header finishes animating, slide in the content
        .then(this.slideInContent_)
        .then(() => this.setState({isOpen: true}))
    })
  }
  closeCard() {
    // re-enable scrolling on body
    document.body.style.overflow = 'auto'

    // ensure css transitions are enabled
    this.setAnimations_(true)

    // slide content out of view
    this.slideOutContent_()
      // flip header when content transitions out
      .then(() => {
        this.flipHeader_()
        // show overflow on card since header will be scaled up, outside its bounding rect
        this.nodes.card.style.overflow = 'visible'
        // force sync layout so transforms are set before animations are enabled
        this.nodes.root.offsetLeft
        // enable css transitions
        this.setAnimations_(true)

        // remove transforms next frame so it animates to final/closed position
        requestAnimationFrame(() => {
          this.removeTransformFromHeaderElements_()
            // set state.isOpen to false when done animating
            .then(() => this.setState({isOpen: false}))
        })
      })
  }
  toggleCardState() {
    if (this.state.isOpen) {
      return this.closeCard()
    }
    return this.openCard()
  }

  render() {
    const { isOpen } = this.state
    const colors = this.props.colors || {}
    const { title, image, skills, links, description, code } = this.props
    return (
      <div
        className={`Card_closed-wrapper ${isOpen ? "Card-open":""}`}
        role="dialog"
        aria-label={`${title} project card/modal`}
        ref={this.getNodes}>
        <div className="Card_open-wrapper">
          <div className="Card_backdrop" onClick={this.handleBackdropClick}/>
          <article className="Card" style={{overflow: isOpen ? "hidden" : "visible"}} role="article">
            <CardHeader
              title={title}
              onClick={this.toggleCardState}
              colors={colors}/>
            <CardContent
              description={description}
              image={image}
              code={code}
              imageAlt={'image of ' + title}
              links={links}
              skills={skills}
              background={colors.highlight} />
          </article>
        </div>
      </div>
    )
  }
}
CardManager.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.shape({
    // valid css color values
    main: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.array.isRequired // array of FabLink objects
}
export default CardManager;
