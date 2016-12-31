import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'

import KillFocus from './KillFocus'

describe("killFocus", function () {
  /*
  * children must be a single root element which will be
  * searched for any focusable elements
  */
  it("renders children when enabled = true", function () {
    const wrapper = shallow(
      <KillFocus enabled>
        <div>
          <input />
        </div>
      </KillFocus>
    )

    expect(wrapper.find('input').length).toEqual(1)
  });
  describe("adds proper tabIndex to inputs", function () {
    it("when enabled = false", function () {
      const wrapper = mount(
        <KillFocus>
          <div>
            <input />
          </div>
        </KillFocus>
      )
      const input = wrapper.find('input')

      expect(input.node.tabIndex).toEqual('0')
    });
    it("when enabled = true", function () {
      const wrapper = mount(
        <KillFocus enabled>
          <div>
            <input />
          </div>
        </KillFocus>
      )
      const input = wrapper.find('input')

      expect(input.node.tabIndex).toEqual('-1')
    });
    it("when enabled is changed from true to false", function () {
      const wrapper = mount(
        <KillFocus enabled>
          <div>
            <input />
          </div>
        </KillFocus>
      )
      const input = wrapper.find('input')

      wrapper.setProps({enabled: false})

      expect(input.node.tabIndex).toEqual('0')
    });
    it("when enabled is changed from false to true", function () {
      const wrapper = mount(
        <KillFocus>
          <div>
            <input />
          </div>
        </KillFocus>
      )
      const input = wrapper.find('input')

      wrapper.setProps({enabled: true})

      expect(input.node.tabIndex).toEqual('-1')
    });
  });
});
