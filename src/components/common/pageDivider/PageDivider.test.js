import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import PageDivider from './PageDivider'

function setup(title){
  return shallow(<PageDivider title={title} />)
}

describe("PageDivider", function () {
  it("should return a <h2> element", function () {
    const wrapper = setup()

    expect(wrapper.find('h2').length).toEqual(1)
  });
  it("should contain text in the <h2> header equal to props.title", function () {
    // arrange
    const wrapper = setup()
    // act
    wrapper.setProps({title: 'test'})
    // assert
    const header = wrapper.find('h2')
    expect(header.text()).toEqual('test')
  });
  it("should have a css class of PageDivider", function () {
    const wrapper = setup()

    expect(wrapper.hasClass('PageDivider')).toBeTruthy()
  });
  it("should render 2 spans", function () {
    const wrapper = setup()

    expect(wrapper.find("span").length).toEqual(2)
  });
});
