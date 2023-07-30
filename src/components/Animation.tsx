import AnimatedText from 'react-animated-text-content';
interface animationData {
  text: string;
}
const Animation = ({ text }: animationData) => {
  return (
    <AnimatedText
      type='words' // animate words or chars
      animation={{
        x: '200px',
        y: '-20px',
        scale: 1.1,
        ease: 'ease-in-out',
      }}
      animationType='lights'
      interval={0.03}
      duration={1.0}
      tag='p'
      className='animated-paragraph'
      includeWhiteSpaces
      threshold={0.1}
      rootMargin='20%'
    >
      {text}
    </AnimatedText>
  );
};

export default Animation;
