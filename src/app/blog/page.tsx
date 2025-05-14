import React from 'react'
import CardSection from '../components/BlogCards'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div>
       <Navbar2/>
      <CardSection/>
      <div className='md:px-[12vw] px-4 w-[100vw]'>

      <Footer/>
      </div>
    </div>
  )
}

export default Blog
