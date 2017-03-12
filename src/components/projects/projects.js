import reactMotionImage from '../../assets/images/motion-menu.jpg'
import portfolioImage from '../../assets/images/portfolio.jpg'
import vanillaTodoImage from '../../assets/images/vanilla-todo.png'

import github from '../../assets/icons/github.svg'
import npm from '../../assets/icons/npm.svg'
import eye from '../../assets/icons/eye.svg'

import { COLORS } from '../../store/links'

export default [
  {
    title: "Motion Menu",
    description : "Fully configurable menu ui component for react apps. It uses react-motion to handle animation and is available as an npm package.",
    image : reactMotionImage,
    skills: [
      "react",
      "react-motion",
      "publishing open source packages on npm",
      "making modules which work with different module systems / script loaders e.g. AMD, commonJS, es modules..."
    ],
    links: [
      {icon: github, path: "http://github.com/jessemc98/react-motion-menu", text: "Github"},
      {icon: npm, path: "https://www.npmjs.com/package/@jessemc98/motion-menu", text: "npm"}
    ],
    colors: {
      main: COLORS[0],
      highlight: "#D0D3D6"
    }
  },
  {
    title: "simple-store",
    description : "Simple store is a small, experimental, javascript library I wrote for dealing with state, inspired by redux. Its published as an npm package '@jessemc98/simple-store'.",
    code :
`function numberReducer(state, event) {
  switch (event.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}
const subscribers = { number: numberReducer }
const initialState = { number: 10 }

const store = createStore(subscribers, initialState)

store.emit({type: "increment"})
// expect(store.getState().number).toEqual(11)
store.emit({type: "decrement"})
// expect(store.getState().number).toEqual(10)
    `,
    skills: [
      "javascript",
      "state management",
      "events",
      "semantic versioning",
      "writing documentation"
    ],
    links: [
      {icon: github, path: "http://github.com/jessemc98/simple-store", text: "Github"},
      {icon: npm, path: "https://www.npmjs.com/package/@jessemc98/simple-store", text: "npm"}
    ],
    colors: {
      main: COLORS[1],
      highlight: "#D0D3D6"
    }
  },
  {
    title: "React Portfolio",
    description :
      `Personal portfolio written using React for the UI and a personal webpack
      build with features such as script bundling, transpiling, minification,
      autoprefixing, tree shaking, bundle splitting and more. It adheres to
      performance best practices, with animations running at 60fps on average
      and page load of under 1 second on a 3g connection.

      Service worker and app manifest are used to enable offline loading on newer
      browsers and add to homescreen on mobile devices. When service worker is
      unavailable, offline loading is supported by using the browser cache.

      For the most part, all UI components comply with WAI-ARIA specification
      and are accessibile to users with assistive technology such as screen
      readers or those who chose to use the keyboard for navigating the webpage.
      Everything is unit tested using 'mocha', 'expect' for assertions,
      'enzyme' for testing react components and 'jsdom' to mock the DOM.`
      ,
    image : portfolioImage,
    skills: [
      "react",
      "webpack",
      "offline loading",
      "accessibility and ARIA",
      "bundle splitting",
      "reducing time to first paint"
    ],
    links: [
      {icon: github, path: "http://github.com/jessemc98/react-portfolio", text: "Github"},
      {icon: eye, path: "http://dev-jesse.com", text: "Live site"}
    ],
    colors: {
      main: COLORS[2],
      highlight: "#D0D3D6"
    }
  },
  {
    title: "Webpack Build",
    description :
      `Webpack 2 build I wrote for bundling small react apps which can easily be modified
      for use with most web apps. It has many features including script bundling,
      minification of assets, removing dead code, code linting with es-lint,
      autoprefixing css, filename fingerprinting/hashing, mocha/jsdom testing
      environment, hot reloading and more.`
      ,
    skills: [
      "webpack",
      "migrating from webpack 1 to webpack 2",
      "setting up a testing environment",
      "asset minification",
      "project structuring",
      "reducing time to first paint"
    ],
    links: [
      {icon: github, path: "http://github.com/jessemc98/webpack-build", text: "Github"}
    ],
    colors: {
      main: COLORS[3],
      highlight: "#D0D3D6"
    }
  },
  {
    title: "Vanilla Todo",
    description :
      `Work in progress. A todo application I wrote using a small, overkill custom
      framework/view library written in vanilla javascript without using any
      frameworks or libraries. Though not very practical to write everything
      myself given the amount of good libraries that have solved these problems better
      than I ever will, it is a great learning experience which requires a deeper
      understanding of higher level concepts such as the javascript event loop,
      tasks, microtasks, queues and browser rendering.`
      ,
    image : vanillaTodoImage,
    skills: [
      "event loop - tasks, microtasks, queues",
      "browser compatibility",
      "rendering performance",
      "reactive programming",
      "es6 and qwerks of transpilation vs native implementation"
    ],
    links: [
      {icon: github, path: "http://github.com/jessemc98/vanilla-todo-app", text: "Github"}
    ],
    colors: {
      main: COLORS[0],
      highlight: "#D0D3D6"
    }
  }
]
