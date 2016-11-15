import React, { PropTypes } from 'react'
import ModalContainer from '../Modal/ModalContainer'
import FabLink from '../common/fab/FabLink'
import BulletList from '../bulletList/BulletList'

const KeySkills = () => {
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

  return (
    <div className="AboutPage_KeySkills">
      <div className="AboutPage_KeySkills_keyskills">
        <ModalContainer title="React" imgSrc="src/assets/icons/react.svg">
          <p>
            Contrary to popular belief, React is not a javascript framework but
            simply a UI library. React makes it painless to create interactive UIs.
            Design simple views for each state in your application, and React
            will efficiently update and render just the right components when your
            data changes. React can also render on the server using Node and power mobile
            apps using React Native. It is quickly becoming the most popular
            presentation library to use for new web applications.
          </p>
        </ModalContainer>
        <ModalContainer title="Redux" imgSrc="src/assets/icons/redux.svg">
          <p>
            Redux is a predictable state container for JavaScript apps. Redux
            evolves the ideas of Flux, but avoids its complexity. Redux can be
            described in three fundamental principles; state is immutable, changes
            are made with pure functions and it follows the single source of truth
            principle. Though many developers associate Redux with React it can
            be used with any view library e.g. Angular, Backbone, ect... and has
            no relation to react.
          </p>
        </ModalContainer>
        <ModalContainer title="Mocha" imgSrc="src/assets/icons/mocha.svg">
          <p>
            Mocha is a feature-rich JavaScript test framework running on Node.js
            and in the browser. It makes asynchronous testing simple and fun.
            Mocha does not come with inbuilt assertions by default and so, it is
            commonly used with an assertion library such as Chai or Expect. Testing
            is an important step of any software development project and should
            always be done, though you may disagree, I strongly believe that code
            written without tests is not good code. Though testing a simple application
            may seem like a waste of time at first, you will quickly see the value
            of writting quality tests when you switch from writting new code to
            refactoring old code.
          </p>
        </ModalContainer>
      </div>
      <div className="AboutPage_KeySkills_lists">
        <ul>
          <FabLink iconName="angular" path="https://angularjs.org/" text="Angular" />
          <FabLink iconName="gulp" path="http://gulpjs.com/" text="Gulp" />
          <FabLink iconName="jquery" path="https://jquery.com/" text="Jquery" extension="png"/>
          <FabLink iconName="githubblack" path="https://github.com/" text="Git/Github" />
          <FabLink iconName="htmlfive" path="https://www.w3.org/TR/html5/" text="HTML" extension="png"/>
        </ul>
        <ul>
        <FabLink iconName="webpack" path="https://webpack.github.io/" text="Webpack" />
        <FabLink iconName="sass" path="http://sass-lang.com/" text="Sass" style={{transform: 'scale(1.5)'}}/>
        <FabLink iconName="modernizr" path="https://modernizr.com/" text="Modernizr" />
        <FabLink iconName="javascript" path="http://www.ecma-international.org/publications/standards/Ecma-262.htm" text="Javascript" extension="png"/>
        <FabLink iconName="cssthree" path="https://www.w3.org/Style/CSS/specs.en.html" text="CSS" extension="png"/>
        </ul>
      </div>
      <div className="AboutPage_KeySkills_other">
        <BulletList title="Programming Knowlede" items={programmingSkills} />
        <BulletList title="Testing Knowledge" items={testingSkills} />
      </div>
    </div>
  )
}

export default KeySkills
