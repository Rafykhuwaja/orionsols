import React from 'react'
import CardSection from '../components/BlogCards'
import Navbar2 from '../components/Navbar2'


export const metadata = {
  title: "Our Blogs | Orionsols",
  description:
    "Orionsols is a Dubai-based digital agency providing expert services in web development, mobile apps, SEO, and e-commerce,  helping businesses grow online.",
};

function Blog() {
  return (
    <div>
       <Navbar2/>
      <CardSection/>
      <div className='md:px-[12vw] px-4 w-[100vw]'>

      </div>
    </div>
  )
}

export default Blog
