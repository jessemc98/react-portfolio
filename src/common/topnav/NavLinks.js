import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const NavLinks = ({ links, classes }) => {

  const routeLinks = links.map((link, i) => {
    const props = {
      to: link.path,
      activeClassName: "active",
      key: i
    }

    if(!link.isIndex){
      return <Link {...props}>{link.name}</Link>
    }
    return <IndexLink {...props}>{link.name}</IndexLink>
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
