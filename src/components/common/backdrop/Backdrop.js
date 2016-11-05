import React, { PropTypes } from 'react'
import './Backdrop.scss'

class Backdrop extends React.Component {
  constructor(props, context){
    super(props, context)

    this.onClick = this.onClick.bind(this)
    this.blockScroll = this.blockScroll.bind(this)
    this.prevDefault = this.prevDefault.bind(this)
  }
  componentWillMount(){
    this.blockScroll(!this.props.hidden)
  }
  componentWillReceiveProps(newProps){
    this.blockScroll(!newProps.hidden)
  }
  onClick(event) {
    if(this.props.hidden) {
      return
    }
    if (event.target === this._node) {
      return this.props.onClick()
    }
    event.stopPropagation()
  }
  prevDefault(event){
    event.preventDefault()
    event.stopPropagation()
  }
  blockScroll(bool) {
    if(bool) {
      console.log('add block')
      document.body.addEventListener('mousewheel', this.prevDefault, false)
    } else {
      console.log('remove block')
      document.body.removeEventListener('mousewheel', this.prevDefault, false)
    }
  }
  render() {
    const {children, onClick, className, hidden, duration, cssTimingFunc} = this.props
    const style = {
      transitionDuration: duration + "ms",
      transitionTimingFunction: cssTimingFunc
    }
    return (
      <div
        className={"Backdrop" + (className?" " + className:"") + (hidden?" Backdrop-hidden":"")}
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
