import React, { PropTypes } from 'react'
import './Input.scss'

class MyInput extends React.Component {
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
  blur(){
    if(!this.props.value || this.props.value === ''){
      this.setState({isCompleted: false})
    }
    this.setState({
      isActive: false
    })
  }
  render(){
    const { type="text", value="", placeHolder, onChange, name } = this.props
    const { isActive, isCompleted } = this.state
    return (
      <div className={"MyInput" + (isActive?' MyInput-is-active':'') + (isCompleted?' MyInput-is-completed':'')}>
        <label className="MyInput_label"
               htmlFor={name}>{placeHolder}</label>
        <input className="MyInput_input"
               type={type}
               id={name}
               onChange={onChange}
               onFocus={this.focus}
               onBlur={this.blur}
               value={value}/>
      </div>
    )
  }
}
MyInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
export default MyInput
