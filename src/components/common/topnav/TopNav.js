import React, { Component } from 'react'
import './TopNav.scss'
import Backdrop from '../backdrop/Backdrop'
import NavLinks from './NavLinks'
import FabList from '../FabList/FabList'
import NavFooter from './NavFooter'

import FocusTrap from 'focus-trap-react'
import KillFocus from '../killFocus/KillFocus'

import { navLinks, socialLinks } from '../../../store/links'
import logoSrc from '../../../assets/images/logo.png'

class TopNav extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      isOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  shouldComponentUpdate(newProps, newState){
    return this.state.isOpen !== newState.isOpen
  }
  closeNav() {
    requestAnimationFrame(() => this.setState({isOpen: false}))
  }
  toggleNav() {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    const { isOpen } = this.state
    return (
      <Backdrop
        tabIndex="-1"
        hidden={!isOpen}
        onClick={this.closeNav}
        duration="200"
        cssTimingFunc="linear" >
      <nav className={'TopNav' + (isOpen ? '' : ' hidden')}>
        <button className="TopNav_toggleButton" onClick={this.toggleNav} />
        <KillFocus enabled={!isOpen}>
          <FocusTrap
            className="TopNav_content"
            active={isOpen}
            focusTrapOptions={{
              onDeactivate: this.closeNav,
              clickOutsideDeactivates: true
            }}>
            <div className="TopNav_content_logo">
              <img src={logoSrc} alt="logo-jmc-in-block-letters"/>
            </div>
            <NavLinks links={navLinks} classes="TopNav_content_NavLinks" delay={150}/>
            <FabList links={socialLinks} className="TopNav_content_socialLinks"/>
            <NavFooter />
          </FocusTrap>
        </KillFocus>
      </nav>
      </Backdrop>
    )
  }
}

export default TopNav
