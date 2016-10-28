import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import MyForm from './MyForm'

function setup(numOfInputs){
  const props = {onSubmit: function(){}}
  if(numOfInputs === 0)
    return mount(<MyForm {...props}></MyForm>)

  if(numOfInputs === 1)
    return mount(
      <MyForm {...props}>
        <input type="text" />
      </MyForm>
    )

  const inputs = []
  for (var i = 0; i < numOfInputs; i++) {
    inputs.push(<input type="text" />)
  }
  return mount(
    <MyForm {...props}>
      {inputs}
    </MyForm>
  )
}
describe("MyForm", function () {
  describe("it renders correct inputs when passed as children", function () {
    it("renders an input of type submit by default", function () {
      const wrapper = setup(0)

      expect(wrapper.find('input[type="submit"]').length).toEqual(1)
    });
    it("when there is one", function () {
      const wrapper = setup(1)

      expect(wrapper.find('input[type="text"]').length).toEqual(1)
    });
    it("when there is more than 1", function () {
      const wrapper = setup(3)

      expect(wrapper.find('input[type="text"]').length).toEqual(3)
    });
  });
  describe("it renders correctly when props.children change", function() {
    it("when present children change", function () {
      //arrange
      let input = <input type="text" />
      const wrapper = mount(
        <MyForm>
          {input}
        </MyForm>
      )
      //act
      input = <input type="text" error="omg an error" />
      wrapper.setProps({children: input})
      //assert
      expect(wrapper.find('input[type="text"]').prop('error')).toEqual("omg an error")
    });
    it("when children are added", function () {
      //arrange
      let input = <input type="text" />
      const wrapper = mount(
        <MyForm>
          {input}
        </MyForm>
      )
      //act
      input = [<input type="text" />, <input type="text" />]
      wrapper.setProps({children: input})
      //assert
      expect(wrapper.find('input[type="text"]').length).toEqual(2)
    });
    it("when children are removed", function () {
      //arrange
      let input = [<input type="text" />, <input type="text" />]
      const wrapper = mount(
        <MyForm>
          {input}
        </MyForm>
      )
      //act
      input = <input type="text" />
      wrapper.setProps({children: input})
      //assert
      expect(wrapper.find('input[type="text"]').length).toEqual(1)
    });
  });
  describe("it sets correct value on inputs when they change", function () {
    // inputs should be defined with a unique id in order for them to be added to the form
    it("when there is one input", function () {
      const wrapper = setup(1)
      const input = wrapper.find('input[type="text"]')

      input.simulate('change', { target: { value: 'test' }})

      expect(input.props().value).toEqual('test')
    });
    it("when there is more than one input", function () {
      const wrapper = mount(
        <MyForm>
          <input id="name" type="text" />
          <input id="message" type="text" />
        </MyForm>
      )
      const nameInput = wrapper.find('#name')
      const messageInput = wrapper.find('#message')

      nameInput.simulate('change', { target: { value: 'john doe', id: 'name' }})
      messageInput.simulate('change', { target: { value: 'dis be a message', id: 'message' }})

      expect(nameInput.prop('value')).toEqual('john doe')
      expect(messageInput.prop('value')).toEqual('dis be a message')
    });
  });
  describe("onSubmit", function () {
    it("calls props.onSubmit when form is sumbmitted", function () {
      //this function can be used to take care of error handling
      const onSubmit = expect.createSpy()
      const wrapper = mount(<MyForm onSubmit={onSubmit} />)
      const submit = wrapper.find('input[type="submit"]')

      submit.simulate('submit')

      expect(onSubmit).toHaveBeenCalled()
    });
    it("injects the current state of the form as the first parameter of onSubmit", function () {
      const onSubmit = expect.createSpy()
      const wrapper = mount(<MyForm onSubmit={onSubmit}><input id="nameInput" type="text" /></MyForm>)
      const input = wrapper.find('input[type="text"]')
      const submit = wrapper.find('input[type="submit"]')

      input.simulate('change', {target: {id: 'nameInput', value: 'random'}})
      submit.simulate('submit')

      expect(onSubmit.calls[0].arguments[0]).toEqual({nameInput: 'random'})
    });
    describe("injects a function as the second parameter of onSubmit", function () {
      it("should reset the form when called with no arguments", function () {
        //arrange
        const onSubmit = expect.createSpy()
        const wrapper = mount(<MyForm onSubmit={onSubmit}><input id="nameInput" type="text" /></MyForm>)
        const input = wrapper.find('input[type="text"]')
        const submit = wrapper.find('input[type="submit"]')
        input.simulate('change', {target: {id: 'nameInput', value: 'random'}})
        submit.simulate('submit')
        //act
        //calls the function passed as the second parameter to onSubmit
        onSubmit.calls[0].arguments[1]()
        //assert
        expect(wrapper.state().form.nameInput).toEqual("")
      });
      it("should reset the form and set the new state of the form to the passed argument", function () {
        //arrange
        const onSubmit = expect.createSpy()
        const wrapper = mount(<MyForm onSubmit={onSubmit}><input id="nameInput" type="text" /></MyForm>)
        const input = wrapper.find('input[type="text"]')
        const submit = wrapper.find('input[type="submit"]')
        input.simulate('change', {target: {id: 'nameInput', value: 'random'}})
        submit.simulate('submit')
        //act
        //calls the function passed as the second parameter to onSubmit
        onSubmit.calls[0].arguments[1]({nameInput: 'set to this value'})
        //assert
        expect(wrapper.state().form.nameInput).toEqual("set to this value")
      });
    });
  });
});
