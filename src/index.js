/*eslint-disable import/default */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './style/index.scss'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
)
