import React, { PropTypes } from 'react'
import './Modal.scss'

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      hidden: false
    }

    //refs
    this._modalContainer = null

    this.toggleModal = this.toggleModal.bind(this)
    this.hide = this.hide.bind(this)
  }
  toggleModal() {
    this.setState({hidden: !this.state.hidden})
  }
  hide(event) {
    if(event.target !== this._modalContainer)
      return
    this.setState({hidden: true})
    this.props.hide()
  }
  render () {
    const { content, image, title } = this.props
    let hidden = "";
    if (this.state.hidden){
      hidden = " Modal-hidden"
    }
    return (
      <div className={'Modal-container' + hidden} onClick={this.hide} ref={e => this._modalContainer = e}>
        <div className="Modal">
          <button className="Modal_button">X</button>
          <div className="Modal_header">
            <img className="Modal_image" src="https://avatars1.githubusercontent.com/u/1545643?v=3&s=200"/>
            <h2>{title}</h2>
          </div>
          <div className="Modal_content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
