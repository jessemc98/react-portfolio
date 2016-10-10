import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import NavFooter from './NavFooter'

function setup(props) {
  return shallow(<NavFooter {...props} />)
}

describe("NavFooter", function () {
  it("should render two FabLinks", function () {
    expect(setup().find('FabLink').length).toEqual(2)
  });
  it("should render with a class of NavFooter", function () {
    expect(setup().hasClass('NavFooter')).toBeTruthy()
  });
});
