import React, { PropTypes } from 'react'
import MyForm from '../common/form/MyForm'
import MyInput from '../common/inputs/MyInput'
import MyTextArea from '../common/inputs/MyTextArea'

const INPUTS = {
  name: {
    id: 'name',
    name: 'name',
    placeHolder: 'Name'
  },
  email: {
    id: 'email',
    name: 'email',
    placeHolder: 'Email'
  },
  comment: {
    id: 'comment',
    name: 'comment',
    placeHolder: 'Message'
  }
}
class ContactForm extends React.PureComponent {
  constructor(props, context) {
    super(props, context)
    this.state = {
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(form, resetForm) {
    if (this.isValidForm(form)) {
      //send email here
      document.hgmailer.submit()
    }
  }

  isValidForm(form) {
    let errors = {}
    //name input validation
    errors.name = this.validateName(form.name || "")
    //email input validation
    errors.email = this.validateEmail(form.email || "")
    //message input validation
    if(!form.comment || form.comment === "") {
      errors.comment = "This field is required"
    }

    this.setState({ errors })

    if (errors.name || errors.email || errors.comment) {
      return false
    }
    return true
  }
  validateEmail(value) {
    if(!value || value === "") {
      return "Please enter an email address"
    }
    if(value.indexOf("@") === -1){
      return "Email address must contain an '@' symbol"
    }
    if (!/^\S+@[a-z0-9_.-]+\.[a-z]{2,6}$/i.test(value)) {
      return "A valid email address is required."
    }
  }
  validateName(value) {
    if(value.length < 3) {
      return "Please enter a name longer than 3 characters"
    }
    if (!/\S+/.test(value)) {
      return "Please provide your name."
    }
    if(!value || value === "") {
      return "This field is required"
    }
  }

  render () {
    const { name, email, comment } = INPUTS
    return (
      <MyForm name="hgmailer"
        onSubmit={this.onSubmit}
        action="http://dev-jesse.com/cgi-sys/formmail.pl"
        method="post">
        <input id="recipient"type="hidden" name="recipient" value="contact@dev-jesse.com"/>
        <input id="subject" type="hidden" name="subject" value="FormMail E-Mail"/>
        <MyInput {...name} error={this.state.errors.name}/>
        <MyInput {...email} error={this.state.errors.email}/>
        <MyTextArea {...comment} error={this.state.errors.comment}/>
        <input id="redirect" type="hidden" name="redirect" value="http://dev-jesse.com/contact"/>
      </MyForm>
    )
  }
}

export default ContactForm;
