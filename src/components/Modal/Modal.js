import React, { PropTypes } from 'react'
import './Modal.scss'

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context)
    //refs
    this._modalContainer = null

    this.hide = this.hide.bind(this)
  }
  componentWillUnmount() {
    this.props.hide()
    this.props.unmount()
  }
  hide(event) {
    if(event.target !== this._modalContainer)
      return
    this.props.hide()
  }
  render () {
    const { content, imgSrc, title } = this.props
    return (
      <div key="modal" className="Modal-container" onClick={this.hide} ref={e => this._modalContainer = e}>
        <div className="Modal">
          <button className="Modal_button" onClick={this.props.hide}>X</button>
          <div className="Modal_header">
            <img className="Modal_image" src={imgSrc}/>
            <h2>{title}</h2>
          </div>
          <div className="Modal_content">
            {content}
          </div>
        </div>
      </div>
    )
  }
}
Modal.propTypes = {
  hide: PropTypes.func.isRequired,
  unmount: PropTypes.func.isRequired,
  content: PropTypes.element,
  title: PropTypes.string,
  imgSrc: PropTypes.string
}

export default Modal;
