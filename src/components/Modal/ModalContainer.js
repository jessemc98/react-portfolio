import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Modal from './Modal'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './ModalContainer.scss'

class ModalContainer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      hidden: true
    }
    this.modalTarget = null

    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this._render = this._render.bind(this)
    this.cleanUp = this.cleanUp.bind(this)
  }
  componentWillUpdate() {
    this._render()
  }
  componentWillUnmount() {
    this.hideModal()
  }

  _render() {
    const { title, children, imgSrc } = this.props
    ReactDOM.render(
        <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={16}
          transitionLeaveTimeout={0}>
          {!this.state.hidden &&
            <Modal key="modal"
              title={title}
              content={children}
              imgSrc={imgSrc}
              hide={this.hideModal}
              unmount={this.cleanUp} />}
        </ReactCSSTransitionGroup>,
      this.modalTarget
    )
  }
  cleanUp() {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(this.modalTarget)
      document.body.removeChild(this.modalTarget)
    })
  }
  hideModal() {
    this.setState({hidden: true}, () => this._render())
  }
  showModal() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = "ModalContainer"
    document.body.appendChild(this.modalTarget)
    this.setState({hidden: false}, () => this._render())
  }

  render () {
    const { imgSrc, title } = this.props
    return (
      <button className="ModalContainer_button" onClick={this.state.hidden?this.showModal:this.hideModal}>
        <img src={imgSrc} alt={title + ' modal button'} />
        <h3>{title}</h3>
      </button>
    )
  }
}
ModalContainer.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
}
export default ModalContainer;
