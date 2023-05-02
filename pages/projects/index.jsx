import PrimaryLayout from '@/components/PrimaryLayout';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Index = () => {
  return (
    <PrimaryLayout>
      <h1 className='mb-3 text-2xl'>Projects</h1>
      <p className='mb-1'>
        Sorry, I'm still working on putting this page together.
      </p>
      <p>
        For now, if you'd like to see some of my code, check out my{' '}
        <a href='https://github.com/reinerb'>GitHub</a>.
      </p>
    </PrimaryLayout>
  );
};

export default Index;
