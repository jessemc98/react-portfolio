import React, { PropTypes } from 'react'
import Fab from './Fab'
import './FabLink.scss'

const FabLink = ({ icon, path, text, onClick}) => {
  return (
    <div className="FabLink">
      <Fab onClick={onClick} icon={icon} alt={text} path={path} small />
      <a tabIndex="0" onClick={onClick} href={path}>{text}</a>
    </div>
  )
}

FabLink.propTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  extension: PropTypes.string
}

export default FabLink
