import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import HomePage from './HomePage'
import { Link } from 'react-router'

function setup() {
  return shallow(<HomePage />)
}

describe("HomePage", function () {
  describe("it renders with a .HomePage-welcome", function () {
    it("renders", function () {
      expect(setup().find(".HomePage-welcome").length).toEqual(1)
    });
    it("renders a h1 as children", function () {
      const wrapper = setup()
      const welcome = wrapper.find('.HomePage-welcome')

      expect(welcome.find("h1").length).toBe(1)
    });
    it("renders a h2 as children", function () {
      const wrapper = setup()
      const welcome = wrapper.find('.HomePage-welcome')

      expect(welcome.find("h2").length).toBe(1)
    });
    it("renders a Link as children with prop to='/about' ", function () {
      const wrapper = setup()
      const welcome = wrapper.find('.HomePage-welcome')
      const link = welcome.find(Link)

      expect(link.length).toBe(1)
      expect(link.prop('to')).toEqual('/about')

    });
  });
});
