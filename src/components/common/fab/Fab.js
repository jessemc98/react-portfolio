import React, { PropTypes } from 'react'
import Icon from '../icon/Icon'
import './Fab.scss'

const Fab = ({ iconName, path, small, onClick, extension}) => {
  let className = "Fab"
  if(small){
    className += " small"
  }
  return (
      <a className={className} href={path} onClick={onClick}>
        <Icon iconName={iconName} extension={extension}/>
      </a>
  )
}

Fab.propTypes = {
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  extension: PropTypes.string
}

export default Fab
