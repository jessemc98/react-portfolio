import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const NavLinks = ({ links, classes, delay}) => {
  const routeLinks = links.map((link, i) => {
    const props = {
      to: link.path,
      activeClassName: "active",
    }

    if(!link.isIndex){
      return <li key={i} style={{transitionDelay: delay + ((i+1) * delay) + "ms"}}><Link {...props}>{link.name}</Link></li>
    }
    return <li key={i} style={{transitionDelay: delay + ((i+1) * delay) + "ms"}}><IndexLink {...props}>{link.name}</IndexLink></li>
  })

  return (
    <ul className={classes}>
      {routeLinks}
    </ul>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired
}

export default NavLinks
