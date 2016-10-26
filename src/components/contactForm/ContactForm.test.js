import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import ContactForm from './ContactForm'
import MyInput from '../common/inputs/MyInput'

describe("ContactForm", function () {
  it("renders correct amount of MyInputs", function () {
    const wrapper = shallow(<ContactForm />)

    expect(wrapper.find(MyInput).length).toEqual(3)
  });
  describe("validates form when method onSubmit is called", function () {
    describe("passes errors to children", function () {
      describe("name input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", message: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const nameInput = wrapper.childAt(0)
          expect(nameInput.prop('error')).toExist()
        });
        it("needs to be atleast 3 characters long", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "jm", email: "", message: ""}


          wrapper.instance().onSubmit(state)
          wrapper.update()
          const nameInput =
          expect(wrapper.childAt(0).prop('error')).toExist()

          state.name = "jmc"
          wrapper.instance().onSubmit(state)
          wrapper.update()

          expect(wrapper.childAt(0).prop('error')).toNotExist()
        });
      });
      describe("email input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", message: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.childAt(1)
          expect(emailInput.prop('error')).toExist()
        });
        it("must contain an @ symbol", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "hello", message: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.childAt(1)
          expect(emailInput.prop('error')).toExist()
        });
      });
      describe("message input", function () {
        it("is required", function () {
          const wrapper = shallow(<ContactForm />)
          const state = {name: "", email: "", message: ""}

          wrapper.instance().onSubmit(state)
          wrapper.update()

          const emailInput = wrapper.childAt(2)
          expect(emailInput.prop('error')).toExist()
        });
      });
    });
  });
});
