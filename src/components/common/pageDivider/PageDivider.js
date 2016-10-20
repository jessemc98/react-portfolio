import React, { PropTypes } from 'react'
import './PageDivider.scss'

const PageDivider = ({ title }) => {
  return (
    <div className="PageDivider">
      <span />
      <h2>{title}</h2>
      <span />
    </div>
  )
}
PageDivider.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageDivider
