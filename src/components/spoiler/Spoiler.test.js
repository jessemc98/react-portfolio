import React from 'react'
import { shallow, mount } from 'enzyme'
import expect from 'expect'

import Spoiler from './Spoiler'

describe("Spoiler", function () {
  describe("it renders with correct state", function () {
    it("when props.showDefault is undefined/false", function () {
      const wrapper = shallow(<Spoiler />)

      expect(wrapper.state('hidden')).toBeTruthy()
    });
    it("when props.showDefault is true", function () {
      const wrapper = shallow(<Spoiler showDefault={true} />)
      console.log('hidden state!!!!!', wrapper.state('hidden'))
      expect(wrapper.state('hidden')).toBeFalsy()
    });
  });
  describe("it renders the passed component", function () {
    it("if its a normal element", function () {

    });
    it("if its a custom element", function () {

    });
    it("with style.height of 0 when hidden", function () {

    });
    it("with style.height equal to components initial height when not hidden", function () {

    });
  });
  describe("it renders FabLink", function () {
    it("renders FabLink", function () {

    });
  });
  describe("method: toggleContent", function () {
    it("sets state.hidden to false when its true", function () {

    });
    it("sets state.hidden to true when its false", function () {

    });
  });
});
