import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import scrollBodyToTop from './helpers/scrollBodyToTop'

function errorLoading(err) {
 console.error('Dynamic page loading failed', err)  // eslint-disable-line no-console
}

function loadRoute(cb) {
 return (module) => cb(null, module.default)
}

export default (
  <Route path="/" component={Layout}>
    <IndexRoute getComponent={(location, cb) => {
      System.import('./components/home/HomePage')
        .then(loadRoute(cb))
        .then(scrollBodyToTop)
        .catch(errorLoading)
      }} />

    <Route path="about" getComponent={(location, cb) => {
      System.import('./components/about/AboutPage')
        .then(loadRoute(cb))
        .then(() => {
          if (location.location.pathname === '/about') {
            scrollBodyToTop()
          }
        })
        .catch(errorLoading)
      }}>
      <Route path=":modalId" getComponent={(location, cb) => {
        System.import('./components/Modal/ModalContainer')
          .then(loadRoute(cb))
          .catch(errorLoading)
        }} />
    </Route>

    <Route path="contact" getComponent={(location, cb) => {
      System.import('./components/contact/ContactPage')
        .then(loadRoute(cb))
        .then(scrollBodyToTop)
        .catch(errorLoading)
      }} />

    <Route path="projects" getComponent={(location, cb) => {
      System.import('./components/projects/ProjectsPage')
        .then(loadRoute(cb))
        .then(scrollBodyToTop)
        .catch(errorLoading)
      }} />
  </Route>
)
