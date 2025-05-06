import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div>

    <div className='flex flex-col-reverse md:flex-row justify-between py-5 text-gray-400'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 w-full md:w-auto mt-3'>
        <p className='text-xs md:text-lg'>@ 2025 ORIONSOLS, Inc. All rights reserved</p>
        {/* <ul className='flex gap-5 md:gap-8'>
          <li className='hover:underline'>Terms</li>
          <li className='hover:underline'>Privacy</li>
          <li className='hover:underline'>Support</li>
        </ul> */}
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
        <div className="flex gap-10 mb-10">
          <Link href="https://www.facebook.com/share/18SDa3NGi1/?mibextid=wwXIfr" target="_blank">
          <Facebook color="#9ca3af" />
          </Link>
          <Link href="https://www.instagram.com/orionsols?igsh=MXExM2Y2bHUzNGI3MQ%3D%3D&utm_source=qr" target="_blank">
          <Instagram color="#9ca3af" />
          </Link>
          <Link href="https://www.linkedin.com/company/orionsols?trk=profile-position" target="_blank">
          <Linkedin color="#9ca3af" />
          </Link>
          <Twitter color="#9ca3af" />
        </div>
      </div>
    </div>
    {/* <div className='bg-gray-800 text-sm text-gray-400 px-3 flex gap-3'>
      <h1>Developed by Muhammad Uzair</h1>
      <p>uzairshaikh346@gmail.com</p>
    </div> */}
    
    </div>
  );
}

export default Footer;
