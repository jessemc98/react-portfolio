import React, { Component } from 'react'
import NavLinks from './NavLinks'
import './TopNav.scss'

const navLinks = [
  {path: '/', name: 'home', isIndex: true},
  {path: '/about', name: 'about'},
  {path: '/contact', name: 'contact'}
]

class TopNav extends Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      isOpen: true
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
        <NavLinks links={navLinks} classes="TopNav-NavLinks"/>
      </div>
    )
  }
}

export default TopNav
