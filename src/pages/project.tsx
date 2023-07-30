import React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Project from '@/components/Project';
import SexyLine from '@/components/SexyLine';

import { textFontStyle, titlePosition } from '@/styles/introduction';
import * as navStyles from '@/styles/navStyles';

const project = () => (
  <Layout>
    <div className='bg-zinc-900'>
      <section className='text-white  md:mx-20'>
        <Navbar
          navbarText={navStyles.navbarText}
          navbarElements={navStyles.navbarElements}
        />

        <div className='grid justify-items-center'>
          <div
            className={` text-2xl  font-semibold sm:text-5xl ${titlePosition} text-grey-light mt-20 `}
          >
            " Curated Projects "
          </div>
          <div className='md:my-15 mx-4 my-5 text-center sm:w-3/4 md:mx-10'>
            <div
              className={`text-grey-light text-md flex font-light leading-relaxed tracking-wide md:text-xl md:leading-relaxed md:tracking-widest `}
            >
              <div className={`${textFontStyle} flex `}>
                Below are some case studies of my favorite projects over the
                years, a few of which have been featured in Behance Interaction
                Design, Billboard Magazine, Forbes and more.
              </div>
            </div>
          </div>
          <SexyLine />
        </div>
        <div className='p-2'>
          <Project />
        </div>
        {/* <div className='invisible justify-items-center  md:visible'>
        <ToolPage />
      </div> */}
      </section>
    </div>
  </Layout>
);

export default project;
