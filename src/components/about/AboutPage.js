import React, { PropTypes } from 'react'
import PictureFrame from '../pictureFrame/PictureFrame'
import PageDivider from '../common/pageDivider/PageDivider'
import AboutInfo from './AboutInfo'
import KeySkills from './KeySkills'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './AboutPage.scss'

const AboutPage = (props) => {
  return (
    <div className="AboutPage route">
      <div className="AboutPage_aboutMe">
        <PictureFrame />
        <AboutInfo />
      </div>

      <PageDivider title="Key Skills"/>
      <KeySkills />

      <PageDivider title="About this Website" />
      <div className="AboutPage_websiteInfo">
        <p>
          This website was developed from the ground up using React. It follows
          current best practices and is <a href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fj-mcintosh.com">optimized for performance</a>.
        </p>
        <p>
          I wrote a simple custom webpack configuration to properly bundle the
          application with features such as hot reloading, automated testing
          using mocha and jsdom, bundle splitting, filename hashing, minifying,
          auto prefixing, code linting and much more
          (check it out <a href="https://github.com/jessemc98/webpack-build">here</a>).
        </p>
        <p>
          To view the source code for this website click the button below which
          will redirect you to the project on Github.
        </p>
        <a href="https://github.com/jessemc98/react-portfolio" className="jmc_button">View Source on Github</a>
      </div>

      <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={16}
          transitionLeaveTimeout={0} >
        {props.children&&props.children}
      </ReactCSSTransitionGroup>
  </div>
  )
}
AboutPage.propTypes = {
  children: PropTypes.element
}
export default AboutPage
