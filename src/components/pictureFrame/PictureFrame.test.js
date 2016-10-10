import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import PictureFrame from './PictureFrame'

function setup(props) {
  return shallow(<PictureFrame {...props} />)
}

describe("PictureFrame", function () {
  it("should render a FabList", function () {
    const wrapper = setup()
    expect(wrapper.find('FabList').length).toEqual(1)
  });
  it("should pass 3 links to FabList", function () {
    const wrapper = setup()
    const fabList = wrapper.find('FabList')

    expect(fabList.prop('links').length).toEqual(3)
  });
  it("first child should be an image", function () {
    const wrapper = setup()

    expect(wrapper.childAt(0).type()).toEqual('img')
  });
  it("should render with a class of PictureFrame", function () {

  });
});
