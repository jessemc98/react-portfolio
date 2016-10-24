import React, { PropTypes } from 'react'
import './Form.scss'

class MyForm extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      inputVals: React.Children.map(props.children, child => {
        return child.props.value
      })
    }
    this._childrenWithProps = null
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentWillMount(){
      this._childrenWithProps = React.Children.map(this.props.children, (child, i)=> {
        return React.cloneElement(child, {onChange: (e) => this.onChange(e, i), key: i})
      })
  }
  onChange(e, i) {
    const vals = [...this.state.inputVals]
    const newVal = e.target.value
    vals[i] = newVal
    this.setState({inputVals: vals})
  }
  onSubmit(e) {
    e.preventDefault()
  }
  render () {
    if(this._childrenWithProps){
      this._childrenWithProps = this._childrenWithProps.map((child, i)=> {
        return React.cloneElement(child, {value: this.state.inputVals[i]})
      })
    }

    return (
      <form className="MyForm" onSubmit={this.onSubmit}>
        {this._childrenWithProps}
        <input type="submit" value="SEND"/>
      </form>
    )
  }
}
MyForm.propTypes = {
  children: PropTypes.array
}

export default MyForm;
