import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const NavLinks = ({ links, classes }) => {

  const routeLinks = links.map((link, i) => {
    const props = {
      to: link.path,
      activeClassName: "active",
    }

    if(!link.isIndex){
      return <Link {...props} key={i}>{link.name}</Link>
    }
    return <IndexLink {...props} key={i}>{link.name}</IndexLink>
  })

  return (
    <div className={classes}>
      {routeLinks}
    </div>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.string.isRequired
}

export default NavLinks
