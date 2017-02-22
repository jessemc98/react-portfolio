import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import ProjectPage from './ProjectsPage'


describe("ProjectPage", function () {
  const mockCard = props => (<div {...props} />)
  const mockHeader = props => (<div {...props} />)
  const mockProject = {
    title: "title",
    description : "abcde",
    skills: [ "react", "unit testing" ],
    links: [],
    colors: { main: "#197DB0", highlight: "#dedede" }
  }
  beforeEach(function () {
    // mock dependencies
    ProjectPage.__Rewire__('projects', [mockProject])
    ProjectPage.__Rewire__('Card', mockCard)
    ProjectPage.__Rewire__('Header', mockHeader)
  });
  afterEach(function () {
    ProjectPage.__ResetDependency__('projects')
    ProjectPage.__ResetDependency__('Card')
    ProjectPage.__ResetDependency__('Header')
  });
  describe("renders Card component for each project in projects", function () {
    it("when there is one project", function () {
      const mockProjects = [mockProject]
      ProjectPage.__Rewire__('projects', mockProjects)
      const wrapper = shallow(<ProjectPage />)

      expect(wrapper.find(mockCard).length).toBe(1)
    });
    it("when there is more than one project", function () {
      const mockProjects = [mockProject, mockProject]
      ProjectPage.__Rewire__('projects', mockProjects)
      const wrapper = shallow(<ProjectPage />)

      expect(wrapper.find(mockCard).length).toBe(2)
    });
    it("with correct props", function () {
      const mockProjects = [mockProject]
      ProjectPage.__Rewire__('projects', mockProjects)
      const wrapper = shallow(<ProjectPage />)

      expect(wrapper.find(mockCard).props()).toEqual(mockProject)
    });
  });
});
