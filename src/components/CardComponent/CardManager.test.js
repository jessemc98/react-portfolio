import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import CardManager from './CardManager'

const mockFocusTrap = (props) => (<div {...props} />)
const mockCardHeader = (props) => (<div {...props} className="Card_header" />)
const mockCardContent = (props) => (<div {...props} className="Card_content" />)
function mockDependencies() {
  CardManager.__Rewire__('CardHeader', mockCardHeader)
  CardManager.__Rewire__('CardContent', mockCardContent)
  CardManager.__Rewire__('FocusTrap', mockFocusTrap)
}
function resetDependencies() {
  CardManager.__ResetDependency__('CardHeader')
  CardManager.__ResetDependency__('CardContent')
  CardManager.__ResetDependency__('FocusTrap')
}
describe("CardManager", function () {
  beforeEach(mockDependencies);
  afterEach(resetDependencies);
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
  it("renders with an aria-label of`${props.title} project card/modal`", function () {
    const wrapper = shallow(<CardManager title={'my app'}/>)

    expect(wrapper.prop('aria-label')).toBe('my app project card/modal')
  });

  describe("renders a Card element", function () {
    it("renders", function () {
      const wrapper = shallow(<CardManager />)

      expect(wrapper.find(".Card")).toBeTruthy()
    });
    it("with style.overflow = hidden when state.isOpen is true", function () {
      const wrapper = shallow(<CardManager />)
      wrapper.setState({isOpen: true})
      const card = wrapper.find('.Card')

      expect(card.prop('style').overflow).toEqual('hidden')
    });
    it("with style.overflow = visible when state.isOpen is false", function () {
      const wrapper = shallow(<CardManager />)
      wrapper.setState({isOpen: false})
      const card = wrapper.find('.Card')

      expect(card.prop('style').overflow).toEqual('visible')
    });
  });

  describe("renders a FocusTrap", function () {
    it("renders", function () {
      const wrapper = shallow(<CardManager />)
      const FocusTrap = wrapper.find(mockFocusTrap)

      expect(FocusTrap.length).toBe(1)
    });
    it("with class of Card_open-wrapper", function () {
      const wrapper = shallow(<CardManager />)
      const FocusTrap = wrapper.find(mockFocusTrap)

      expect(FocusTrap.hasClass("Card_open-wrapper")).toBeTruthy()
    });
    it("with props.active of state.isOpen when it is true", function () {
      const wrapper = mount(<CardManager />)
      const FocusTrap = wrapper.find(mockFocusTrap)

      wrapper.setState({isOpen: true})

      expect(FocusTrap.prop("active")).toBeTruthy()
    });
    it("with props.active of state.isOpen when it is false", function () {
      const wrapper = mount(<CardManager />)
      const FocusTrap = wrapper.find(mockFocusTrap)

      wrapper.setState({isOpen: false})

      expect(FocusTrap.prop("active")).toBeFalsy()
    });
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
    it("with props.code of self.code", function () {
      const code = `
      // just keep moving
      var x = 1;
      for (var i = 0; i < x; i += 1) {
        x + 1
      }
      `
      const wrapper = shallow(<CardManager code={code} />)
      const CardContent = wrapper.find(mockCardContent)

      expect(CardContent.prop("code")).toEqual(code)
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
