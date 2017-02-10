import React, { PropTypes } from 'react'
import Fab from './Fab'
import './FabLink.scss'

const FabLink = ({ icon, path, text, onClick}) => {
  const linkProps = {
    onClick,
    href: path,
    children: text,
    tabIndex: 0,
    className: "FabLink-link",
  }
  return (
    <div className="FabLink">
      <Fab
        onClick={onClick}
        icon={icon}
        alt={text}
        path={path}
        small
        tabIndex="-1" />
      {
        linkProps.href ?
        <a {...linkProps} /> :
        <button {...linkProps} />
      }
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
