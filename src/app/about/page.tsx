import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner'
import Navbar from '../components/Navbar'
import AboutusContent from '../components/AboutusContent'
import Footer from '../components/Footer'

function Page() {
  return (
    <div>
        <Navbar/>
      <AboutUsBanner/>
      <AboutusContent/>
      <Footer/>
    </div>
  )
}

export default Page
