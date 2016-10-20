import React from "react"
import { shallow } from 'enzyme'
import expect from 'expect'

import FabLinks from './FabList'

function setup(props) {
  if(!props){
    var props = {
      links: []
    }
  }
  const elem = shallow(<FabLinks {...props}/>)

  return elem
}

describe("SocialLinks", function () {
  it("should render an amount of Fabs equal to props.links.length", function () {
    let props = {
      links: [
        {}
      ]
    }

    const wrapper = setup(props)
    expect(wrapper.find("Fab").length).toEqual(1)

    props.links = [{}, {}, {}]
    wrapper.setProps(props)
    expect(wrapper.find("Fab").length).toEqual(3)
  });
  it("should pass props from links array to rendered Fabs", function () {
    let props = {
      links: [{path: '/', iconName: 'menu-button'}]
    }
    const wrapper = setup(props)
    expect(wrapper.find('Fab').props()).toEqual(props.links[0])
  });
  it("should render with a class of .FabList", function () {
    const wrapper = setup()
    expect(wrapper.hasClass('FabList')).toBeTruthy()
  });
  it("should render each fab with a key", function () {
    let props = {
      links: [{}, {}, {}]
    }
    const wrapper = setup(props)

    wrapper.find('Fab').forEach(fab => {
      expect(fab.key()).toExist()
    })

  });

});
