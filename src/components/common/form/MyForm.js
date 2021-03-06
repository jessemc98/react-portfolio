import React, { PropTypes } from 'react'
import './MyForm.scss'

class MyForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      form: React.Children
        .toArray(props.children)
        .reduce((total, child) => {
          total[child.props.id] = child.props.value
          return total
        }, {})
    }
    this._childrenWithProps = null
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }
  componentWillMount(){
    this._childrenWithProps = this._mapOnChangeToChildren(this.props.children)
  }
  componentWillReceiveProps(newProps){
    this._childrenWithProps = this._mapOnChangeToChildren(newProps.children)
  }
  _mapOnChangeToChildren(children) {
    return (React.Children
      .toArray(children)
      .map((child, i) =>
        React.cloneElement(child, {
          onChange: e => this.onChange(e),
          key: i
        })
      )
    )
  }
  onChange(e) {
    const newForm = Object.assign({}, this.state.form)
    newForm[e.target.id] = e.target.value
    this.setState({form: newForm})
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.form, this.resetForm)
  }
  resetForm(newForm) {
    let form = {}
    for (let key in this.state.form) {
      if (this.state.form.hasOwnProperty(key)) {
        form[key] = ""
      }
    }
    form = Object.assign(form, newForm)
    this.setState({form})
  }
  render () {
    return (
      <form className="MyForm" {...this.props} onSubmit={this.onSubmit}>
        {this._childrenWithProps &&
          this._childrenWithProps
            .map((child, i) => React.cloneElement(child, {
              value: this.state.form[child.props.id]
            }))
        }
        <input className="MyForm_button-submit jmc_button" type="submit" value="SEND"/>
      </form>
    )
  }
}
MyForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,

  ]),
  onSubmit: PropTypes.func.isRequired
}

export default MyForm;
