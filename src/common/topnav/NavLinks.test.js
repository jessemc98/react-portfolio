import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import NavLinks from './NavLinks'

function setup(links, classes) {
  const props = { links, classes }

  return shallow(<NavLinks {...props}/>)
}

describe("NavLinks", function () {
  it("should render an amount of links equal to the amount passed as props", function () {
    const links = [
      {path: '/path1', name: 'one'},
      {path: '/path2', name: 'two'},
      {path: '/path3', name: 'three'}
    ]

    let wrapper = setup(links)

    expect(wrapper.find('Link').length).toEqual(3)
    wrapper = setup([...links, {path:'/path4', name:'four'}])
    expect(wrapper.find('Link').length).toEqual(4)
  });
  it("should render a ul with the class passed into props.classes as a string", function () {
    const classes = "test"
    const wrapper = setup([], classes)
    expect(wrapper.is("ul")).toBeTruthy();
    expect(wrapper.hasClass("test")).toBeTruthy();
  });
  it("should render with multiple classes when passed a space deliminated string through props.classes", function () {
    const classes = "test test2 test3"
    const wrapper = setup([], classes)
    expect(wrapper.hasClass("test")).toBeTruthy();
    expect(wrapper.hasClass("test2")).toBeTruthy();
    expect(wrapper.hasClass("test3")).toBeTruthy();
  });
  it("should not render any links when passed an empty array", function () {
    const links = []
    const wrapper = setup(links)

    expect(wrapper.children().length).toEqual(0)
  });
  it("should return an indexLink for links with property isIndex set to true", function () {
    const links = [
      {isIndex: true, path:'/', name: 'test'}
    ]

    let wrapper = setup(links)

    expect(wrapper.find('IndexLink').length).toEqual(1)
  });
  it("should not return an IndexLink for links with property isIndex set to false or undefined", function () {
    const links = [
      {isIndex: false, path:'/', name: 'test'},
      {path: '/', name: 'test'}
    ]

    let wrapper = setup(links)
    expect(wrapper.find('IndexLink').length).toEqual(0);
  });
  it("should pass 'active' to the links props.activeClassName", function () {
    const links = [
      {isIndex: true, path:'/', name: 'test'},
      {path: '/', name: 'test'}
    ]
    const wrapper = setup(links)

    expect(wrapper.find('Link').prop("activeClassName")).toEqual("active");
    expect(wrapper.find('IndexLink').prop("activeClassName")).toEqual("active");
  });
  it("should add a key prop to rendered links", function () {
    const links = [
      {path:'/', name: 'test'},
      {path: '/', name: 'test'}
    ]
    const wrapper = setup(links)

    wrapper.children().forEach((link) => {
      expect(link.props()).toIncludeKey('key')
    })
  });
});
