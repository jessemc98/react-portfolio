import React from 'react'
import MyForm from '../myForm/Form'
import MyInput from '../myForm/Input'
import './ContactPage.scss'

const ContactPage = (props) => {
  return (
    <div id="ContactPage">
      <h2>ContactPage</h2>
      <MyForm>
        <MyInput name="name" placeHolder="Name"/>
        <MyInput name="email" type="email" placeHolder="Email"/>
        <MyInput name="message" placeHolder="Message"/>
      </MyForm>
    </div>
  )
}

export default ContactPage
