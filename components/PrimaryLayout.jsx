import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrimaryLayout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-rows-site-layout'>
      <Header />
      <main className='container mx-auto my-4 px-6'>{children}</main>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
