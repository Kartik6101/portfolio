import Link from 'next/link';
import React from 'react';

interface ProjectNavbarProps {
  navbarComponents: string[];
}
const ProjectNavbar = (props: ProjectNavbarProps) => {
  return (
    <div className='flex flex-row'>
      {props.navbarComponents.map((component, index) => (
        <Link
          href='/'
          key={index}
          className={`text-md border-b-2 
          border-green-300 bg-zinc-900 px-5  py-2 font-semibold leading-relaxed   tracking-wide text-white hover:bg-green-300 hover:text-zinc-900 md:leading-relaxed md:tracking-widest
          ${index === 0 ? 'rounded-l-md border-s-2' : ''}
          ${
            index === props.navbarComponents.length - 1
              ? 'rounded-r-md border-e-2'
              : ''
          }`}
        >
          {component}
        </Link>
      ))}
    </div>
  );
};

export default ProjectNavbar;
