import expect from 'expect'
import React from 'react'
import { mount } from 'enzyme'

import Modal from './Modal'

function setup() {
  return mount(<Modal title="modal" content="test test test" hide={function(){}}/>)
}

describe("Modal:", function () {
  let wrapper;
  let hideFunc;
  beforeEach(function () {
    hideFunc = expect.createSpy()
    wrapper = mount(<Modal title="modal" content="test test test" hide={hideFunc} />)
  });
  describe("Modal-container", function () {
    it("should call props.hide when clicked", function () {
      //arrange
      const ModalContainer = wrapper.find('.Modal-container')
      //act
      ModalContainer.simulate('click')
      //assert
      expect(hideFunc).toHaveBeenCalled()
    });
    it("should not call props.hide if click was on children", function () {
      //arrange
      const child = wrapper.find('.Modal')
      //act
      child.simulate('click')
      //assert
      expect(hideFunc).toNotHaveBeenCalled();
    });
  });
  it("should call props.hide if close button is clicked", function () {
    //arrange
    const child = wrapper.find('.Modal_button')
    //act
    child.simulate('click')
    //assert
    expect(hideFunc).toHaveBeenCalled()
  });
});
