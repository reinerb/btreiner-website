import PrimaryLayout from '@/components/PrimaryLayout';
import Image from 'next/image';
import React from 'react';
import benAndLibby from '../assets/images/ben-and-libby.jpg';

const About = () => {
  return (
    <PrimaryLayout>
      <h1 className='text-4xl'>About Me</h1>
      <div className='grid grid-cols-4 gap-8 items-center mt-8'>
        <Image
          src={benAndLibby}
          alt='Picture of Ben'
        />
        <section className='col-span-3'>
          <h2 className='text-2xl'>My Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa,
            sed magnam voluptatum ratione nam. Tempore expedita sapiente eum
            quo!
          </p>
          <p>
            Magni aut quae, delectus fugit voluptas expedita magnam quibusdam
            quia nesciunt cum laborum obcaecati, qui cupiditate consectetur
            recusandae. Est, neque!
          </p>
          <h2 className='text-2xl'>My interests</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perferendis fugit laudantium, temporibus natus illo? Sit
            necessitatibus ducimus voluptas nam.
          </p>
          <p>
            Explicabo voluptates, reiciendis ad, nam nesciunt quos repellendus
            suscipit voluptate aspernatur ut dolore earum eligendi impedit neque
            odio accusantium incidunt.
          </p>
        </section>
      </div>
    </PrimaryLayout>
  );
};

export default About;
