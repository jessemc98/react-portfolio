import React, { PropTypes } from 'react'
import './Fab.scss'

const Fab = ({ icon, alt, path, small, onClick, tabIndex }) => {
  let className = "Fab"
  if(small){
    className += " small"
  }
  const linkProps = {
    className: className,
    href: path,
    onClick: onClick,
    tabIndex: tabIndex,
    "aria-label": alt
  }
  return React.createElement(
    path ? 'a' : 'button',
    linkProps,
    (<img src={icon} alt={alt} />)
  )
}

Fab.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  path: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func
}

export default Fab
