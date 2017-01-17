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
    //mock dependencies
    Modal.__Rewire__('Backdrop', React.createClass({
      render: function() {return <div {...this.props}>{this.props.children}</div>}
    }))
    Modal.__Rewire__('FocusTrap', React.createClass({
      render: function() {return <div {...this.props}>{this.props.children}</div>}
    }))

    hideFunc = expect.createSpy()
    wrapper = mount(<Modal title="modal" content="test test test" hide={hideFunc} />)
  });
  afterEach(function () {
    Modal.__ResetDependency__('Backdrop')
    Modal.__ResetDependency__('FocusTrap')
  });
  it("should call props.hide when Modal-container is clicked", function () {
    //arrange
    const ModalContainer = wrapper.find('.Modal-container')
    //act
    ModalContainer.simulate('click')
    //assert
    expect(hideFunc).toHaveBeenCalled()
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
