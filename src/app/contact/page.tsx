import React from 'react'
import ContactBanner from '../components/ContactBanner'
import Navbar from '../components/Navbar'
import ContactForm from '../components/contactForm'
import Footer from '../components/Footer'
import WhatsAppPopup from '../components/whatsappPOpUp'
import ContactPagePara from '../components/contactpagepara'

function Contactus() {
  return (
    <div className='bg-gray-950'>
        <Navbar/>
      <ContactBanner/>
      <ContactForm/>
      <ContactPagePara/>
      <WhatsAppPopup/>
      <Footer/>
    </div>
  )
}

export default Contactus
