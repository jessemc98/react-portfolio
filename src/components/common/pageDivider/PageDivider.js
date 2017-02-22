import React, { PropTypes } from 'react'
import './PageDivider.scss'

const PageDivider = ({ title }) => {
  return (
    <header className="PageDivider">
      <span />
      <h2>{title}</h2>
      <span />
    </header>
  )
}
PageDivider.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageDivider
