import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import Modal from './Modal'

function setup() {
  return mount(<Modal title="modal" content="test test test" hide={function(){}}/>)
}

describe("Modal:", function () {
  it("renders with initial state of hidden", function () {
    const wrapper = setup()

    expect(wrapper.state('hidden')).toBeFalsy()
  });
  describe("Modal-container", function () {
    it("should render with a class of Modal-hidden when state.hidden is true", function () {
      //arrange
      const wrapper = setup()
      //act
      wrapper.setState({hidden: true})
      //assert
      const ModalContainer = wrapper.find('.Modal-container')
      expect(ModalContainer.hasClass('Modal-hidden')).toBeTruthy()
    });
    it("should not have a class of Modal-hidden when state.hidden is false", function () {
      //arrange
      const wrapper = setup()
      //act
      wrapper.setState({hidden: false})
      //assert
      const ModalContainer = wrapper.find('.Modal-container')
      expect(ModalContainer.hasClass('Modal-hidden')).toBeFalsy()
    });
    describe("should act when clicked", function () {
      let wrapper;
      beforeEach(function () {
        wrapper = setup()
      });
      it("should toggle state.hidden if it is false", function () {
        //arrange
        wrapper.setState({hidden: false})
        const ModalContainer = wrapper.find('.Modal-container')
        //act
        ModalContainer.simulate('click')
        //assert
        expect(wrapper.instance().state.hidden).toBeTruthy()
      });
      it("should not toggle state.hidden if it is true", function () {
        //arrange
        wrapper.setState({hidden: true})
        const ModalContainer = wrapper.find('.Modal-container')
        //act
        ModalContainer.simulate('click')
        //assert
        expect(wrapper.instance().state.hidden).toBeTruthy();
      });
      it("should not toggle state.hidden if click was on children", function () {
        //arrange
        wrapper.setState({hidden: false})
        const child = wrapper.find('.Modal')
        //act
        child.simulate('click')
        //assert
        expect(wrapper.instance().state.hidden).toBeFalsy();
      });
      it("should call props.hide if state.hidden is false", function () {
        const hideFunc = expect.createSpy()
        //arrange
        wrapper = mount(<Modal title="modal" content="test test test" hide={hideFunc} />)
        wrapper.setState({hidden: false})
        const ModalContainer = wrapper.find('.Modal-container')
        //act
        ModalContainer.simulate('click')
        //assert
        expect(hideFunc).toHaveBeenCalled()
      });
    });
  });

});
