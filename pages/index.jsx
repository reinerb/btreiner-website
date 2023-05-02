import PrimaryLayout from '@/components/PrimaryLayout';
import Link from 'next/link';

const Home = () => {
  return (
    <PrimaryLayout>
      <h1 className='mb-3 text-2xl'>Hi! I'm Ben Reiner.</h1>
      <p className='mb-1'>I'm a web developer and a passionate learner.</p>
      <p className='mb-1'>
        If you'd like to learn more about me,{' '}
        <Link href='/about'>click here</Link>!
      </p>
      <p className='mb-1'>
        If you'd like to get in touch, you can submit a message through{' '}
        <Link href='/contact'>this contact form</Link>.
      </p>
      <p>
        Please excuse the appearance of my site while it's under construction.
        Check back later to see what improvements I've made to this site.
      </p>
    </PrimaryLayout>
  );
};

export default Home;
