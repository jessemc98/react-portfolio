import React from 'react'
import PictureFrame from '../pictureFrame/PictureFrame'
import PageDivider from '../common/pageDivider/PageDivider'
import AboutInfo from './AboutInfo'
import KeySkills from './KeySkills'
import './AboutPage.scss'

const AboutPage = (props) => {
  return (
    <div className="AboutPage">
      <div className="AboutPage_aboutMe">
        <PictureFrame />
        <AboutInfo />
      </div>
      <PageDivider title="Key Skills"/>
      <KeySkills />
      <PageDivider title="About this Website" />
      <div className="AboutPage_websiteInfo">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <a href="https://github.com/jessemc98/react-portfolio" className="jmc_button">View Source on Github</a>
      </div>
  </div>
  )
}

export default AboutPage
