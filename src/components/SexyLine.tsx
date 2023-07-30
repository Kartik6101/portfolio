const sexyLineStyle = `
h-px my-8 bg-gray-600 border-0 dark:bg-gray-700 w-1/2 rounded-lg
`;
const sexyLineFormat = ` 
 grid justify-items-center
`;
const SexyLine = () => {
  return <hr className={`${sexyLineStyle} ${sexyLineFormat}`}></hr>;
};

export default SexyLine;
