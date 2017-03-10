import React, { PropTypes } from 'react'
import './MyTextArea.scss'

class MyTextArea extends React.PureComponent {
  constructor(props, context){
    super(props, context)
    this.state = {
      isActive: false,
      isCompleted: false
    }

    this.focus = this.focus.bind(this)
    this.blur = this.blur.bind(this)
  }
  focus(){
    this.setState({
      isActive: true,
      isCompleted: true
    })
  }
  blur(e){
    if(!this.props.value || this.props.value === ''){
      this.setState({isCompleted: false})
    }
    this.setState({
      isActive: false
    })
  }
  setHeight(element){
    element.style.height = "2em"
    element.style.height = element.scrollHeight + "px"
  }
  render(){
    if (this._textArea) {
      this.setHeight(this._textArea)
    }
    const { type="text", value="", placeHolder, onChange, name, error } = this.props
    const { isActive, isCompleted } = this.state
    return (
      <div className={"MyTextArea" +
        (isActive?' MyTextArea-is-active':'') +
        (isCompleted?' MyTextArea-is-completed':'') +
        (error?' MyTextArea-has-error':'')}>
        <label className="MyTextArea_label" htmlFor={name}>{placeHolder}</label>
        <textarea className="MyTextArea_input"
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          onFocus={this.focus}
          onBlur={this.blur}
          value={value}
          ref={(e) => this._textArea = e}/>
       {error && <p className="MyTextArea_error">{error}</p>}
      </div>
    )
  }
}
MyTextArea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string
}
export default MyTextArea
