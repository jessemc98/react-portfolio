import React, { PropTypes } from 'react'
import FabList from '../common/FabList/FabList'
import './PictureFrame.scss'

import { socialLinks } from '../../store/links'
import picture from '../../assets/images/logo.png'

const PictureFrame = (props) => {
  return (
    <div className="PictureFrame">
      <img src={picture} alt="jmc logo: jmc in bold white letters"/>
      <FabList links={socialLinks}/>
    </div>
  )
}

export default PictureFrame
