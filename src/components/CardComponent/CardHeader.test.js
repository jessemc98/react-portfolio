import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import CardHeader from './CardHeader'

function setup(props) {
  return shallow(<CardHeader {...props} />)
}
describe("CardManager", function () {
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
    it("with text of props.title", function () {
      const title = "i am a title"
      const wrapper = setup({ title })

      const Card_header_title = wrapper.find(".Card_header_title")

      expect(Card_header_title.prop("children")).toEqual(title)
    });
  });
  describe("renders a Fab component", function () {
    it("renders", function () {
      const wrapper = setup()

      expect(wrapper.find(mockFab).length > 0).toBeTruthy()
    });
    it("with a className of .Card_toggleButton", function () {
      const wrapper = setup()
      const fab = wrapper.find(mockFab)

      expect(fab.hasClass("Card_toggleButton")).toBeTruthy()
    });
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
  });
  it("renders a .Card_header_highlight", function () {
    const wrapper = setup()

    expect(wrapper.find(".Card_header_highlight").length > 0).toBeTruthy()
  });
});
