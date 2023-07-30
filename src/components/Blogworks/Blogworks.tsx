import BlogCard from '@/components/Blogworks/BlogCard';

import { titlePosition } from '@/styles/introduction';

const blogTitle = 'mx-5 mt-5 mb-10 md:mx-2 md:mt-4';
const blogData = [
  {
    imageUrl: '../../a.jpeg',
    title: 'Potrait Of Time',
    description:
      'Ride this Lamborgini. Look darling I know Its just you and me parked by the beach',
    link: 'blog/pather-panchali-impact-on-modern-indian-cinema',
  },

  {
    imageUrl: '../../b.jpeg',
    title: 'Metaphysics and Kafka',
    description:
      'This is another sample blog post. It also contains some text to describe the content of the post.',
    link: 'https://www.google.com',
  },
  {
    imageUrl: '../../c.jpeg',
    title: 'Awakening',
    description:
      'This is yet another sample blog post. It has some more text to describe the content of the post.',
    link: 'https://www.google.com',
  },
  {
    imageUrl: '../../d.jpeg',
    title: 'Medusa is Hot',
    description:
      'This is the fourth sample blog post. It has even more text to describe the content of the post.',
    link: 'https://www.google.com',
  },
];

const BlogIntro = () => {
  return (
    <section
      className={`${blogTitle} grid w-3/4 justify-items-center font-mono`}
    >
      <h1
        className={` text-4xl  font-semibold sm:text-3xl ${titlePosition} text-dark`}
      >
        Blog Archive
      </h1>
      <div className='md:text-md text-md mt-5 w-full text-center  font-normal leading-snug tracking-wide text-zinc-800 md:mx-10 md:mt-10 md:w-3/4  md:text-lg md:leading-snug md:tracking-widest'>
        When I'm not working on product, I enjoy writing blogs, stories and
        papers. Here are a few selects.
      </div>
    </section>
  );
};

const blogworks = () => {
  return (
    <section className='grid justify-items-center'>
      <BlogIntro />
      <section className='grid grid-cols-1 md:grid-cols-2'>
        {blogData.map((blog) => (
          <BlogCard {...blog} key={blog.title} />
        ))}
      </section>
    </section>
  );
};

export default blogworks;
