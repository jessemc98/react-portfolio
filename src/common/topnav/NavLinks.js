import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const NavLinks = ({ links, classes }) => {

  const routeLinks = links.map((link, i) => {
    if(!link.isIndex){
      return <Link to={link.path} key={i}>{link.name}</Link>
    }
    return <IndexLink to={link.path} key={i}>{link.name}</IndexLink>
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
