import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const NavLinks = ({ links, classes, delay, onClick }) => {
  const routeLinks = links.map((link, i) => {
    const props = {
      to: link.path,
      activeClassName: "active",
    }
    const colorStyle = {
      background: link.color,
      borderColor: link.color
    }

    if(!link.isIndex){
      return <li onClick={onClick} key={i} style={{transitionDelay: delay + ((i+1) * delay) + "ms"}}><Link {...props}><div className="NavLinks_bullet" style={colorStyle} /><span style={{color: link.color}}>{link.name}</span></Link></li>
    }
    return <li onClick={onClick} key={i} style={{transitionDelay: delay + ((i+1) * delay) + "ms"}}><IndexLink {...props}><div className="NavLinks_bullet" style={colorStyle} /><span style={{color: link.color}}>{link.name}</span></IndexLink></li>
  })

  return (
    <ul className={classes} aria-label="page navigation links">
      {routeLinks}
    </ul>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  onClick: PropTypes.func
}

export default NavLinks
