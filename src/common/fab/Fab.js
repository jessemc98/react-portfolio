import React, { PropTypes } from 'react'
import Icon from '../icon/Icon'
import './Fab.scss'

const Fab = ({ iconName, path, small, onClick}) => {
  let className = "Fab"
  if(small){
    className += " small"
  }
  return (
      <a className={className} href={path} onClick={onClick}>
        <Icon iconName={iconName}/>
      </a>
  )
}

Fab.propTypes = {
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func
}

export default Fab
