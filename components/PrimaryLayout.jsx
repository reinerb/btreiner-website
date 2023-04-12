import React from 'react';
import Header from './Header';

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='container mx-auto my-4 px-6'>{children}</main>
    </>
  );
};

export default PrimaryLayout;
