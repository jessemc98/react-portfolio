import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import './ContactPage.scss'
import Fab from '../common/fab/Fab'
import FabList from '../common/FabList/FabList'
import { socialLinks } from '../../store/links'

import locationIcon from '../../assets/icons/location.svg'

const ContactPage = (props) => {
  return (
    <main className="ContactPage route">
      <h1>ContactPage</h1>
      <div className="ContactPage_info">
        <p>
          Interested in developing something awesome together?
        </p>
        <p>
          To get in touch contact me at
        </p>
        <a href="mailto:contact@dev-jesse.com?">contact@dev-jesse.com</a>
      </div>
      <div className="ContactPage_buttons">
        <div className="ContactPage_buttons_location">
          <Fab icon={locationIcon} alt="location icon" tabIndex="0" />
        </div>
        <FabList links={socialLinks} />
      </div>
      <ContactForm />
    </main>
  )
}

export default ContactPage
