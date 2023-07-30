import { SimpleIcon } from 'simple-icons';

import { titleLinkStyle } from '../styles/introduction';

interface tags {
  simpleIcon: SimpleIcon;
  link: string;
}
const LinkTag = ({ simpleIcon, link }: tags) => {
  const svg = simpleIcon.svg;
  const title = simpleIcon.title;

  return (
    <div className='my-5 mr-5 flex flex-row items-center py-10'>
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className='mr-3 w-[35px]'
      />
      <div className={`${titleLinkStyle} hover:text-zinc-600`}>
        <a href={link} className='mr-2'>
          {title}
        </a>
        {title === 'Instagram' ? null : <a>/</a>}
      </div>
    </div>
  );
};

export default LinkTag;
