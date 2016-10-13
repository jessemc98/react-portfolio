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

describe("Spoiler:", function () {
  describe("it renders with correct state", function () {
    it("when props.showDefault is undefined/false", function () {
      const wrapper = shallow(<Spoiler></Spoiler>)

      expect(wrapper.state('hidden')).toBeTruthy()
    });
    it("when props.showDefault is true", function () {
      const wrapper = shallow(<Spoiler showDefault={true} />)

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
    it("with style.height of 0 when hidden", function () {
      // arrange
      const wrapper = mount(
        <Spoiler>
          <MockCustomReactElement />
        </Spoiler>
      )


      // act
      wrapper.setState({hidden: true})

      // assert
      const content = wrapper.instance()._content
      expect(content.style.height).toEqual('0px')
    });
    // JSDOM DOES NOT DO ANY DOM RENDERING SO TEST WILL FAIL
    // INSTALL SOMETHING LIKE PHANTOM.JS TO ALLOW FOR TESTING OF THINGS
    // LIKE clientHeight AND requestAnimationFrame
    // // // // // // // // // // // // // // // // // // // // // //
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
    //   expect(content.style.height).toEqual('400px')
    // });
  });
  describe("it renders FabLink", function () {
    it("renders FabLink", function () {
      const wrapper = shallow(<Spoiler />)

      expect(wrapper.find('FabLink').length).toEqual(1)
    });
  });
  describe("method: toggleContent", function () {
    it("sets state.hidden to false when its true", function () {
      const wrapper = shallow(<Spoiler />)
      wrapper.setState({hidden: true})

      wrapper.instance().toggleContent()

      expect(wrapper.state().hidden).toBeFalsy()
    });
    it("sets state.hidden to true when its false", function () {
      const wrapper = shallow(<Spoiler />)
      wrapper.setState({hidden: false})

      wrapper.instance().toggleContent()

      expect(wrapper.state().hidden).toBeTruthy()
    });
  });
});
