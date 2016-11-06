import React, { PropTypes } from 'react'
import FabLink from '../fab/FabLink'

const NavFooter = (props) => {
  return (
    <div className="TopNav_content_NavFooter">
      <FabLink iconName="eye" path="https://github.com/jessemc98/react-portfolio" text="View Source"/>
      <FabLink iconName="message" path="mailto:jessemc98@hotmail.com?" text="jessemc98@hotmail.com"/>
    </div>
  )
}

export default NavFooter
