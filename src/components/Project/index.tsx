import React from 'react';

import Dropdown from '@/components/Dropdown/Dropdown';
import ProjectPageCard from '@/components/Project/ProjectPageCard';

interface ProjectCardProps {
  title: string;
  description: string;
  domains: string[];
  position: string;
  imageUrl: string;
}

const allData: ProjectCardProps[] = [
  {
    title: 'Rustic',
    description:
      'This is a longer description of project 1. It provides more details about the project and its goals.',
    domains: ['Rust', 'Cli'],
    position: 'Geraki',
    imageUrl: '../../d.jpeg',
  },
  {
    title: 'MedBud',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: ['Web Development', 'Mobile Development', 'UI/UX Design'],
    position: 'Position 2',
    imageUrl: '../../c.jpeg',
  },
  {
    title: 'Potrait of Time',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: [
      'Web Development',
      'Mobile Development',
      'UI/UX Design',
      'Graphic Design',
    ],
    position: 'Position 2',
    imageUrl: '../../a.jpeg',
  },
  {
    title: 'MedBud',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: ['Web Development', 'Graphic Design', 'Branding', 'Marketing'],
    position: 'Position 2',
    imageUrl: '../../c.jpeg',
  },
  {
    title: 'Potrait of Time',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: ['Web Development', 'Mobile Development'],
    position: 'Position 2',
    imageUrl: '../../a.jpeg',
  },
  {
    title: 'MedBud',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: ['Graphic Design', 'Branding', 'Marketing'],
    position: 'Position 2',
    imageUrl: '../../c.jpeg',
  },
  {
    title: 'Potrait of Time',
    description:
      'This is a longer description of project 2. It provides more details about the project and its goals.',
    domains: ['Web Development', 'Branding', 'Marketing'],
    position: 'Position 2',
    imageUrl: '../../a.jpeg',
  },
];
const domainKeys = [
  'Web Development',
  'Rust',
  'Mobile Development',
  'UI/UX Design',
  'Graphic Design',
];
const Project = () => {
  const [data, setData] = React.useState<ProjectCardProps[]>(allData);
  const handleOptionSelect = (option: string) => {
    if (option === 'All') {
      setData(allData);
    } else {
      const newData = allData.filter((project) => {
        return project.domains.includes(option);
      });
      setData(newData);
    }
    return null;
  };

  return (
    <>
      <Dropdown options={domainKeys} onOptionSelect={handleOptionSelect} />
      <div className=' mx-5 grid grid-cols-1 justify-items-center gap-20 md:grid-cols-3'>
        {data.map((project) => {
          return (
            <ProjectPageCard
              title={project.title}
              description={project.description}
              domains={project.domains}
              position={project.position}
              imageUrl={project.imageUrl}
              key={project.title}
            />
          );
        })}
      </div>
    </>
  );
};

export default Project;
