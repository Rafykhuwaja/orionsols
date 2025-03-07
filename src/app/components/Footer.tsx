import React from 'react';

function Footer() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between py-5 px-8 md:px-16 text-lg bg-gray-950 text-gray-400'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 w-full md:w-auto mt-3'>
        <p className='text-xs md:text-lg'>@ 2025 ORIONSOLS, Inc. All rights reserved</p>
        <ul className='flex gap-5 md:gap-8'>
          <li className='hover:underline'>Terms</li>
          <li className='hover:underline'>Privacy</li>
          <li className='hover:underline'>Support</li>
        </ul>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-between gap-5 md:gap-8 mt-5 md:mt-0 w-full md:w-auto'>
        <div className='flex flex-col items-start'>
          <p className='font-bold'>Find us:</p>
          <p>Ascott Park Place Tower Office 401, Dubai</p>
        </div>
        <div className='flex flex-col items-start'>
          <p className='font-bold'>Call us:</p>
          <p>(+971) 528 977 529</p>
        </div>
        <div className='flex flex-col items-start'>
          <p className='font-bold'>Mail us:</p>
          <p>info@Orionsols.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
