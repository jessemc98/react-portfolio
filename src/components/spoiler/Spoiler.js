import React, { Component, PropTypes } from 'react'
import FabLink from '../common/fab/FabLink'
import './Spoiler.scss'

import deleteIcon from '../../assets/icons/delete.svg'

class Spoiler extends Component {
  constructor(props, context){
    super(props, context)
    this._content = null

    this.state = {
      hidden: props.showDefault?false:true
    }

    this.toggleContent = this.toggleContent.bind(this)
    this._set_content = this._set_content.bind(this)
  }

  _set_content(domNode) {
    this._content = domNode
  }
  _getContentHeight() {
    return this._content.offsetHeight || this._content.clientHeight || 0
  }

  toggleContent(){
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const style = {
      overflow: 'hidden',
      height: '0px'
    }
    if (this._content) {
      style.height = (this.state.hidden?'0px':this._getContentHeight() + 'px')
    }

    const { icon, text } = this.props
    const children = React.cloneElement(this.props.children, {ref: this._set_content})

    return (
      <div className={"Spoiler" + (this.state.hidden?" Spoiler-hidden":"")}>
        <div children={children} style={style} />
        <FabLink tabindex="0" onClick={this.toggleContent} icon={icon || deleteIcon} text={"View " + (this.state.hidden?"more ":"less ") + text}/>
      </div>
    )
  }
}

Spoiler.propTypes = {
  showDefault: PropTypes.bool,
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string
}

export default Spoiler
