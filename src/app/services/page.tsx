import React from 'react'
import Navbar from '../components/Navbar'
import ServiceBanner from '../components/serviceBanner'
import ServiceAboutSection from '../components/serviceAboutSection'
import CardComponent from '../serviceServiceSevtion'
import ServiceCallToActionSection from '../components/serviceCallToActionSection'
import ServiceContact from '../components/serviceContact'
import Footer from '../components/Footer'
import WhatsAppPopup from '../components/whatsappPOpUp'
import CustomeWebContent from '../components/customeWebContent'

function page() {
  return (
    <div>
      <Navbar/>
      <ServiceBanner/>
      <CustomeWebContent/>
      <WhatsAppPopup/>
      <CardComponent/>
      <ServiceCallToActionSection/>
      <ServiceContact/>
      <Footer/>
    </div>
  )
}

export default page;

  
