import React, { PropTypes } from 'react'
import FabLink from '../fab/FabLink'

import eyeIcon from '../../../assets/icons/eye.svg'
import messageIcon from '../../../assets/icons/message.svg'

const NavFooter = () => {
  return (
    <div className="TopNav_content_NavFooter">
      <FabLink
        icon={eyeIcon}
        text="View Source"
        path="https://github.com/jessemc98/react-portfolio" />
      <FabLink
        icon={messageIcon}
        text="contact@dev-jesse.com"
        path="mailto:contact@dev-jesse.com?" />
    </div>
  )
}

export default NavFooter
