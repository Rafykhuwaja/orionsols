import React from 'react'
import ContactBanner from '../components/ContactBanner'
import Navbar from '../components/Navbar'
import ContactForm from '../components/contactForm'
import Contact from '../components/contact'
import Footer from '../components/Footer'
import WhatsAppPopup from '../components/whatsappPOpUp'

function Contactus() {
  return (
    <div>
        <Navbar/>
      <ContactBanner/>
      <ContactForm/>
      <Contact/>
      <WhatsAppPopup/>
      <Footer/>
    </div>
  )
}

export default Contactus
