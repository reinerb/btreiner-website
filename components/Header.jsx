import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <h1>Benjamin Reiner</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
