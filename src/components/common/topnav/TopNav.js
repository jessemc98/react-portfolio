import React, { Component } from 'react'
import './TopNav.scss'
import Backdrop from '../backdrop/Backdrop'
import NavLinks from './NavLinks'
import FabList from '../FabList/FabList'
import NavFooter from './NavFooter'

import { navLinks, socialLinks } from '../../../store/links'

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
      <Backdrop hidden={!this.state.isOpen} onClick={this.toggleNav} duration="200" cssTimingFunc="linear">
      <div className={'TopNav' + (this.state.isOpen ? '' : ' hidden')}>
        <button className="TopNav_toggleButton" onClick={this.toggleNav} />
        <div className="TopNav_content">
          <div className="TopNav_content_logo">
            <img src="src/assets/images/logo.png" />
          </div>
          <NavLinks links={navLinks} classes="TopNav_content_NavLinks" delay={150}/>
          <FabList links={socialLinks} className="TopNav_content_socialLinks"/>
          <NavFooter />
        </div>
      </div>
      </Backdrop>
    )
  }
}

export default TopNav
