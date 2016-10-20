import React, { Component, PropTypes } from 'react'
import FabLink from '../common/fab/FabLink'
import './Spoiler.scss'

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

  componentDidMount() {
    this._initialHeight = this._content.clientHeight
    this._content.style.height = 0
  }

  _set_content(domNode) {
    this._content = domNode
  }

  toggleContent(){
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    const style = {
      overflow: 'hidden'
    }
    if(this._initialHeight){
      style.height = this.state.hidden?'0px':this._initialHeight+'px'
    }
    const { iconName, text, children } = this.props

    return (
      <div className="Spoiler">
        <div children={children} style={style} ref={this._set_content} />
        <FabLink onClick={this.toggleContent} iconName={iconName} text={text}/>
      </div>
    )

  }

}

Spoiler.propTypes = {
  showDefault: PropTypes.bool,
  children: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

export default Spoiler
