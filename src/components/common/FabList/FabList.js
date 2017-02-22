import React, { PropTypes } from 'react'
import Fab from '../fab/Fab'
import './FabList.scss'

const FabList = ({ links }) => {
  const linksToFabs = links.map((link, i) => {
    return <Fab key={i} {...link}/>
  })

  return (
    <ul className="FabList">
      {linksToFabs}
    </ul>
  )
}

FabList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired
}

export default FabList
