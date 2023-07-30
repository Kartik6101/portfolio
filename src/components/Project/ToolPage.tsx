import React from 'react';

import Dropdown from '@/components/Dropdown/Dropdown';
import SexyLine from '@/components/SexyLine';

import { textFontStyle, titlePosition } from '@/styles/introduction';
const toolsData: {
  [key: string]: string[];
} = {
  'Web  Development': [
    'React',
    'NextJS',
    'TypeScript',
    'Tailwind CSS',
    'Sass',
    'Chakra UI',
    'Framer Motion',
    'D3',
    'Storybook',
    'Jest',
    'Cypress',
    'Vercel',
    'Netlify',
    'Git',
    'GitHub',
    'GitLab',
    'BitBucket',
    'Adobe Creative Suite',
    'Figma',
    'Sketch',
    'InVision',
    'Zeplin',
    'python',
    'Django',
    'Flask',
    'NodeJS',
    'Express',
  ],
  'IOT development': [
    'Arduino',
    'Raspberry Pi',
    'Particle',
    'ESP8266',
    'ESP32',
    'BeagleBone',
    'Intel Edison',
    'Intel Galileo',
    'Nordic nRF51',
    'Nordic nRF52',
    'Texas Instruments CC3200',
  ],
  'Blockchain ': [
    'Ethereum',
    'Hyperledger',
    'R3 Corda',
    'EOS',
    'Truffle',
    'Ganache',
    'Geth',
    'Solidity',
    'Vyper',
    'Remix',
    'Web3',
  ],
  'Command Line Interface': [
    'Bash',
    'Zsh',
    'Oh-my-zsh',
    'Oh-my-bash',
    'Homebrew',
    'MacPorts',
    'Cygwin',
    'MinGW',
    'PowerShell',
    'Command Prompt',
    'Windows Terminal',
  ],
};

const ToolPage = () => {
  // const [selectedOption, setSelectedOption] = useState(
  //   Object.keys(toolsData)[0]
  // );

  // const handleOptionSelect = (option: string) => {
  //   setSelectedOption(option);
  //   return null;
  // };
  return (
    <>
      <div
        className={` text-3xl  font-semibold sm:text-5xl ${titlePosition} text-grey-light mt-20 `}
      >
        " Tools "
      </div>
      <div className='md:my-15 mx-5 my-5  text-center sm:w-3/4 md:mx-10'>
        <div
          className={`text-grey-light  font-light leading-relaxed tracking-widest `}
        >
          <div className={`${textFontStyle} flex `}>
            Below are some case studies of my favorite projects over the years,
            a few of which have been featured in Behance Interaction Design,
            Billboard Magazine, Forbes and more.
          </div>
        </div>
      </div>
      <SexyLine />
      <div className='flex flex-col justify-center py-5 '>
        <div className=''>
          <Dropdown
            options={Object.keys(toolsData)}
            onOptionSelect={() => {
              return null;
            }}
          />
        </div>
        {/* <Tools tools={toolsData[selectedOption]} /> */}
      </div>
    </>
  );
};

export default ToolPage;
