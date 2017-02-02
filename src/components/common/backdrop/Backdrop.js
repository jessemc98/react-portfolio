import React, { PropTypes } from 'react'
import pointerEventsAvailable from '../../../helpers/pointerEventsAvailable'
import './Backdrop.scss'

class Backdrop extends React.PureComponent {
  constructor(props, context){
    super(props, context)
    this.onClick = this.onClick.bind(this)
    this.blockScroll = this.blockScroll.bind(this)
  }
  componentWillMount(){
    this.blockScroll(!this.props.hidden)
  }
  componentWillReceiveProps(newProps){
    this.blockScroll(!newProps.hidden)
  }
  onClick(event) {
    if(this.props.hidden) return
    if (event.target === this._node) {
      event.stopPropagation()
      return this.props.onClick()
    }
  }
  blockScroll(block) {
    document.body.style.overflow = block?"hidden":"auto"
  }
  render() {
    const {children, onClick, className, hidden, duration, cssTimingFunc} = this.props
    const style = {
      transitionDuration: duration + "ms",
      transitionTimingFunction: cssTimingFunc
    }
    return (
      !pointerEventsAvailable()?
      this.props.children:
      <div
        className={`Backdrop ${className&&className} ${hidden&&"Backdrop-hidden"}`}
        onClick={this.onClick}
        style={style}
        ref={ele => this._node = ele}>
        {children}
      </div>
    )
  }
}

Backdrop.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  duration: PropTypes.string,
  cssTimingFunc: PropTypes.string
}
export default Backdrop;
