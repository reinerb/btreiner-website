import ContactForm from '@/components/ContactForm';
import PrimaryLayout from '@/components/PrimaryLayout';
import React from 'react';

const Contact = () => {
  return (
    <PrimaryLayout>
      <h1 className='text-4xl mb-4'>Contact Me</h1>
      <ContactForm />
    </PrimaryLayout>
  );
};

export default Contact;
