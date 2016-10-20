import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const NavLinks = ({ links, classes }) => {

  const routeLinks = links.map((link, i) => {
    const props = {
      to: link.path,
      activeClassName: "active",
    }

    if(!link.isIndex){
      return <li key={i}><Link {...props}>{link.name}</Link></li>
    }
    return <li key={i}><IndexLink {...props}>{link.name}</IndexLink></li>
  })

  return (
    <ul className={classes}>
      {routeLinks}
    </ul>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.string.isRequired
}

export default NavLinks
