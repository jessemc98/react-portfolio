import React, { PropTypes } from 'react'
import Fab from './Fab'
import './FabLink.scss'

const FabLink = ({ iconName, path, text, onClick, extension}) => {
  return (
    <div className="FabLink">
      <Fab onClick={onClick} iconName={iconName} path={path} small extension={extension}/>
      <a onClick={onClick} href={path}>{text}</a>
    </div>
  )
}

FabLink.propTypes = {
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extension: PropTypes.string
}

export default FabLink
