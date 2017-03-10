import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import ContactForm from './ContactForm'
import MyInput from '../common/inputs/MyInput'
import MyTextArea from '../common/inputs/MyTextArea'

describe("ContactForm", function () {
  it("renders correct amount of inputs", function () {
    const wrapper = shallow(<ContactForm />)

    expect(wrapper.find(MyInput).length).toEqual(2)
    expect(wrapper.find(MyTextArea).length).toEqual(1)
  });
  describe("validates form when method onSubmit is called", function () {
    describe("passes errors to children", function () {
      describe("name input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", comment: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const nameInput = wrapper.find('#name')
          expect(nameInput.prop('error')).toExist()
        });
        it("needs to be atleast 3 characters long", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "jm", email: "", comment: ""}


          wrapper.instance().onSubmit(state)
          wrapper.update()
          const nameInput =
          expect(wrapper.find('#name').prop('error')).toExist()

          state.name = "jmc"
          wrapper.instance().onSubmit(state)
          wrapper.update()

          expect(wrapper.find('#name').prop('error')).toNotExist()
        });
      });
      describe("email input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", comment: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.find('#email')
          expect(emailInput.prop('error')).toExist()
        });
        it("must contain an @ symbol", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "hello", comment: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.find('#email')
          expect(emailInput.prop('error')).toExist()
        });
      });
      describe("comment input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", comment: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.find('#comment')
          expect(emailInput.prop('error')).toExist()
        });
      });
    });
  });
});
