import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'

import ModalContainer from './ModalContainer'
import Modal from './Modal'

const modals = {
  react: {title: 'react', imgSrc: '/assets/test'},
  redux: {title: 'redux', imgSrc: '/assets/test2'}
}
describe("ModalContainer", function () {
  // mock modals
  ModalContainer.__Rewire__('modals', modals)
  describe("renders a Modal", function () {
    it("depending on route params", function () {
      const wrapper = shallow(<ModalContainer params={{modalId: 'react'}}/>)
      const modal = wrapper.find(Modal)

      expect(modal.prop('title')).toEqual(modals.react.title)
      expect(modal.prop('imgSrc')).toEqual(modals.react.imgSrc)
    });
    it("calls browserHistory.push(/about) when modal.props.hide is called", function () {
      const push = expect.createSpy()
      // stub browserHistory
      ModalContainer.__Rewire__('browserHistory', { push })
      const wrapper = shallow(<ModalContainer params={{modalId: 'react'}} />)
      const modal = wrapper.find(Modal)

      modal.prop('hide')()

      expect(push).toHaveBeenCalledWith('/about')
    });
  });
});
