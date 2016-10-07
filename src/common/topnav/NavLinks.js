import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

const NavLinks = ({ links }) => {

  const routeLinks = links.map((link, i) => {
    if(!link.isIndex){
      return <Link to={link.path} key={i}>{link.name}</Link>
    }
    return <IndexLink to={link.path} key={i}>{link.name}</IndexLink>
  })

  return (
    <div>
      {routeLinks}
    </div>
  )
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NavLinks
