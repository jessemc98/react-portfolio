import React from 'react'
import { shallow, mount } from 'enzyme'
import expect from 'expect'

import Spoiler from './Spoiler'

const MockCustomReactElement = React.createClass({
  render: function(){
    const style = {height: '400px'}
    return (
      <p style={style}>
        Im just a mock paragraph
      </p>
    )
  }
})
//
describe("Spoiler:", function () {
  describe("it renders with correct state", function () {
    it("when props.showDefault is undefined/false", function () {
      const wrapper = shallow(<Spoiler><p /></Spoiler>)

      expect(wrapper.state('hidden')).toBeTruthy()
    });
    it("when props.showDefault is true", function () {
      const wrapper = mount(<Spoiler showDefault={true}><p /></Spoiler>)

      expect(wrapper.state('hidden')).toBeFalsy()
    });
  });
  describe("it renders the child component", function () {
    it("if its a normal element", function () {
      const child = <p />
      const wrapper = shallow(
        <Spoiler>
          {child}
        </Spoiler>
      )

      expect(wrapper.find("p").length).toEqual(1)
    });
    it("if its a custom element", function () {
      const wrapper = shallow(
        <Spoiler>
          <MockCustomReactElement />
        </Spoiler>
      )

      expect(wrapper.find(MockCustomReactElement).length).toEqual(1)
    });
    it("inside a wrapper div", function () {
      const wrapper = mount(
        <Spoiler>
          <MockCustomReactElement />
        </Spoiler>
      )
      const contentWrapper = wrapper.childAt(0)
      const content = wrapper.find('p')
      expect(content.length).toEqual(1)
    });
    it("wrapper with style.height of 0 when hidden", function () {
      // arrange
      const wrapper = mount(
        <Spoiler>
          <MockCustomReactElement />
        </Spoiler>
      )

      // act
      wrapper.setState({hidden: true})

      // assert
      const contentWrapper = wrapper.childAt(0)
      expect(contentWrapper.prop('style').height).toEqual('0px')
    });
    // JSDOM DOES NOT DO ANY DOM RENDERING SO TEST WILL FAIL
    // USE SOMETHING LIKE PHANTOM.JS TO ALLOW FOR TESTING OF
    // DOM PROPERTIES LIKE offsetHeight, offsetWidth, etc...
    // // // // // // // // // // // // // // // // // // // // //
    // it("with style.height equal to components initial height when not hidden", function () {
    //   // arrange
    //   const wrapper = mount(
    //     <Spoiler>
    //       <MockCustomReactElement />
    //     </Spoiler>
    //   )
    //   //act
    //   wrapper.setState({hidden: false})
    //
    //   // assert
    //   const content = wrapper.instance()._content
    //   const contentWrapper = wrapper.childAt(0)
    //   expect(contentWrapper.prop('style').height).toEqual('400px')
    // });
  });
  describe("it renders FabLink", function () {
    it("renders FabLink", function () {
      const wrapper = shallow(<Spoiler><p /></Spoiler>)

      expect(wrapper.find('FabLink').length).toEqual(1)
    });
  });
  describe("method: toggleContent", function () {
    it("sets state.hidden to false when its true", function () {
      const wrapper = shallow(<Spoiler><p /></Spoiler>)
      wrapper.setState({hidden: true})

      wrapper.instance().toggleContent()

      expect(wrapper.state().hidden).toBeFalsy()
    });
    it("sets state.hidden to true when its false", function () {
      const wrapper = shallow(<Spoiler><p /></Spoiler>)
      wrapper.setState({hidden: false})

      wrapper.instance().toggleContent()

      expect(wrapper.state().hidden).toBeTruthy()
    });
  });
  describe("it renders with correct class", function () {
    it("renders with hidden class by default", function () {
      const wrapper = shallow(<Spoiler><p /></Spoiler>)

      expect(wrapper.hasClass('Spoiler-hidden')).toBeTruthy()
    });
    it("renders without hidden class when clicked", function () {
      const wrapper = mount(<Spoiler><p /></Spoiler>)

      wrapper.simulate('click')

      expect(wrapper.hasClass('Spoiler-hidden')).toBeFalsy()
    });
  });
  describe("it renders with correct text in FabLink", function () {
    it("renders 'View more ' + props.text when hidden", function () {
      const wrapper = mount(<Spoiler text="info"><p /></Spoiler>)
      const FabLinkText = wrapper.find('.FabLink').childAt(1)

      expect(FabLinkText.text()).toEqual('View more info')
    });
    it("renders 'View less ' + props.text when hidden", function () {
      const wrapper = mount(<Spoiler text="info"><p /></Spoiler>)
      const FabLinkText = wrapper.find('.FabLink').childAt(1)

      FabLinkText.simulate('click')

      expect(FabLinkText.text()).toEqual('View less info')
    });

  });
});
