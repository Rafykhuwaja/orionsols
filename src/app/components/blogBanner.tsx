import React from 'react'

function BlogBanner() {
  return (
    <div className="flex flex-col-reverse md:flex-row blog-background px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white top-0 md:pt-24 w-full md:fixed md:z-[-1]">
      <div className="w-full md:w-1/2">
        <img
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[800px] max-w-full mx-auto fadeInLeft"
          src="/images/bannerImage4.png"
          alt="Banner"
        />
      </div>
      <div className="w-full md:w-1/2 pt-10 md:pt-32 fadeInRight">
        <h1 className="font-black text-3xl md:text-5xl lg:text-7xl md:mt-5">
          <span className='text-[#ff9c00] md:text-[61px]'>WELCOME TO</span> <br /> 
          <span className='text-[5vw] md:text-[83px]'>ORIONSOLS BLOG</span> <br />
        </h1>
        <h1 className='text-3xl font-extrabold md:text-5xl lg:text-7xl md:mt-6'>
          <span className='text-white md:text-[50px] md:mt-16'>Your Hub for Tech & <br />
          <span className='text-[#ff9c00] md:relative bottom-3 text-[57px]'>Business Growth!</span></span>
        </h1>
        <p className="mt-3 pr-0 md:pr-9 text-base md:text-xl md:max-w-[920px]">
          Stay informed with the latest updates, expert advice, and success stories from the tech industry.
        </p>
      </div>
    </div>
  )
}

export default BlogBanner
