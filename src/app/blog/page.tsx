import React from 'react'
import BlogBanner from '../components/blogBanner'
import Navbar from '../components/Navbar'
import CardSection from '../components/BlogCards'
import Footer from '../components/Footer'
import WhatsAppPopup from '../components/whatsappPOpUp'

function Blog() {
  return (
    <div>
        <Navbar/>
      <BlogBanner/>
      <CardSection/>
      <WhatsAppPopup/>
      <Footer/>
    </div>
  )
}

export default Blog
