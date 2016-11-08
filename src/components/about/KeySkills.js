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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd
            qualms, when he reached the Father Superior's with Ivan: he felt ashamed of
            havin lost his temper. He felt that he ought to have disdaimed that despicable
            wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell,
            and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."
            He determined
          </p>
        </ModalContainer>
        <ModalContainer title="Redux" imgSrc="src/assets/icons/redux.svg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd
            qualms, when he reached the Father Superior's with Ivan: he felt ashamed of
            havin lost his temper. He felt that he ought to have disdaimed that despicable
            wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell,
            and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."
            He determined
          </p>
        </ModalContainer>
        <ModalContainer title="Mocha" imgSrc="src/assets/icons/mocha.svg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd
            qualms, when he reached the Father Superior's with Ivan: he felt ashamed of
            havin lost his temper. He felt that he ought to have disdaimed that despicable
            wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell,
            and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."
            He determined
          </p>
        </ModalContainer>
      </div>
      <div className="AboutPage_KeySkills_lists">
        <ul>
          <FabLink iconName="angular" path="/" text="Angular" />
          <FabLink iconName="gulp" path="/" text="Gulp" />
          <FabLink iconName="jquery" path="/" text="Jquery" extension="png"/>
          <FabLink iconName="githubblack" path="/" text="Git/Github" />
          <FabLink iconName="htmlfive" path="/" text="HTML" extension="png"/>
        </ul>
        <ul>
        <FabLink iconName="webpack" path="/" text="Webpack" />
        <FabLink iconName="sass" path="/" text="Sass" style={{transform: 'scale(1.5)'}}/>
        <FabLink iconName="modernizr" path="/" text="Modernizr" />
        <FabLink iconName="javascript" path="/" text="Javascript" extension="png"/>
        <FabLink iconName="cssthree" path="/" text="CSS" extension="png"/>
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
