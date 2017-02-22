import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CardContent from './CardContent'

function setup(props) {
  const requiredProps = {
    description: "",
    links: [],
    skills: []
  }
  return shallow(<CardContent {...requiredProps} {...props} />)
}

describe("CardContent", function () {
  const mockFabLink = (props) => (<a {...props} />)
  const mockSyntaxHighlighter = (props) => (<div {...props} />)
  beforeEach(function () {
    // mock dependencies
    CardContent.__Rewire__("FabLink", mockFabLink)
    CardContent.__Rewire__("SyntaxHighlighter", mockSyntaxHighlighter)
  });
  afterEach(function () {
    // reset mocked dependencies
    CardContent.__ResetDependency__("FabLink")
    CardContent.__ResetDependency__("SyntaxHighlighter")
  });
  it("renders with a class or .Card_content", function () {
    const wrapper = setup()

    expect(wrapper.hasClass('Card_content')).toBeTruthy()
  });
  it("renders with style.background of props.background", function () {
    const background = "#fff"
    const wrapper = setup({ background })

    expect(wrapper.prop("style").background).toEqual(background)
  });
  describe("renders a .Card_content_description element", function () {
    it(":renders", function () {
      const wrapper = setup()

      expect(wrapper.find('.Card_content_description').length > 0).toBeTruthy()
    });
    it("is a p element", function () {
      const wrapper = setup()
      const Card_content_description = wrapper.find('.Card_content_description')
      expect(Card_content_description.is('p')).toBeTruthy()
    });
    it("has innerHTML of props.description", function () {
      const description = 'i am the description'
      const wrapper = setup({ description })
      const Card_content_description = wrapper.find('.Card_content_description')

      expect(Card_content_description.text()).toBe(description)
    });
  });
  describe("renders an image", function () {
    it("with class of .Card_content_image", function () {
      const wrapper = setup({image: 'img.svg'})
      const img = wrapper.find('img')

      expect(img.hasClass('Card_content_image')).toBeTruthy()
    });
    it("doesnt render if props.image is not defined", function () {
      const wrapper = setup()
      expect(wrapper.find('img').length > 0).toBeFalsy()
    });
    it("if props.img is defined", function () {
      const wrapper = setup({ image: "image.png" })
      expect(wrapper.find('img').length > 0).toBeTruthy()
    });
    it("renders with src of props.image", function () {
      const image = 'assets/image.png'
      const wrapper = setup({ image })
      const img = wrapper.find('img')

      expect(img.prop('src')).toEqual(image)
    });
    it("renders with alt of props.imageAlt", function () {
      const imageAlt = "i am an image of a project"
      const wrapper = setup({ imageAlt, image: "myImg.png" })
      const img = wrapper.find('img')

      expect(img.prop('alt')).toEqual(imageAlt)
    });
  });
  describe("renders a SyntaxHighlighter element", function () {
    it("with class of .Card_content_code", function () {
      const code = "this is some code"
      const wrapper = setup({ code })
      const msh = wrapper.find(mockSyntaxHighlighter)

      expect(msh.hasClass('Card_content_code')).toBeTruthy()
    });
    it("doesnt render if props.code is not defined", function () {
      const wrapper = setup()
      expect(wrapper.find(mockSyntaxHighlighter).length > 0).toBeFalsy()
    });
    it("if props.code is defined", function () {
      const wrapper = setup({ code: "var x = 2;" })
      expect(wrapper.find(mockSyntaxHighlighter).length > 0).toBeTruthy()
    });
    it("renders with props.language of javascript", function () {
      const wrapper = setup({ code: "var y = 3;" })
      const msh = wrapper.find(mockSyntaxHighlighter)

      expect(msh.prop("language")).toEqual("javascript")
    });
    it("renders with props.children of props.code", function () {
      const code = "while (true) { writeCode(); }"
      const wrapper = setup({ code })
      const msh = wrapper.find(mockSyntaxHighlighter)

      expect(msh.prop("children")).toEqual(code)
    });
  });
  describe("renders a .Card_content_appliedSkills element", function () {
    it(":renders", function () {
      const wrapper = setup()

      expect(wrapper
        .find(".Card_content_appliedSkills")
        .length > 0)
        .toBeTruthy()
    });
    it("contains a .Card_content_appliedSkills_list element", function () {
      const wrapper = setup()
      const appliedSkills = wrapper.find(".Card_content_appliedSkills")

      expect(appliedSkills
        .find(".Card_content_appliedSkills_list")
        .length > 0)
        .toBeTruthy()
    });
  });
  describe("renders a .Card_content_appliedSkills_list element", function () {
    it("is a ul element", function () {
      const wrapper = setup()
      const list = wrapper.find(".Card_content_appliedSkills_list")
      expect(list.is('ul')).toBeTruthy()
    });
    it("renders an li when props.skills is an array with one item", function () {
      const skills = ["juan skill"]
      const wrapper = setup({ skills })
      const list = wrapper.find(".Card_content_appliedSkills_list")
      expect(list.find('li').length).toEqual(1)
    });
    it("renders an li for each item in props.skills array", function () {
      const skills = ["first skill", "second skill"]
      const wrapper = setup({ skills })
      const list = wrapper.find(".Card_content_appliedSkills_list")
      expect(list.find('li').length).toEqual(2)
    });
    it("for 'i' in props.skills renders an li with innerHTML of props.skills[i]", function () {
      const skills = ["first skill", "second skill"]
      const wrapper = setup({ skills })
      const list = wrapper.find(".Card_content_appliedSkills_list")
      const listItems = list.find("li")

      skills.forEach((skill, i) => {
        expect(listItems.at(i).text()).toEqual(skill)
      })
    });
    it("for 'i' in props.skills renders an li with key of 'i'", function () {
      const skills = ["first skill", "second skill"]
      const wrapper = setup({ skills })
      const list = wrapper.find(".Card_content_appliedSkills_list")
      const listItems = list.find("li")

      skills.forEach((skill, i) => {
        expect(listItems.at(i).key()).toEqual(i)
      })
    });
  });
  describe("renders a .Card_content_footer element", function () {
    it(":renders", function () {
      const wrapper = setup()
      const footer = wrapper.find(".Card_content_footer")

      expect(footer.length > 0).toBeTruthy()
    });
    describe("renders a 'FabLink' for each 'link' in props.links", function () {
      it("when given an array with one 'link'", function () {
        const wrapper = setup({
          links: [{ icon: 'assets/google.svg', path: 'http://google.com', text: "google"}]
        })
        const footer = wrapper.find(".Card_content_footer")
        const fablinks = wrapper.find(mockFabLink)

        expect(fablinks.length).toEqual(1)
      });
      it("when given an array of multiple 'links'", function () {
        const links = [
          { icon: 'assets/google.svg', path: 'http://google.com', text: "google"},
          { icon: 'assets/google.svg', path: 'http://google.com', text: "google"}
        ]
        const wrapper = setup({ links })
        const footer = wrapper.find(".Card_content_footer")
        const fablinks = wrapper.find(mockFabLink)

        expect(fablinks.length).toEqual(2)
      });
      it("sets 'FabLink.props' to equal 'link'", function () {
        const links = [
          { icon: 'assets/google.svg', path: 'https://google.com', text: "google"},
          { icon: 'assets/youtube.svg', path: 'https://youtube.com', text: "youtube"}
        ]
        const wrapper = setup({ links })
        const footer = wrapper.find(".Card_content_footer")
        const fablinks = wrapper.find(mockFabLink)

        links.forEach((link, i) => {
          expect(fablinks.at(i).props()).toEqual(link)
        })
      });
      it("sets 'FabLink.props.key' to equal 'text'", function () {
        const links = [
          { text: "google", icon: 'assets/google.svg', path: 'https://google.com' },
          { text: "youtube", icon: 'assets/youtube.svg', path: 'https://youtube.com'}
        ]
        const wrapper = setup({ links })
        const footer = wrapper.find(".Card_content_footer")
        const fablinks = wrapper.find(mockFabLink)

        links.forEach((link, i) => {
          expect(fablinks.at(i).key()).toEqual(link.text)
        })
      });
    });
  });
});
