import React from 'react'

function WhyChoosUsSection() {
  return (
    <div className='px-4 md:px-10 lg:px-20 flex flex-col md:flex-row py-10 md:py-36  bg-gray-900 md:mt-[785px]'>
      <div className='w-full md:w-1/2 rounded-lg'>
        <div className='bg-[#ff9c00]  w-full rounded-lg fadeInLeft'>
          <img src="/images/Image1.jpg" alt="" className='w-full h-auto rounded-lg relative bottom-8 right-8' />
        </div>
      </div>
      <div className='w-full md:w-1/2 relative bottom-8 fadeInRight md:ml-7'>
        <p className='text-white  text-sm my-3'>Why Choose Orionsols?</p>
        <h1 className='text-2xl md:text-4xl text-white font-extrabold mb-5 mt-10'>What makes <br />Orionsols Different?</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-9 text-sm text-gray-300'>
          <div>
            <p className='text-[#ff9c00]  font-semibold text-xl mb-3'>Expertise You Can Trust</p>
            <p>With a team of seasoned professionals, we craft customized strategies to boost your online presence.</p>
          </div>
          <div>
            <p className='text-[#ff9c00]  font-semibold text-xl mb-3'>Innovative Solutions</p>
            <p>We use cutting-edge tools and data-driven insights to deliver impactful results for your business.</p>
          </div>
          <div>
            <p className='text-[#ff9c00]  font-semibold text-xl mb-3'>Customer-Centric Approach</p>
            <p>Your success is our priority. We’re committed to providing exceptional service that drives growth.</p>
          </div>
          <div>
            <p className='text-[#ff9c00] font-semibold text-xl mb-3'>Proven Results</p>
            <p>We have a track record of delivering measurable outcomes. Our tailored solutions are designed to generate real, long-term growth for your business.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoosUsSection