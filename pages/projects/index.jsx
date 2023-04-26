import PrimaryLayout from '@/components/PrimaryLayout';
import Link from 'next/link';
import React from 'react';

const Index = () => {
  return (
    <PrimaryLayout>
      <h1 className='text-2xl mb-3'>Projects</h1>
      <p className='mb-1'>
        Sorry, I'm still working on putting this page together.
      </p>
      <p>
        For now, if you'd like to see some of my code, check out my{' '}
        <Link
          href='https://github.com/reinerb'
          className='text-sky-700 dark:text-sky-300 visited:text-sky-600 dark:visited:text-sky-400 underline hover:no-underline'
        >
          GitHub
        </Link>
        .
      </p>
    </PrimaryLayout>
  );
};

export default Index;
