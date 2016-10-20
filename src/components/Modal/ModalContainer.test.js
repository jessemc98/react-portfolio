import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import ModalContainer from './ModalContainer'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

describe("ModalContainer", function () {
  it("renders a ModalContainer_button", function () {
    const wrapper = shallow(<ModalContainer />)
    expect(wrapper.find('.ModalContainer_button')).toExist()
  });

  it("renders a ModalContainer to the body when ModalContainer_button is clicked", function () {
    //arrange
    const wrapper = mount(<ModalContainer />)
    const body = window.document.body
    const button = wrapper.find('.ModalContainer_button')
    //act
    button.simulate('click')
    //assert
    const modalContainer = document.querySelector('.ModalContainer')
    expect(modalContainer).toExist()
    //cleanup
    body.removeChild(modalContainer)
  });
  it("doesnt render a ModalContainer to the body if ModalContainer_button has not been clicked", function () {
    const wrapper = mount(<ModalContainer />)
    const body = window.document.body
    const button = wrapper.find('.ModalContainer_button')

    const modalContainer = document.querySelector('.ModalContainer')
    expect(modalContainer).toNotExist()

  });
  // it("cleans up body when component is unmounted", function () {
  //   const wrapper = mount(<ModalContainer />)
  //   const body = window.document.body
  //   const button = wrapper.find('.ModalContainer_button')
  //   button.simulate('click')
  //
  //   const modalContainer = document.querySelector('.ModalContainer')
  //   expect(wrapper.unmount() && modalContainer).toNotExist()
  // });
});
