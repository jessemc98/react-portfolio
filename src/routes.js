import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
)
