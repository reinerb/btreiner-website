import PrimaryLayout from '@/components/PrimaryLayout';
import Link from 'next/link';

const Home = () => {
  const linkStyles =
    'text-sky-700 dark:text-sky-300 visited:text-sky-600 dark:visited:text-sky-400 underline hover:no-underline';

  return (
    <PrimaryLayout>
      <h1 className='text-2xl mb-3'>Hi! I'm Ben Reiner.</h1>
      <p className='mb-1'>I'm a web developer and a passionate learner.</p>
      <p className='mb-1'>
        If you'd like to learn more about me,{' '}
        <Link
          href='/about'
          className={linkStyles}
        >
          click here
        </Link>
        !
      </p>
      <p className='mb-1'>
        If you'd like to get in touch, you can submit a message through{' '}
        <Link
          href='/contact'
          className={linkStyles}
        >
          this contact form
        </Link>
        .
      </p>
      <p>
        Please excuse the appearance of my site while it's under construction.
        Check back later to see what improvements I've made to this site.
      </p>
    </PrimaryLayout>
  );
};

export default Home;
