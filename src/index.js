/*eslint-disable import/default */
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import './style/index.scss'
import toggleElementOutlines from './helpers/toggleElementOutlines'
import OfflinePlugin from 'offline-plugin/runtime'

// import manifest so app can be installed to homescreen
import './manifest.json'

// get root element and remove loading class
// then render react to root element
const rootElement = document.getElementById('root')
rootElement.className = ""

render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
)

// add event listeners to body which enable or disable the outline of
// focused elements depending on wether mouse or keyboard is being used
toggleElementOutlines()

// install OfflinePlugin to enable use offline,
// uses ServiceWorker if available, otherwise, defaults to AppCache.
OfflinePlugin.install()
