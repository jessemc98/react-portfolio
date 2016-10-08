import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

import TopNav from './TopNav'

function setup() {
  const props = {}

  return shallow(<TopNav />)
}

describe("TopNav", function () {
  it("should render a div with class of TopNav", function () {
    const wrapper = setup()

    expect(wrapper.is('div')).toBeTruthy()
    expect(wrapper.hasClass('TopNav')).toBeTruthy()
  });
  it("should render a NavLinks component", function () {
    const wrapper = setup()

    expect(wrapper.find('NavLinks').length).toBe(1)
  });
  it("should render the NavLinks component with props.classes of TopNav-NavLinks", function () {
    const wrapper = setup()
    const navLinks = wrapper.find('NavLinks')

    expect(navLinks.prop("classes")).toEqual("TopNav-NavLinks")
  });
  it("should render the NavLinks Component with a list of links passed as props.links", function () {
    const wrapper = setup()
    const navLinks = wrapper.find('NavLinks')

    expect(navLinks.prop("links")).toBeA(Array)
    expect(navLinks.prop("links")[0]).toIncludeKeys(['path', 'name'])
  });
  it("should render a button with a class of close", function () {
    const wrapper = setup()

    expect(wrapper.find('button').hasClass('close')).toBeTruthy()
  });
  it("should toggle hidden class to component when close button is clicked", function(){
    const wrapper = setup()
    wrapper.setState({isOpen: false})
    const button = wrapper.find('button.close')

    expect(wrapper.hasClass('hidden')).toBeTruthy()

    button.simulate('click')

    expect(wrapper.hasClass('hidden')).toBeFalsy()

    button.simulate('click')

    expect(wrapper.hasClass('hidden')).toBeTruthy()
  })
});
