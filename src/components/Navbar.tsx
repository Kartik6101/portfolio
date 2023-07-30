import Link from 'next/link';

interface NavbarProps {
  navbarText: string;
  navbarElements: string;
}

function Navbar({ navbarElements, navbarText }: NavbarProps) {
  const navbarHoverStyles = `
  hover:text-zinc-500 
  `;
  return (
    <nav className={`flex justify-evenly md:justify-center  ${navbarText}  `}>
      <Link className={`${navbarElements} ${navbarHoverStyles}`} href='/'>
        Home
      </Link>
      <Link
        className={`${navbarElements} ${navbarHoverStyles}`}
        href='/project'
      >
        Project
      </Link>
      <Link className={`${navbarElements} ${navbarHoverStyles}`} href='/resume'>
        Resume
      </Link>
    </nav>
  );
}

export default Navbar;
