import Link from 'next/link';
import React from 'react';
import ColorModeSwitcher from './ColorModeSwitcher';

const Header = () => {
  const linkClasses = 'hover:text-zinc-700 dark:hover:text-zinc-200';

  return (
    <header className='flex flex-col items-center gap-2 bg-zinc-200 px-4 py-2 dark:bg-zinc-950 dark:text-zinc-50 md:flex-row md:justify-between md:px-6 md:py-3'>
      <div>
        <Link
          href='/'
          className={linkClasses}
        >
          <h1>Benjamin Reiner</h1>
        </Link>
      </div>
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link
              className={linkClasses}
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={linkClasses}
              href='/about'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={linkClasses}
              href='/projects'
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={linkClasses}
              href='/contact'
            >
              Contact
            </Link>
          </li>
          <li>
            <ColorModeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
