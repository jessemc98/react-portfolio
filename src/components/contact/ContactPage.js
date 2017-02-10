import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import './ContactPage.scss'
import Fab from '../common/fab/Fab'
import FabList from '../common/FabList/FabList'
import { socialLinks } from '../../store/links'

import locationIcon from '../../assets/icons/location.svg'

const ContactPage = (props) => {
  return (
    <div className="ContactPage route">
      <h2>ContactPage</h2>
      <div className="ContactPage_info">
        <p>
          Interested in developing something awesome together?
        </p>
        <p>
          To get in touch contact me at
        </p>
        <a href="mailto:jessemc98@hotmail.com?">jessemc98@hotmail.com</a>
      </div>
      <div className="ContactPage_buttons">
        <div className="ContactPage_buttons_location">
          <Fab icon={locationIcon} alt="location icon" tabIndex="0" />
        </div>
        <FabList links={socialLinks} />
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactPage
