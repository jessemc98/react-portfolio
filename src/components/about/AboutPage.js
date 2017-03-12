import React, { PropTypes } from 'react'
import PictureFrame from '../pictureFrame/PictureFrame'
import PageDivider from '../common/pageDivider/PageDivider'
import AboutInfo from './AboutInfo'
import KeySkills from './KeySkills'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './AboutPage.scss'

const AboutPage = (props) => {
  return (
    <main className="AboutPage route">
      <section className="AboutPage_aboutMe">
        <PictureFrame />
        <AboutInfo />
      </section>

      <PageDivider title="Key Skills"/>
      <KeySkills />

      <PageDivider title="About this Website" />
      <section className="AboutPage_websiteInfo">
        <p>
          This website was developed from the ground up using React for the UI
          and a personal webpack build to bundle the application with features
          such as script bundling, transpiling with babel, asset minification,
          autoprefixing, tree shaking, bundle/route splitting, code linting,
          automated testing and much more.
        </p>
        <p>
          It adheres to performance best practices, with animations running at
          60fps on average and under 1 second to first meaningful paint
          (with an iPhone 4 on a 3g connection).
        </p>
        <p>
          Service worker and app manifest are used to enable offline loading on
          newer browsers and add to homescreen on mobile devices. When service
          worker is unavailable, offline loading is supported by using the
          browser cache.
        </p>
        <p>
          Everything is unit tested using 'mocha', 'expect' for assertions,
          'enzyme' for testing react components and 'jsdom' to mock the DOM. For
          the most part, all UI components comply with WAI-ARIA specification
          and are accessibile to users with assistive technology such as screen
          readers or those who choose to use the keyboard for navigating the
          webpage.
        </p>
        <p>
          Click the button below to view this websites source code on Github.
        </p>
        <a href="https://github.com/jessemc98/react-portfolio"
          className="jmc_button">View Source on Github</a>
      </section>

      <ReactCSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={16}
          transitionLeaveTimeout={0} >
        {props.children&&props.children}
      </ReactCSSTransitionGroup>
    </main>
  )
}
AboutPage.propTypes = {
  children: PropTypes.element
}
export default AboutPage
