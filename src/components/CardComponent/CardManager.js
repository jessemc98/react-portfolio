import React, { PropTypes } from 'react'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import './CardManager.scss'

class CardManager extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      isOpen: false
    }

    this.toggleCardState = this.toggleCardState.bind(this)
  }
  toggleCardState () {
    this.setState({isOpen: !this.state.isOpen})
  }
  render () {
    const { isOpen } = this.state
    const colors = this.props.colors || {}
    const { title, image, skills, links, description } = this.props
    return (
      <div className={`Card_wrapper ${isOpen ? "Card-open":""}`}>
        <div className="Card">
          <CardHeader
            title={title}
            onClick={this.toggleCardState}
            colors={colors}/>
          <CardContent
            description={description}
            image={image}
            imageAlt={'image of ' + title}
            links={links}
            skills={skills}
            background={colors.highlight} />
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
