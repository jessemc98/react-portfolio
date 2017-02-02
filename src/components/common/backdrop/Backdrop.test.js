import expect from 'expect'
import { shallow, mount } from 'enzyme'
import React from 'react'
import Backdrop from './Backdrop'

function setup(props) {
  //examle props
  //<Backdrop hidden={true} className="NavBar_Backdrop" onClick="hideNav"/>
  return shallow(<Backdrop {...props} />)
}
describe("Backdrop", function () {
  beforeEach(function () {
    Backdrop.__Rewire__('pointerEventsAvailable', () => true)
  });
  afterEach(function () {
    Backdrop.__ResetDependency__('pointerEventsAvailable')
  });
  it("renders passed children inside a div", function(){
    const wrapper = shallow(<Backdrop><p className="testParagraph">random content</p></Backdrop>)

    expect(wrapper.find(".testParagraph").length).toBeGreaterThanOrEqualTo(1)
  })
  it("runs onClick when clicked if click event.target is itself and props.hidden is false", function(){
    const mySpy = expect.createSpy()
    const wrapper = mount(<Backdrop onClick={mySpy} children={<button />} hidden={false}/>)
    const button = wrapper.find("button")

    button.simulate('click')

    expect(mySpy).toNotHaveBeenCalled()

    wrapper.simulate('click')

    expect(mySpy).toHaveBeenCalled()
  })
  it("doesnt run onClick if props.hidden is true", function () {
    const mySpy = expect.createSpy()
    const wrapper = mount(<Backdrop onClick={mySpy} children={<button />} hidden={true}/>)
    const button = wrapper.find("button")

    wrapper.simulate('click')

    expect(mySpy).toNotHaveBeenCalled()
  });
  it("calls event.stopPropagation onClick", function () {
    const stopPropagation = expect.createSpy()
    const wrapper = mount(<Backdrop onClick={() => {}} hidden={false}/>)

    wrapper.simulate('click', { stopPropagation })

    expect(stopPropagation).toHaveBeenCalled()
  });
  it("renders .Backdrop class on element by default", function () {
    const wrapper = setup()

    expect(wrapper.hasClass("Backdrop")).toBeTruthy()
  });
  it("passes classes from props to rendered element", function(){
    const wrapper = setup({className: "testClassToPass"})

    expect(wrapper.hasClass("testClassToPass")).toBeTruthy()
  })
  it("renders .Backdrop class on element even if custom className is set", function(){
    const wrapper = setup({className: "testClassToPass"})

    expect(wrapper.hasClass("Backdrop")).toBeTruthy()
  })
  it("renders with class of .Backdrop-hidden when props.hidden is true", function(){
    const wrapper = setup({hidden: true})

    expect(wrapper.hasClass("Backdrop-hidden")).toBeTruthy()
  })
  it("doesnt render with class of .Backdrop-hidden when props.hidden is false", function(){
    const wrapper = setup({hidden: false})

    expect(wrapper.hasClass("Backdrop-hidden")).toBeFalsy()
  })
  it("sets transition-duration to props.duration in ms", function(){
    const wrapper = setup({duration: 100})

    expect(wrapper.prop('style').transitionDuration).toEqual("100ms")
  })
  it("sets transition-timing-function to props.cssTimingFunc", function(){
    const wrapper = setup({cssTimingFunc: "ease-in-out"})

    expect(wrapper.prop('style').transitionTimingFunction).toEqual('ease-in-out')
  })
  it("renders only the passed children, no Backdrop, when pointer events are not available", function () {
    Backdrop.__Rewire__('pointerEventsAvailable', () => false)
    const wrapper = shallow(<Backdrop><input /></Backdrop>)

    expect(wrapper.is('input')).toBeTruthy()

    Backdrop.__ResetDependency__('pointerEventsAvailable')
  });
});
