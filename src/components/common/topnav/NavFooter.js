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
        text="jessemc98@hotmail.com"
        path="mailto:jessemc98@hotmail.com?" />
    </div>
  )
}

export default NavFooter
