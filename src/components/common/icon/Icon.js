import React, { PropTypes } from 'react'

const Icon = ({ iconName, extension="svg" }) => {
  const basePath = 'src/assets/icons'
  return (
    <img src={`${basePath}/${iconName}.${extension}`}/>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  extension: PropTypes.string
}

export default Icon
