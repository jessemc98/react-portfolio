import React, { PropTypes } from 'react'
import Spoiler from '../spoiler/Spoiler'

const AboutInfo = (props) => {
  return (
    <div className="AboutPage-AboutInfo">
      <h1>Hi,</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
      <Spoiler text="View more info about me..." iconName="delete">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.
        </div>
      </Spoiler>
    </div>
  )
}

export default AboutInfo
