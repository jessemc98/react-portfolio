import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import MyForm from './Form'

function setup(numOfInputs){
  if(numOfInputs === 0)
    return mount(<MyForm></MyForm>)

  if(numOfInputs === 1)
    return mount(
      <MyForm>
        <input type="text" />
      </MyForm>
    )

  const inputs = []
  for (var i = 0; i < numOfInputs; i++) {
    inputs.push(<input type="text" />)
  }
  return mount(
    <MyForm>
      {inputs}
    </MyForm>
  )
}

describe("MyForm", function () {
  describe("it renders correct inputs when passed as children", function () {
    it("renders an input of type submit", function () {
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
  describe("it sets correct value on inputs when they change", function () {
    it("when there is one input", function () {
      const wrapper = setup(1)
      const input = wrapper.find('input[type="text"]')

      input.simulate('change', { target: { value: 'test' }})

      expect(input.props().value).toEqual('test')
    });
    it("when there is more than one input", function () {
      const wrapper = setup(2)
      const inputs = wrapper.find('input[type="text"]')
      const inputOne = shallow(inputs.get(0))
      const inputTwo = shallow(inputs.get(1))

      inputOne.simulate('change', { target: { value: 'input one value' }})
      inputTwo.simulate('change', { target: { value: 'input two value' }})

      expect(inputOne.prop('value')).toEqual('input one value')
      expect(inputTwo.prop('value')).toEqual('input two value')
    });
  });
});
