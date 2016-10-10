import React, { PropTypes } from 'react'
import Fab from './Fab'
import './FabLink.scss'

const FabLink = ({ iconName, path, text }) => {
  return (
    <div className="FabLink">
      <Fab iconName={iconName} path={path} small/>
      <a href={path}>{text}</a>
    </div>
  )
}

FabLink.propTypes = {
  iconName: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FabLink
