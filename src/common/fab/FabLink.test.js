import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import FabLink from './FabLink'

function setup(props) {
  return shallow(<FabLink {...props} />)
}

describe("FabLink", function () {
  it("should render a div", function () {
    expect(setup().type()).toEqual("div")
  });
  it("should render with a class of FabLink", function () {
    expect(setup().hasClass("FabLink")).toBeTruthy()
  });
  it("should render a Fab", function(){
    const wrapper = setup()

    expect(wrapper.find('Fab').length).toEqual(1)
  })
  it("should create small 'Fab' with correct props", function () {
    const wrapper = setup({iconName: 'menu-button', path: '/test'})

    const expected = {
      iconName: 'menu-button',
      path: '/test',
      small: true
    }

    expect(wrapper.find('Fab').prop('iconName')).toEqual(expected.iconName);
    expect(wrapper.find('Fab').prop('path')).toEqual(expected.path);
    expect(wrapper.find('Fab').prop('small')).toEqual(expected.small);
  });
  it("should render an <a />  / link element", function () {
    const wrapper = setup()
    expect(wrapper.find('a').length).toEqual(1)
  });
  it("should render the link with text equal to props.text", function () {
    const wrapper = setup({text: 'test'})
    const link = wrapper.find('a')

    expect(link.text()).toEqual('test')
  });
  it("should render the link with a href equal to props.path", function() {
    const wrapper = setup({path: '/test'})

    expect(wrapper.find('a').prop('href')).toEqual('/test')
  })
  it("should call onClick when children are clicked", function () {
    const mySpy = expect.createSpy()
    const wrapper = setup({onClick: mySpy})
    const children = wrapper.children()

    children.forEach(child => {
      child.simulate('click')
    })

    expect(mySpy.calls.length).toEqual(children.length)
  });
});
