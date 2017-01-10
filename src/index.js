/*eslint-disable import/default */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './style/index.scss'
import toggleElementOutlines from './helpers/toggleElementOutlines'

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
)

// add event listeners to body which enable or disable the outline of
// focused elements depending on wether mouse or keyboard is being used
toggleElementOutlines()
