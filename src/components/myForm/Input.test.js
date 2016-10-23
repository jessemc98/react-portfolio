import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import MyInput from './Input'

function setup(props) {
  return shallow(<MyInput {...props}/>)
}

describe("MyInput", function () {
  describe("it renders an input element:", function () {
    it("renders", function () {
      const wrapper = setup()

      expect(wrapper.find('input').length).toEqual(1)
    });
    it("with the passed type in props.type", function () {
      const wrapper = setup({type:'email'})
      const input = wrapper.find('input')

      expect(input.prop('type')).toEqual('email')
    });
    it("with type='text' by default", function () {
      const wrapper = setup()
      const input = wrapper.find('input')

      expect(input.prop('type')).toEqual('text')
    });
    it("with id passed in props.name", function () {
      const wrapper = setup({name: 'form-email'})
      const input = wrapper.find('input')

      expect(input.prop('id')).toEqual('form-email')
    });
    it("with value passed in props.value", function () {
      const wrapper = setup({value: 'test123'})
      const input = wrapper.find('input')

      expect(input.prop('value')).toEqual('test123')
    });
    it("calls props.onChange when changed", function () {
      const change = expect.createSpy()
      const wrapper = setup({onChange: change})
      const input = wrapper.find('input')

      input.simulate('change')

      expect(change).toHaveBeenCalled()
    });
    it("adds a class of MyInput-is-active and MyInput-is-completed to wrapper when focused", function () {
      const wrapper = mount(<MyInput />)
      const myInputWrapper = wrapper.find('.MyInput')
      const input = wrapper.find('input')

      input.simulate('focus')

      expect(myInputWrapper.hasClass('MyInput-is-active')).toBeTruthy()
      expect(myInputWrapper.hasClass('MyInput-is-completed')).toBeTruthy()
    });
    it("removes class of MyInput-is-active on wrapper on focusout", function () {
      const wrapper = mount(<MyInput />)
      const myInputWrapper = wrapper.find('.MyInput')
      const input = wrapper.find('input')

      input.simulate('focus')
      input.simulate('blur')

      expect(myInputWrapper.hasClass('MyInput-is-active')).toBeFalsy()
    });
    it("removes class of MyInput-is-completed on wrapper on focusout if props.value is an empty string or undefined", function () {
      const wrapper = mount(<MyInput />)
      const myInputWrapper = wrapper.find('.MyInput')
      const input = wrapper.find('input')

      input.simulate('focus')
      input.simulate('blur')

      expect(myInputWrapper.hasClass('MyInput-is-completed')).toBeFalsy()
    });
    it("does not remove class of MyInput-is-completed on wrapper on focusout if props.value is not an empty string or undefined", function () {
      const wrapper = mount(<MyInput value="test"/>)
      const myInputWrapper = wrapper.find('.MyInput')
      const input = wrapper.find('input')

      input.simulate('focus')
      input.simulate('blur')

      expect(myInputWrapper.hasClass('MyInput-is-completed')).toBeTruthy()
    });
  });
  describe("it renders a label element:", function () {
    it("renders", function () {
      const wrapper = setup()
      const label = wrapper.find('label')

      expect(label.length).toEqual(1)
    });
    it("with prop htmlFor === passed props.name", function () {
      const wrapper = setup({name: 'form-email'})
      const label = wrapper.find('label')

      expect(label.prop('htmlFor')).toEqual('form-email')
    });
    it("with innerHTML passed from props.placeHolder", function () {
      const wrapper = setup({placeHolder: 'Email'})
      const label = wrapper.find('label')

      expect(label.text()).toEqual('Email')
    });

  });
});
