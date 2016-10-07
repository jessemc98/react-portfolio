import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import NavLinks from './NavLinks'

function setup(links) {
  const props = { links }

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
});
