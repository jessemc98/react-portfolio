import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CardHeader from './CardHeader'

function setup(props) {
  return shallow(<CardHeader {...props} />)
}
describe("CardHeader", function () {
  const mockFab = (props) => (<div {...props} />)
  beforeEach(function () {
    // mock dependencies
    CardHeader.__Rewire__("Fab", mockFab)
  });
  afterEach(function () {
    // reset mocked dependencies
    CardHeader.__ResetDependency__("Fab")
  });
  it("renders with a class of Card_header", function () {
    const wrapper = setup()

    expect(wrapper.hasClass("Card_header")).toBeTruthy()
  });
  describe("renders a .Card_header_main element", function () {
    it(":renders", function () {
      const wrapper = setup()

      const Card_header_main = wrapper.find(".Card_header_main")

      expect(Card_header_main.length > 0).toBeTruthy()
    });
    it("with style.background of props.colors.main", function () {
      const wrapper = setup({colors: {
        main: "#fff"
      }})

      const Card_header_main = wrapper.find(".Card_header_main")

      expect(Card_header_main.prop("style").background).toBe("#fff")
    });
  });
  describe("renders a .Card_header_title", function () {
    it(":renders", function () {
      const wrapper = setup()

      const Card_header_title = wrapper.find(".Card_header_title")

      expect(Card_header_title.length > 0).toBeTruthy()
    });
    it("contains a span", function () {
      const wrapper = setup()

      const Card_header_title = wrapper.find(".Card_header_title")

      expect(Card_header_title.find("span").length > 0).toBeTruthy()
    });
    it("contains a span with class of .Card_header_title-inner", function () {
      const title = "i am a title"
      const wrapper = setup({ title })

      const Card_header_title = wrapper.find(".Card_header_title")
      const span = Card_header_title.find("span")

      expect(span.prop("className")).toEqual("Card_header_title-inner")
    });
    it("contains a span with text of props.title", function () {
      const title = "i am a title"
      const wrapper = setup({ title })

      const Card_header_title = wrapper.find(".Card_header_title")
      const span = Card_header_title.find("span")

      expect(span.prop("children")).toEqual(title)
    });
  });
  describe("renders a .Card_toggleButton", function () {
    it("renders", function () {
      const wrapper = setup()

      expect(wrapper.find(".Card_toggleButton").length > 0).toBeTruthy()
    });
    it("contains a Fab component", function () {
      const wrapper = setup()
      const toggle = wrapper.find(".Card_toggleButton")

      expect(toggle.find(mockFab).length > 0).toBeTruthy()
    });
  });
  describe("rendered Fab component", function () {
    it("with props.alt of 'toggle modal'", function () {
      const wrapper = setup()
      const fab = wrapper.find(mockFab)

      expect(fab.prop('alt')).toBe('toggle modal')
    });
    it("with icon of closeIcon", function () {
      const closeIcon = '/assets/closedIcon.png'
      CardHeader.__Rewire__('closeIcon', closeIcon)
      const wrapper = setup()
      const fab = wrapper.find(mockFab)

      expect(fab.prop('icon')).toBe(closeIcon)
    });
    CardHeader.__ResetDependency__('closeIcon')
    it("which calls props.onClick when clicked", function () {
      const spy = expect.createSpy()
      const wrapper = setup({onClick: spy})
      const fab = wrapper.find(mockFab)

      fab.simulate('click')

      expect(spy).toHaveBeenCalled()
    });
  });
  it("renders a .Card_header_highlight", function () {
    const wrapper = setup()

    expect(wrapper.find(".Card_header_highlight").length > 0).toBeTruthy()
  });
  it("renders a .Card_header_highlight with style.background of props.colors.highlight", function () {
    const wrapper = setup({colors: {
      highlight: "#fff"
    }})

    const Card_header_highlight = wrapper.find(".Card_header_highlight")

    expect(Card_header_highlight.prop("style").background).toBe("#fff")
  });
});
