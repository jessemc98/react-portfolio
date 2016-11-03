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
  describe("it should render a NavLinks component when open", function () {
    it("should render a NavLinks component", function () {
      const wrapper = setup()
      wrapper.setState({isOpen: true})
      console.log('!!!!!', wrapper.children().length)

      expect(wrapper.find('NavLinks').length).toBe(1)
    });
    it("with props.classes of TopNav_content_NavLinks", function () {
      const wrapper = setup()
      wrapper.setState({isOpen: true})
      const navLinks = wrapper.find('NavLinks')

      expect(navLinks.prop("classes")).toEqual("TopNav_content_NavLinks")
    });
    it("with a list of links passed as props.links", function () {
      const wrapper = setup()
      wrapper.setState({isOpen: true})
      const navLinks = wrapper.find('NavLinks')

      expect(navLinks.prop("links")).toBeA(Array)
      expect(navLinks.prop("links")[0]).toIncludeKeys(['path', 'name'])
    });
  });

  it("should render a button with a class of close", function () {
    const wrapper = setup()

    expect(wrapper.find('button').hasClass('TopNav_toggleButton')).toBeTruthy()
  });
  it("should toggle hidden class on component when close button is clicked", function(){
    const wrapper = setup()
    wrapper.setState({isOpen: false})
    const button = wrapper.find('.TopNav_toggleButton')

    expect(wrapper.hasClass('hidden')).toBeTruthy()

    button.simulate('click')

    expect(wrapper.hasClass('hidden')).toBeFalsy()

    button.simulate('click')

    expect(wrapper.hasClass('hidden')).toBeTruthy()
  })
});
