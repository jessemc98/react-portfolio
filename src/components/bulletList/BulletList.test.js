import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import BulletList from './BulletList'

describe("BulletList", function () {
  it("renders a ul", function () {
    const wrapper = shallow(<BulletList />)

    expect(wrapper.find('ul').length).toBeGreaterThanOrEqualTo(1)
  });
  it("renders a .BulletList_title element with the correct title passed from props followed by a colon", function () {
    const wrapper = shallow(<BulletList title="Test Title"/>)
    const title = wrapper.find('.BulletList_title')

    expect(title.text()).toEqual('Test Title:')
  });
  describe("renders an li for each item passed as props.items", function () {
    it("when there is one item", function () {
      const items = ["test"]
      const wrapper = shallow(<BulletList items={items} />)

      expect(wrapper.find('li').length).toEqual(1)
    });
    it("when there is more than one item", function () {
      const items = ['test', 'test', 'test']
      const wrapper = shallow(<BulletList items={items} />)

      expect(wrapper.find('li').length).toEqual(3)
    });
    it("when there are no items", function () {
      const items = []
      const wrapper = shallow(<BulletList items={items} />)

      expect(wrapper.find('li').length).toEqual(0)
    });
  });
  it("doesnt throw an error when rendered with no props", function () {
    expect(shallow(<BulletList />)).toBeTruthy()
  });
});
