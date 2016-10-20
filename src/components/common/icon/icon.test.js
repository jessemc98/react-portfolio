import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Icon from './Icon'

function setup(iconName) {
  return shallow(<Icon iconName={iconName}/>)
}

describe("Icon component", function () {
  it("should return an img element", function () {
    const wrapper = setup()
    expect(wrapper.type()).toEqual('img')
  });
  it("should return an img with src === src/assets/icons/props.iconName.svg", function () {
    const wrapper = setup('test')
    expect(wrapper.prop('src')).toEqual('src/assets/icons/test.svg');
  });
});
