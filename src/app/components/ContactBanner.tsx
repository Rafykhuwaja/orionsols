import React from 'react';

function ContactBanner() {
  return (
    <div className="flex flex-col-reverse md:flex-row background px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white top-0 ">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          className="h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] xl:h-[800px] max-w-full mx-auto fadeInLeft"
          src="/images/bannerImage2.png"
          alt="Banner"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 pt-10 sm:pt-16 md:pt-32 fadeInRight">
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-[#ff9c00]">GET IN </span> <br />{" "}
          <span className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
            TOUCH WITH US
          </span>
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-3 pr-0 md:pr-9 text-sm sm:text-base md:text-lg lg:text-xl max-w-[920px]">
          At Orionsols, were always here to help you take your business to the
          next level. Whether you have questions, want to discuss a project, or
          need expert advice, our team is just a message away.
        </p>
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ff9c00] mt-6 sm:mt-8 md:mt-10">
          Lets Connect
        </h1>
        <p className="mt-3 sm:mt-4 md:mt-4 font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-[560px]">
          We d love to hear from you! Fill out the form below or contact us
          directly through the details provided.
        </p>
      </div>
    </div>
  );
}

export default ContactBanner;