import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CardManager from './CardManager'

const mockCardHeader = (props) => {
  return <div {...props} className="Card_header" />
}
const mockCardContent = (props) => {
  return <div {...props} className="Card_content" />
}
describe("CardManager", function () {
  // mock dependencies before each test
  beforeEach(function () {
    CardManager.__Rewire__('CardHeader', mockCardHeader)
    CardManager.__Rewire__('CardContent', mockCardContent)
  });
  // reset dependencies after each test
  afterEach(function () {
    CardManager.__ResetDependency__('CardHeader')
    CardManager.__ResetDependency__('CardContent')
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

    expect(wrapper.find(".Card")).toBeTruthy()
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
  });
  describe("renders a CardContent component", function () {
    it(":renders", function () {
      const wrapper = shallow(<CardManager />)

      expect(wrapper.find(mockCardContent).length).toBe(1)
    });
    it("with props.description of self.description", function () {
      const description = "this is my description"
      const wrapper = shallow(<CardManager description={description} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("description")).toBe(description)
    });
    it("with props.image of self.image", function () {
      const image = "assets/image.svg"
      const wrapper = shallow(<CardManager image={image} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("image")).toBe(image)
    });
    it("with props.imageAlt of 'image of ' + self.title", function () {
      const title = "this is my title"
      const wrapper = shallow(<CardManager title={title} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("imageAlt")).toBe("image of " + title)
    });
    it("with props.links of self.links", function () {
      const links = [{},{}]
      const wrapper = shallow(<CardManager links={links} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("links")).toBe(links)
    });
    it("with props.skills of self.skills", function () {
      const skills = ["this is my skills", "and another"]
      const wrapper = shallow(<CardManager skills={skills} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("skills")).toBe(skills)
    });
    it("with props.background of self.props.colors.highlight", function () {
      const colors = { highlight: "#555" }
      const wrapper = shallow(<CardManager colors={colors} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("background")).toEqual(colors.highlight)
    });
  });
});
