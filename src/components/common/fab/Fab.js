import React, { PropTypes } from 'react'
import './Fab.scss'

const Fab = ({ icon, alt, path, small, onClick }) => {
  let className = "Fab"
  if(small){
    className += " small"
  }
  return (
      <a className={className} href={path} onClick={onClick}>
        <img src={icon} alt={alt} />
      </a>
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
