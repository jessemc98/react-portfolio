import React, { PropTypes } from 'react'
import './Modal.scss'
import Backdrop from '../common/backdrop/Backdrop'
import FocusTrap from 'focus-trap-react'

class Modal extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      hidden: true
    }
    this.hide = this.hide.bind(this)
  }
  componentDidMount(){
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({hidden: false})
    /* eslint-enable react/no-did-mount-set-state */
  }
  hide(){
    this.setState({hidden: true})
    this.props.hide()
  }
  render () {
    const { content, imgSrc, title } = this.props
    return (
      <Backdrop key="modal" className="Modal-container" onClick={this.hide} hidden={this.state.hidden}>
        <FocusTrap
          focusTrapOptions={{clickOutsideDeactivates: true}}>
          <div className="Modal">
            <button className="Modal_button" onClick={this.hide}>X</button>
            <div className="Modal_header">
              <img className="Modal_image" src={imgSrc} alt={title + ' logo'}/>
              <h2>{title}</h2>
            </div>
            <div className="Modal_content">
              <p>{content}</p>
            </div>
          </div>
        </FocusTrap>
      </Backdrop>
    )
  }
}
Modal.propTypes = {
  hide: PropTypes.func.isRequired,
  content: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string
}

export default Modal;
