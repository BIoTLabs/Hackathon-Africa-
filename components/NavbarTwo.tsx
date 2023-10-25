'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/index';

export default function NavbarTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex items-center justify-between flex-wrap px-5 md:px-20 py-4 shadow-md mb-0.5 xxl:px-96'>
      <div>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={180}
            height={180}
            className='mb-3'
          />
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className='block lg:hidden max-h-screen'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden justify-end flex-1'
          }`}
        >
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer md:text-lg ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } font-medium text-black pb-2`}
            >
              <Link href={`${nav.page}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
