'use client';
import Link from 'next/link';


const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          display: flex;
          gap: 12rem;
        }
        li {
          margin: 0;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
