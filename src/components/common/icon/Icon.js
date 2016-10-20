import React, { PropTypes } from 'react'

const Icon = ({ iconName }) => {
  const basePath = 'src/assets/icons'
  return (
    <img src={`${basePath}/${iconName}.svg`}/>
  )
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired
}

export default Icon
