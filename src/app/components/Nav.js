'use client';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="w-full flex justify-center py-4">
      <ul className="flex list-none gap-5 md:gap-8 lg:gap-16 text-3xl">
        <li className="font-mono">
          <Link href="/">Home</Link>
        </li>
        <li className="font-mono">
          <Link href="/about">About</Link>
        </li>
        <li className="font-mono">
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
