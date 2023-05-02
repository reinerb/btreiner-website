import PrimaryLayout from '@/components/PrimaryLayout';
import Image from 'next/image';
import React from 'react';
import benAndLibby from '../assets/images/ben-and-libby.jpg';
import Link from 'next/link';

const About = () => {
  return (
    <PrimaryLayout>
      <h1 className='font-heading text-4xl font-bold'>About Me</h1>
      <section className='mt-4 grid gap-8 lg:grid-cols-4'>
        <div className='lg:order-2 lg:col-span-3'>
          <section>
            <p>Hi! My name is Ben Reiner, and I am a freelance developer.</p>
          </section>
          <section className='mt-3'>
            <h2 className='font-heading text-2xl font-semibold'>My Work</h2>
            <p className='mt-2'>
              I currently work with Jody Kotkin at{' '}
              <a
                href='https://masscommunications.co/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Mass Communications Concepts, LLC
              </a>{' '}
              to build websites for local religious institutions and small
              businesses. Working with her, I have delivered sites for churches
              and temples, private tutors, engineers, and nonprofit
              organizations using WordPress. As a freelancer, I have learned to
              communicate effectively, manage projects in chaotic environments,
              and learn to use new technologies quickly.
            </p>
            <p className='mt-2'>
              During the pandemic, I spent several months working with my
              church, both as a volunteer and a paid contractor, to maintain and
              upgrade their web presence and assist with running remote worship
              services. I spent a great deal of time educating the less
              technical members of the congregation connecting to remote worship
              services and church groups, whether through livestreams on YouTube
              or interactive sessions on Zoom.
            </p>
            <p className='mt-2'>
              In my personal learning and work life, I have worked with a number
              of front-end technologies, including:
              <ul className='ml-8 list-disc'>
                <li>HTML5 and CSS3</li>
                <li>TailwindCSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>NextJS</li>
              </ul>
              I'm passionate about making responsive, accessible user
              experiences. You can see some of my personal projects over on the{' '}
              <Link href='/projects'>Projects page</Link>.
            </p>
            <p className='mt-2'>
              I graduated from Northeastern University in January 2016 with a
              Bachelors of Science in mathematics, cum laude.
            </p>
          </section>
          <section className='mt-3'>
            <h2 className='font-heading text-2xl font-semibold'>
              My interests
            </h2>
            <p className='mt-2'>
              I've been fascinated by tabletop games since I was a child. I have
              been playing <span className='italic'>Magic: the Gathering</span>{' '}
              since 2002, and have played at a tournament level since the early
              2010s. I have spent a great deal of time playing{' '}
              <span className='italic'>Dungeons & Dragons</span> and other pen
              and paper role playing games, both as a player and a game master.
              I frequently play games like{' '}
              <a
                href='https://boardgamegeek.com/boardgame/162886/spirit-island'
                target='_blank'
                rel='noopener noreferrer'
              >
                Spirit Island
              </a>{' '}
              and{' '}
              <a
                href='https://boardgamegeek.com/boardgame/266192/wingspan'
                target='_blank'
                rel='noopener noreferrer'
              >
                Wingspan
              </a>{' '}
              with my friends and my partner.
            </p>
            <p className='mt-2'>
              I love being outside, whether it's birding around the state,
              walking along the river, or just putting my feet in the ocean.
            </p>
          </section>
        </div>
        <Image
          src={benAndLibby}
          alt='Picture of Ben'
        />
      </section>
    </PrimaryLayout>
  );
};

export default About;
