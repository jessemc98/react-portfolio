import React from 'react'
import PictureFrame from '../pictureFrame/PictureFrame'
import PageDivider from '../../common/pageDivider/PageDivider'
import AboutInfo from './AboutInfo'
import ModalContainer from '../Modal/ModalContainer'
import './AboutPage.scss'

const AboutPage = (props) => {
  return (
    <div id="AboutPage">
      <PictureFrame />
      <AboutInfo />
      <PageDivider title="Key Skills"/>
      <ModalContainer />
    </div>
  )
}

export default AboutPage
