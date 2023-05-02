import ContactForm from '@/components/ContactForm';
import PrimaryLayout from '@/components/PrimaryLayout';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const Contact = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <PrimaryLayout>
        <h1>Contact Me</h1>
        <ContactForm />
      </PrimaryLayout>
    </GoogleReCaptchaProvider>
  );
};

export default Contact;
