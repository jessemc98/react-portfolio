import React, { PropTypes } from 'react'
import ModalContainer from '../Modal/ModalContainer'
import FabLink from '../common/fab/FabLink'
import BulletList from '../bulletList/BulletList'
import { Link } from 'react-router'

const iconsSrc = [
  'react.svg',
  'redux.svg',
  'mocha.svg',
  'angular.svg',
  'gulp.svg',
  'jquery.png',
  'githubblack.svg',
  'htmlfive.png',
  'webpack.svg',
  'sass.svg',
  'modernizr.svg',
  'javascript.png',
  'cssthree.png'
]
const testingSkills = [
  'jasmine',
  'mocha',
  'expect',
  'jsdom',
  'karma',
  'enzyme',
  'TDD vs BDD',
  'unit testing',
  'intergration testing',
  'black box testing',
  'glass box testing'
]
const programmingSkills = [
  'scoping',
  'closures',
  'asynchronicity',
  'currying',
  'promises',
  'hoisting',
  'prototypal inheritance',
  'classical inheritance',
  'composition',
  'ajax/RESTful/CRUD',
  'object oriented programming',
  'functional programming'
]
const icons = iconsSrc.reduce((obj, icon) => {
  obj[icon.slice(0, icon.length-4) + 'Icon'] = require(`../../assets/icons/${icon}`)
  return obj
}, {})

const KeySkills = () => (
  <section className="AboutPage_KeySkills">
    <div className="AboutPage_KeySkills_keyskills">
      <Link to="/about/react" className="ModalContainer_button">
        <img src={icons.reactIcon}/>
        <h3>React</h3>
      </Link>
      <Link to="/about/redux" className="ModalContainer_button">
        <img src={icons.reduxIcon}/>
        <h3>Redux</h3>
      </Link>
      <Link to="/about/mocha" className="ModalContainer_button">
        <img src={icons.mochaIcon}/>
        <h3>Mocha</h3>
      </Link>
    </div>
    <article className="AboutPage_KeySkills_lists">
      <ul>
        <FabLink icon={icons.angularIcon} path="https://angularjs.org/" text="Angular" />
        <FabLink icon={icons.gulpIcon} path="http://gulpjs.com/" text="Gulp" />
        <FabLink icon={icons.jqueryIcon} path="https://jquery.com/" text="Jquery" extension="png"/>
        <FabLink icon={icons.githubblackIcon} path="https://github.com/" text="Git/Github" />
        <FabLink icon={icons.htmlfiveIcon} path="https://www.w3.org/TR/html5/" text="HTML" extension="png"/>
      </ul>
      <ul>
      <FabLink icon={icons.webpackIcon} path="https://webpack.github.io/" text="Webpack" />
      <FabLink icon={icons.sassIcon} path="http://sass-lang.com/" text="Sass" style={{transform: 'scale(1.5)'}}/>
      <FabLink icon={icons.modernizrIcon} path="https://modernizr.com/" text="Modernizr" />
      <FabLink icon={icons.javascriptIcon} path="http://www.ecma-international.org/publications/standards/Ecma-262.htm" text="Javascript" extension="png"/>
      <FabLink icon={icons.cssthreeIcon} path="https://www.w3.org/Style/CSS/specs.en.html" text="CSS" extension="png"/>
      </ul>
    </article>
    <article className="AboutPage_KeySkills_other">
      <BulletList title="Programming Knowlede" items={programmingSkills} />
      <BulletList title="Testing Knowledge" items={testingSkills} />
    </article>
  </section>
)

export default KeySkills
