import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-zinc-900 p-4 text-white sm:p-6'>
      <div className='md:flex md:justify-between'>
        <div className='mb-6 text-xl font-semibold md:mb-0'>nilay sharan.</div>
        <div className='mr-16 grid grid-cols-2 gap-8 font-medium sm:grid-cols-2 sm:gap-6'>
          <div className='flex flex-col space-y-2'>
            <Link href='/about' className='hover:text-zinc-300 hover:underline'>
              About Me
            </Link>
            <Link
              href='/contact'
              className='hover:text-zinc-300 hover:underline'
            >
              Contact
            </Link>
            <Link
              href='/projects'
              className='hover:text-zinc-300 hover:underline'
            >
              Projects
            </Link>
          </div>
          <div className='flex flex-col space-y-2'>
            <a
              href='https://twitter.com/yourusername'
              className='hover:text-zinc-300 hover:underline'
            >
              Twitter
            </a>
            <a
              href='https://github.com/yourusername'
              className='hover:text-zinc-300 hover:underline'
            >
              GitHub
            </a>
            <a
              href='https://linkedin.com/in/yourusername'
              className='hover:text-zinc-300 hover:underline'
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className='mt-4 text-center text-sm text-zinc-600'>
        © {new Date().getFullYear()} nilay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
