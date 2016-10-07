## Jesse McIntosh's Portfolio SPA

## This project uses the following technologies
* *JS Framework*: ReactJS
* *Router*: ReactRouter 
* *UI Framework*: React Material
* *CSS pre-processor*: Sass with Node
* *Testing framework*: Mocha
* *Assertion library*: Expect

Please examine the package.json file for a complete list of the dependencies.
The Devdependencies are used in the build process and stripped out in the production build.
All other dependencies will be included in the production build.

This project uses a simple Webpack config for an automated workflow. Check out the build system in detail [here](https://github.com/jessemc98/webpack-build) or check out the common use cases below.

## Usage

* *npm start*: serves a development server at localhost on port 8080 and runs npm test whith --watch flag.
* *npm run serve*: serves a development server using /src folder.
* *npm test*: runs all test files with the format '*.test.js'. Tests are run using Mocha in the node environment using 'jsdom'.
* *npm run build*: builds an optimized version of the project in the ./bin/ directory

## Directory structure

<pre>
├──  nodes_modules/
├──  libs/
├──  assets/
│   ├──  images/
│   └──  icons/
│
├──  src/
│   ├──  components/
│   │   └──  component/
│   │   │   ├──  Component.(js|jsx)
│   │   │   ├──  Component.test.js
│   │   │   └──  Component.(scss|sass|css)
│   │   │
│   │   └──  otherComponent/
│   │       ├──  OtherComponent.js
│   │       └──  OtherComponent.test.js
│   │
│   ├──  style/
│   │   └──  index.(scss|sass|css)
│   │
│   ├──  index.js
│   ├──  index.test.js
│   ├──  index.html
│   └──  routes.js
│
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  webpack.config.js
└──  package.json
</pre>

## Coding Convention
Redux is not used in order to keep the production build as small as possiblee. Though redux could be used, the advantages are negligable in an app of this size.

Unit tests are kept in the same folder as the code being tested and are named the same with an added .test. prefix (refer to the directory structure diagram above).

Unit tests are run in node and use jsdom to mock the DOM instead of a browser.
Unit tests are run with Mocha using the Expect assertion library.

Though redux is not being used I believe its principles are still relevent in most apps. When building components we must create 'container components' to hold the business logic which are incharge of passing state to 'dumb components' which are only incharge of displaying information and have no internal logic.

Dumb components ( or view/presentational components ) must never mutate state. Container components are allowed to change their state but must not mutate any values.


## Features included in the webpack build

* *url-loader* : allow inlining of assets when smaller than 25kb
* *uglify* : optimize all your JavaScript
* *remove-unused-css* : optimize all your CSS
* *autoprefixer* : add vendor prefixes to CSS
* *hashing* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *eslint* : The pluggable linting utility for JavaScript
* *Unit test* : out of the box unit test configuration with Mocha, Expect and jsdom
* *hot reloading* : full-featured development web server with hot reloading capabilities
* *lazy building* : don't process files which haven't changed when possible

**Warning**, new files will not be watched if added while webpack is running, try to relaunch Webpack whenever new files are added.

If you'd like to use any of my code in your projects feel free to use it as you wish.