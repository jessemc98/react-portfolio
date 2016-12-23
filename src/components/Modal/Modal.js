import React, { PropTypes } from 'react'
import './Modal.scss'
import Backdrop from '../common/backdrop/Backdrop'
import FocusTrap from 'react-focus-trap'

class Modal extends React.Component {
  constructor(props, context) {
    super(props, context)
    //refs
    this.state = {
      hidden: false
    }
    this.hide = this.hide.bind(this)
  }
  componentWillUnmount() {
    this.props.hide()
    this.props.unmount()
  }
  hide(){
    this.setState({hidden: true})
    this.props.hide()
  }
  render () {
    const { content, imgSrc, title } = this.props
    return (
      <Backdrop key="modal" className="Modal-container" onClick={this.hide} hidden={this.state.hidden}>
        <FocusTrap>
          <div className="Modal">
            <button className="Modal_button" onClick={this.hide}>X</button>
            <div className="Modal_header">
              <img className="Modal_image" src={imgSrc} alt={title + ' logo'}/>
              <h2>{title}</h2>
            </div>
            <div className="Modal_content">
              {content}
            </div>
          </div>
        </FocusTrap>
      </Backdrop>
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
