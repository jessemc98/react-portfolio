import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CardManager from './CardManager'

const mockCardHeader = (props) => {
  return <div {...props} className="Card_header" />
}
describe("CardManager", function () {
  // mock dependencies before each test
  beforeEach(function () {
    CardManager.__Rewire__('CardHeader', mockCardHeader)
  });
  // reset dependencies after each test
  afterEach(function () {
    CardManager.__ResetDependency__('CardHeader')
  });
  it("has a class of .Card_wrapper", function () {
    const wrapper = shallow(<CardManager />)
    expect(wrapper.hasClass('Card_wrapper')).toBeTruthy()
  });
  it("renders with a class of .Card-open when state.isOpen is true", function () {
    const wrapper = shallow(<CardManager />)

    wrapper.setState({isOpen: true})

    expect(wrapper.hasClass("Card-open")).toBeTruthy()
  });
  it("doesnt render with a class of .Card-open when state.isOpen is false", function () {
    const wrapper = shallow(<CardManager />)

    wrapper.setState({isOpen: false})

    expect(wrapper.hasClass("Card-open")).toBeFalsy()
  });
  it("renders a Card element", function () {
    const wrapper = shallow(<CardManager />)
    const child = wrapper.childAt(0)

    expect(child.is(".Card")).toBeTruthy()
  });
  describe("renders a CardHeader", function () {
    it(":renders", function () {
      const wrapper = shallow(<CardManager />)

      expect(wrapper.find(mockCardHeader).length > 0).toBeTruthy()
    });
    it("with props.title of self.title", function () {
      const title = "this is my title"
      const wrapper = shallow(<CardManager title={title} />)
      const CardHeader = wrapper.find(mockCardHeader)

      expect(CardHeader.prop("title")).toBe(title)
    });
    it("with props.title of self.title", function () {
      const colors = {
        main: '#fff',
        secondary: '#000'
      }
      const wrapper = shallow(<CardManager colors={colors} />)
      const CardHeader = wrapper.find(mockCardHeader)

      expect(CardHeader.prop("colors")).toEqual(colors)
    });
    describe("toggles CardManager.state.isOpen when clicked", function () {
      it("when state.isOpen is false", function () {
        const wrapper = shallow(<CardManager />)
        wrapper.setState({isOpen: false})

        const CardHeader = wrapper.find(mockCardHeader)
        CardHeader.simulate("click")

        expect(wrapper.state().isOpen).toBeTruthy()
      });
      it("when state.isOpen is true", function () {
        const wrapper = shallow(<CardManager />)
        wrapper.setState({isOpen: true})

        const CardHeader = wrapper.find(mockCardHeader)
        CardHeader.simulate("click")

        expect(wrapper.state().isOpen).toBeFalsy()
      });
    });
  });
});
