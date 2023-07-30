import { useState } from 'react';

interface DropdownProps {
  options: string[];
  onOptionSelect: (option: string) => null;
}
const Dropdown = ({ options, onOptionSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className='ml-5'>
      <button
        className='flex flex-row justify-between  bg-green-300  p-2 font-semibold text-black'
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || 'Select an option'}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          className='font-bold text-black'
        >
          <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z' />
        </svg>
      </button>
      {isOpen && (
        <ul className='absolute z-50 rounded-md bg-zinc-900 p-2 shadow-md'>
          {options.map((option) => (
            <li
              key={option}
              className='cursor-pointer p-2 hover:bg-green-300 hover:text-black'
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
