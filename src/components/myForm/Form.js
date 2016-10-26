import React, { PropTypes } from 'react'
import './Form.scss'

class MyForm extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      form: React.Children.toArray(props.children).reduce((total, child) => {
          total[child.props.id] = child.props.value
          return total
        }, {})
    }
    this._childrenWithProps = null
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentWillMount(){
      this._childrenWithProps = React.Children.map(this.props.children, (child, i)=> {
        return React.cloneElement(child, {onChange: (e) => this.onChange(e), key: i})
      })
  }
  onChange(e) {
    const newForm = Object.assign({}, this.state.form)
    newForm[e.target.id] = e.target.value
    this.setState({form: newForm})
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.form)
  }
  render () {
    if(this._childrenWithProps){
      //maps values stored in state to internal _childrenWithProps
      this._childrenWithProps = this._childrenWithProps.map((child, i)=> {
        return React.cloneElement(child, {value: this.state.form[child.props.id]})
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
  children: PropTypes.array,
  onSubmit: PropTypes.func.isRequired
}

export default MyForm;
