/* eslint-disable @next/next/no-img-element */

import Button from '@/components/buttons/Button';

interface ProjectCardProps {
  title: string;
  description: string;
  position: string;
  imageUrl: string;
  githubButtonText?: string;
  githubButtonColor?: string;
  githubButtonUrl?: string;
  linkButtonText?: string;
  linkButtonColor?: string;
  linkButtonUrl?: string;
}
const buttonStyles = `
 responsive transform rounded-md border border-zinc-900 md:px-4 py-2 text-white transition duration-300 hover:bg-zinc-100 hover:text-zinc-900 border-b-2 border-b-white mb-5 md:mb-2 bg-zinc-800
`;
const ProjectCard = ({
  imageUrl,
  position,
  title,
  description,
  githubButtonText = 'Github',
  linkButtonText = 'Link',
}: ProjectCardProps) => {
  return (
    <>
      <div className='flex w-4/5 flex-col-reverse justify-center md:flex-row-reverse md:justify-between '>
        <div className='m-5  border-white md:mx-10 md:mt-14 '>
          <h2 className='project-card-title test-lg  text-center font-extrabold text-zinc-200 md:text-left md:text-4xl'>
            {title}
          </h2>
          <h3 className='my-2 text-center text-zinc-300 md:text-left md:text-xl'>
            {position}
          </h3>
          <p className='text-md my-5 mr-5 font-normal leading-relaxed text-zinc-200 '>
            {description}
          </p>
          <div className='flex flex-row justify-center md:justify-start'>
            <Button variant='dark' className={`${buttonStyles} `}>
              {githubButtonText} {`</>`}
            </Button>
            <Button variant='dark' className={`${buttonStyles} ml-5 px-10`}>
              {linkButtonText}
            </Button>
          </div>
        </div>

        <div className='relative md:m-10'>
          <img
            src={imageUrl}
            className='max-h-[620px] transform rounded-lg border border-gray-300 transition duration-500 hover:scale-110 hover:shadow-lg '
            title={title}
            alt={title}
          />
          <div className='absolute inset-0 rounded-lg bg-zinc-900 opacity-0 transition duration-500 hover:opacity-50'></div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
