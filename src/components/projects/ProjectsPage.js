import React, { PropTypes } from 'react'
import Header from '../common/pageDivider/PageDivider'
import Card from '../CardComponent/CardManager'
import projects from './projects'

import './ProjectPage.scss'

const ProjectsPage = (props) => {
  return (
    <div className="ProjectsPage route">
      <Header title="Projects" />
      <div className="ProjectsPage_cards">
        {projects.map(project => (
          <Card {...project} />
        ))}
        </div>
    </div>
  )
}

export default ProjectsPage
