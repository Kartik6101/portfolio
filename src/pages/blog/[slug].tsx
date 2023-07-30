// pages/blog/[slug].tsx

import React, { useEffect, useState } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import * as navStyles from '@/styles/navStyles';

import PatherPanchali from '../../../public/blogs/pather-panchali-impact-on-modern-indian-cinema.mdx';

const BlogDisplayPage = () => {
  const navbarText = `${navStyles.navbarText} text-white bg-zinc-900 md:text-zinc-800 md:bg-inherit md:font-semibold`;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className='flex flex-col'>
      <section>
        <Navbar
          navbarText={navbarText}
          navbarElements={navStyles.navbarElements}
        />
      </section>
      <div className=' flex w-full justify-center font-sans '>
        <article
          className={`prose prose-zinc hover:prose-a:text-blue-500  prose-a:no-underline  prose-sm md:prose-lg z-20 max-w-6xl rounded-md   bg-white p-10 shadow-xl transition-opacity duration-1000 md:m-10 md:border-2 md:p-20 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <PatherPanchali />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDisplayPage;
