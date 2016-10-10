import React, { PropTypes } from 'react'
import Icon from '../icon/Icon'
import './Fab.scss'

const Fab = ({ iconName, path, small}) => {
  let className = "Fab"
  if(small){
    className += " small"
  }
  return (
      <a className={className} href={path}>
        <Icon iconName={iconName}/>
      </a>
  )
}

Fab.propTypes = {
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  small: PropTypes.bool
}

export default Fab
