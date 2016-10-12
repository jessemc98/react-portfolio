import React, { Component } from 'react'
import './TopNav.scss'
import NavLinks from './NavLinks'
import FabList from '../FabList/FabList'
import NavFooter from './NavFooter'

import { navLinks, socialLinks } from './../../store/links'

class TopNav extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      isOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div className={'TopNav ' + (this.state.isOpen ? '' : 'hidden')}>
        <button className="close" onClick={this.toggleNav} />
        <div className="logo"><div /></div>
        <NavLinks links={navLinks} classes="TopNav-NavLinks"/>
        <FabList links={socialLinks} />
        <NavFooter />
      </div>
    )
  }
}

export default TopNav
