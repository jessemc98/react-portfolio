import React, { PropTypes } from 'react'
import Spoiler from '../spoiler/Spoiler'

const AboutInfo = (props) => {
  return (
    <section className="AboutPage_aboutMe_AboutInfo">
      <h1>Hi,</h1>
      <p>
        Self taught Front end developer with a background in computer sciences.
        I have been programming for over 3 years and decided to specialise in
        front end around 2 years ago.  I now consider myself a strong javascript
        developer, confident with the quirks of the language such as scoping,
        closures, hoisting, context and the prototypal inheritance model.
      </p>
      <p>
        Extensive knowledge with making responsive, accessible UI components
        which comply with current web standards and work across a multitude of
        browsers and devices . Using progressive enhancement or graceful
        degradation techniques to bring an excellent experience regardless of
        the users browser while keeping performance, accessibility and semantics
        in mind.
      </p>
      <Spoiler text="info about me..." >
        <p>
          Somewhat of a javascript ninja, I have become confident with the more
          obscure concepts such as how scoping and closures work, hoisting and
          the primitive features of the language which make it possible to write
          functional code e.g. ability to use functions as arguments, pass them
          to other functions, return functions, compose functions and so on...
          <br /><br />
          I strongly believe that writing clear, understandable code that’s easy
          to read at a glance is just as important as writing functional code.
          As developers we spend the majority of our time reading and
          understanding other peoples code rather than writing our own,
          therefore, we must focus on always writing quality tests and documentation
          so that other developers can reason about our code without the need to
          understand the whole code base and implementation details.
        </p>
      </Spoiler>
    </section>
  )
}

export default AboutInfo
