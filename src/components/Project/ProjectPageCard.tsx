/* eslint-disable @next/next/no-img-element */
import cn from 'classnames';
import Link from 'next/link';

import Button from '@/components/buttons/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  position: string;
  imageUrl: string;
  domains: string[];
  githubButtonText?: string;
  githubButtonColor?: string;
  githubButtonUrl?: string;
  linkButtonText?: string;
  linkButtonColor?: string;
  linkButtonUrl?: string;
}
const buttonStyles = `
 responsive transform rounded-md border border-zinc-900  text-white transition duration-300 hover:bg-green-300 hover:text-zinc-900 border-b-2  border-b-green-300
`;
const ProjectPageCard = ({
  imageUrl,
  title,
  domains,
  description,
  githubButtonText = 'Github',
  linkButtonText = 'Link',
}: ProjectCardProps) => {
  return (
    <>
      <div className='my-2 flex w-full flex-col justify-center justify-items-center rounded-lg border-y-2 border-green-300 bg-zinc-800 bg-opacity-80 transition duration-300 ease-in-out  hover:scale-105 '>
        <img
          src={imageUrl}
          className='h-auto max-w-md
           transform rounded-lg  p-10  '
          alt={title}
        />

        <div className='m-5'>
          <h2
            className={cn(
              'project-card-title',
              'text-center',
              'test-sm',
              'md:text-left',
              'text-zinc-300'
            )}
          >
            {title}
          </h2>
          <div className='my-2 text-xs font-bold text-green-400'>
            {domains.map((domain, index) => (
              <Link key={index} href='' className='hover:text-green-900'>
                {domain}
                {index < domains.length - 1 && ', '}
              </Link>
            ))}
          </div>

          <p className='line-break text-xs leading-snug text-gray-400'>
            {description}
          </p>
          <div className='my-4 flex justify-center'>
            <Button
              variant='ghost'
              size='sm'
              className={`${buttonStyles} text-xs`}
            >
              {githubButtonText} {`</>`}
            </Button>
            <Button variant='ghost' className={`${buttonStyles} ml-5 px-10`}>
              {linkButtonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPageCard;
