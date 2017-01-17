import reactIcon from '../assets/icons/react.svg'
import reduxIcon from '../assets/icons/redux.svg'
import mochaIcon from '../assets/icons/mocha.svg'

export default {
  react: {
    title:"React",
    imgSrc: reactIcon,
    content: `Contrary to popular belief, React is not a javascript framework but
    simply a UI library. React makes it painless to create interactive UIs.
    Design simple views for each state in your application, and React
    will efficiently update and render just the right components when your
    data changes. React can also render on the server using Node and power mobile
    apps using React Native. It is quickly becoming the most popular
    presentation library to use for new web applications.`
  },
  redux: {
    title:"Redux",
    imgSrc: reduxIcon,
    content: `Redux is a predictable state container for JavaScript apps. Redux
    evolves the ideas of Flux, but avoids its complexity. Redux can be
    described in three fundamental principles; state is immutable, changes
    are made with pure functions and it follows the single source of truth
    principle. Though many developers associate Redux with React it can
    be used with any view library e.g. Angular, Backbone, ect... and has
    no relation to react.`
  },
  mocha: {
    title:"Mocha",
    imgSrc: mochaIcon,
    content: `Mocha is a feature-rich JavaScript test framework running on Node.js
    and in the browser. It makes asynchronous testing simple and fun.
    Mocha does not come with inbuilt assertions by default and so, it is
    commonly used with an assertion library such as Chai or Expect. Testing
    is an important step of any software development project and should
    always be done, though you may disagree, I strongly believe that code
    written without tests is not good code. Though testing a simple application
    may seem like a waste of time at first, you will quickly see the value
    of writting quality tests when you switch from writting new code to
    refactoring old code.`
  }
}
