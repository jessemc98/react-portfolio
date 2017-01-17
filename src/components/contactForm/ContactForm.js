import React, { PropTypes } from 'react'
import MyForm from '../common/form/MyForm'
import MyInput from '../common/inputs/MyInput'
import MyTextArea from '../common/inputs/MyTextArea'

class ContactForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      inputs: {
        name: {
          id: 'name',
          placeHolder: 'Name'
        },
        email: {
          id: 'email',
          placeHolder: 'Email'
        },
        message: {
          id: 'message',
          placeHolder: 'Message'
        }
      },
      errors: {}
    }

    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(form, resetForm) {
    //send email here
    this.isValidForm(form) && resetForm({name: "message sent!"})
  }

  isValidForm(state) {
    let errors = {}
    //name input validation
    errors.name = this.validateName(state.name || "")
    //email input validation
    errors.email = this.validateEmail(state.email || "")
    //message input validation
    if(!state.message || state.message === "") {
      errors.message = "this field is required"
    }

    this.setState({ errors })

    if (errors.name || errors.email || errors.message) {
      return false
    }
    return true
  }
  validateEmail(value) {
    if(!value || value === "") {
      return "this field is required"
    }
    if(value.indexOf("@") === -1){
      return "email address must contain an '@' symbol"
    }
  }
  validateName(value) {
    if(!value || value === "") {
      return "this field is required"
    }
    if(value.length < 3) {
      return "please enter a name longer than 3 characters"
    }
  }

  render () {
    const { name, email, message } = this.state.inputs
    return (
      <MyForm onSubmit={this.onSubmit}>
        <MyInput name={name.id} {...name} error={this.state.errors.name}/>
        <MyInput name={email.id} {...email} error={this.state.errors.email}/>
        <MyTextArea name={message.id} {...message} error={this.state.errors.message}/>
      </MyForm>
    )
  }
}

export default ContactForm;
