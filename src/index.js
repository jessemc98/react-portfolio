/*eslint-disable import/default */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './style/index.scss'

const rootElement = document.createElement('div')
document.body.appendChild(rootElement)

render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
)
