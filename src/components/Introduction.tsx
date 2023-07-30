import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import * as icons from 'simple-icons';

import LinkTag from '@/components/LinkTag';

import {
  nameFont,
  namePostion,
  textStyle,
  titleFont,
  titlePosition,
} from '../styles/introduction';
const sectionSpacingStyle = `
mt-32 
`;

const Introduction = () => {
  const linkTags = [
    {
      simpleIcon: icons.siGithub,
      link: 'https://github.com/SubstantialCattle5/',
    },
    {
      simpleIcon: icons.siLinkedin,
      link: 'https://www.linkedin.com/in/nilay-nath-sharan-28545a235/',
    },
    {
      simpleIcon: icons.siInstagram,
      link: 'https://www.instagram.com/nilay.sharan/',
    },
  ];

  return (
    <section
      className={`${sectionSpacingStyle} grid w-full justify-items-center`}
    >
      <div className={`${namePostion} w-full`}>
        <h2 className={`${nameFont}`}> Nilay Sharan </h2>
      </div>
      <div className={`${titleFont} ${titlePosition}`}>
        <TypeAnimation
          sequence={[
            '" डेवलपर "', // Types 'Rizz'
            2000, // Waits 1s
            '" लेखक "', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            '" इंसान "', // Deletes 'One' and types 'Two'
            3000, // Waits 2s
          ]}
          wrapper='span'
          cursor={false}
          repeat={Infinity}
          speed={5}
          style={{ fontSize: '2em', display: 'inline-block' }}
        />
      </div>
      <div className={` ${textStyle} flex-col sm:w-3/4 `}>
        <div
          className={`text-md  text-center leading-7 tracking-widest text-zinc-800 md:text-lg md:leading-10 
        `}
        >
          <p>
            {`I'm Nilay, a programmer who is passionate about full stack web development, ethical hacking and blockchain. I believe programming should solve real-world problems and create value. I build products with robust functionality and secure code.`}
          </p>
        </div>
        <div className='hidden md:block'>
          <div className='text-secondary flex flex-row '>
            {linkTags.map((data) => {
              return <LinkTag {...data} key={data.simpleIcon.title} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
