import Link from 'next/link';
import React from 'react';
import ColorModeSwitcher from './ColorModeSwitcher';

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row md:justify-between items-center gap-2 bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-50 md:px-6 md:py-3 px-4 py-2'>
      <div>
        <Link
          href='/'
          className='hover:text-zinc-700 dark:hover:text-zinc-200'
        >
          <h1 className='text-2xl'>Benjamin Reiner</h1>
        </Link>
      </div>
      <nav>
        <ul className='flex gap-4'>
          <li className='hover:text-zinc-700 dark:hover:text-zinc-200'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-zinc-700 dark:hover:text-zinc-200'>
            <Link href='/about'>About</Link>
          </li>
          <li className='hover:text-zinc-700 dark:hover:text-zinc-200'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-zinc-700 dark:hover:text-zinc-200'>
            <Link href='/contact'>Contact</Link>
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
