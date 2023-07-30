import * as React from 'react';

import Blogworks from '@/components/Blogworks/Blogworks';
import Introduction from '@/components/Introduction';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import ProjectsPage from '@/components/ProjectsPage';
import Seo from '@/components/Seo';

export default function HomePage() {
  const navbarText = `text-md leading-loose text-white bg-zinc-900 md:text-zinc-800 md:bg-inherit md:font-semibold`;
  const navbarElements = `my-2 md:mx-16 px-4 py-2 hover:text-zinc-400  w-full md:w-auto justify-center flex font-semibold`;
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />

      <main className='bg-sandpaper-texture  bg-contain'>
        <section className=''>
          <Navbar navbarText={navbarText} navbarElements={navbarElements} />
        </section>
        <div className=''>
          <Introduction />
        </div>

        <section className='mt-32  bg-zinc-900  bg-contain pb-20'>
          <ProjectsPage />
        </section>
        <section className='mt-10 pb-10 md:mx-40'>
          <Blogworks />
        </section>
      </main>
    </Layout>
  );
}
