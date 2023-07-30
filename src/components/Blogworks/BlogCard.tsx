/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { textFontStyle } from '@/styles/introduction';

interface BlogCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}
const BlogCard = ({ imageUrl, title, description, link }: BlogCardProps) => (
  <Link className='relative m-5 ' href={link}>
    <img
      src={imageUrl}
      alt={title}
      className='h-64 w-full rounded-lg object-cover  hover:bg-inherit md:h-full md:w-full '
    />
    <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 md:visible'>
      <div className='text-center text-white'>
        <h2 className='text-md font-semibold md:text-2xl'>{title}</h2>
        <p className='mx-8  mt-2 leading-relaxed'>{description}</p>
      </div>
    </div>
    <div className='visible grid text-black md:hidden md:justify-items-center '>
      <div className='grid justify-items-center'>
        <h2 className='mt-5 text-xl font-bold '>{title}</h2>
        <div className={`${textFontStyle} mt-2 leading-relaxed `}>
          <p className='mx-5 text-black'>{description}</p>
        </div>
      </div>
      <button className='pulse responsive mt-4 transform rounded-md border bg-zinc-800 px-4 py-2 text-white transition duration-300 ease-in-out hover:-translate-y-1  hover:scale-110'>
        Read more
      </button>
    </div>
  </Link>
);

export default BlogCard;
