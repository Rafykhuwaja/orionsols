import React from "react";

function CustomeWebBanner() {
  return (
    <div>
      <div className="flex flex-col md:flex-row background px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 text-white top-0 pt-20 w-full md:fixed md:z-[-1]">
        <div className="w-full md:w-1/2 pt-12 sm:pt-20 md:pt-32 fadeInLeft md:text-left md:top-16 md:relative">
          <div className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-12">
            <div className="text-[32px] sm:text-[50px] md:text-[60px] lg:text-[70px] uppercase">
              Custom Web
            </div>
            <div className="text-[#ff9c00] text-[36px] sm:text-[50px] md:text-[60px] lg:text-[80px] mt-3 md:mt-0 leading-none uppercase">
              Design
            </div>
          </div>
          <div className="relative md:bottom-5">
            <p className="mt-4 sm:mt-6 md:mt-8 pr-0 md:pr-9 w-full max-w-[700px] text-sm sm:text-base md:text-lg lg:text-xl mx-auto sm:mx-0 text-left md:text-left">
              Our Custom Web Design services focus on creating websites
              tailored to your needs. We offer research, design, and
              development, along with mobile-friendly experiences, testing, and
              deployment. Utilizing modern tools like HTML, PHP, CSS, SCSS,
              Bootstrap, Node.js, React.js, Angular, and MongoDB, we provide
              comprehensive support.
            </p>
            
            
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="h-[250px] sm:h-[350px] md:h-[40px] lg:h-[600px] xl:h-[800px] mt-5 mx-auto fadeInRight"
            src="/images/bannerImage3.png"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomeWebBanner;
