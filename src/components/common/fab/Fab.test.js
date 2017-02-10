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
  it("returned a.props.tabIndex should === props.tabIndex", function () {
    const wrapper = setup({tabIndex: '-1'})

    expect(wrapper.prop('tabIndex')).toEqual('-1')
  });
  it("contains an <img/> element", function () {
    const wrapper = setup()

    expect(wrapper.find("img").length).toEqual(1)
  });
  it("<img /> should a src prop === props.icon", function () {
    const wrapper = setup({icon: 'test'})

    expect(wrapper.find("img").prop('src')).toEqual('test')
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
