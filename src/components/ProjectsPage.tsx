import React from 'react';

import ProjectCard from '@/components/ProjectCard';
import SexyLine from '@/components/SexyLine';

interface ProjectCardProps {
  title: string;
  description: string;
  position: string;
  imageUrl: string;
}
const ProjectsPage = () => {
  //!ALERT: This is a dummy data. Replace it with your own data.
  const data: ProjectCardProps[] = [
    {
      title: 'HumanTD',
      description:
        'A portal that tracks down a person of interest by using backtracking and video footage from CCTV cameras.',
      position: 'Track Winner of Yantra',
      imageUrl: '../../humantd.jpeg',
    },
    {
      title: 'MedBud',
      description:
        'A service that offers text-based management for hospitals and their patients features a chatbot',
      position: 'Appeared in GDSC hack',
      imageUrl: '../../medbud.jpeg',
    },
    {
      title: 'Echoes',
      description:
        'Terminal based interface that assists users to select templates for codes and React components.',
      position: 'Personal Favorite',
      imageUrl: '../../echoes.jpeg',
    },
  ];
  return (
    <section className='grid justify-items-center text-zinc-200 md:mx-20 '>
      <div className='grid justify-items-center'>
        <h1
          className={` font-secondary mt-8 flex justify-center  text-2xl font-semibold leading-relaxed md:mt-20 md:text-5xl`}
        >
          Hand-Selected Projects
        </h1>
        <p className='text-md mx-5 mt-5 w-3/4 text-center font-normal leading-snug tracking-wide text-zinc-200 md:mx-10 md:mt-10 md:text-lg md:leading-snug md:tracking-widest'>
          Below are some case studies of my favorite projects over the years, a
          few of which have been featured in hackathons Yantra, Socal
          Transformers, Devsoc and more.
        </p>
      </div>
      <SexyLine />
      <div className='grid w-full justify-items-center'>
        {data.map((project) => {
          return (
            <>
              <ProjectCard
                title={project.title}
                description={project.description}
                position={project.position}
                imageUrl={project.imageUrl}
                key={project.title}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPage;
