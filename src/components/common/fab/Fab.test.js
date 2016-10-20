import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Fab from './Fab'


function setup(props) {

  return shallow(<Fab {...props} />)
}

describe("Fab", function () {
  it("returns an a element", function () {
    const wrapper = setup()

    expect(wrapper.type()).toEqual('a')
  });
  it("returned a.props.href should === props.path", function () {
    const wrapper = setup({path: '/testpath'})

    expect(wrapper.prop('href')).toEqual('/testpath')
  });
  it("contains an <Icon/> component", function () {
    const wrapper = setup()

    expect(wrapper.find("Icon").length).toEqual(1)
  });
  it("<Icon /> should have iconName prop === props.iconName", function () {
    const wrapper = setup({iconName: 'test'})

    expect(wrapper.find("Icon").prop('iconName')).toEqual('test')
  });
  it("should have a class of 'Fab' on the returned element", function () {
    const wrapper = setup()

    expect(wrapper.hasClass('Fab')).toBeTruthy()
  });
  it("should have a class of 'small' if props.small === true", function(){
    const wrapper = setup({small: true})

    expect(wrapper.hasClass('small')).toBeTruthy()
  })
  it("should call onClick when clicked", function () {
    const mySpy = expect.createSpy()
    const wrapper = setup({onClick: mySpy})

    wrapper.simulate('click')

    expect(mySpy).toHaveBeenCalled()
  });
});
