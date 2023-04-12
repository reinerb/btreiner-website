import Image from 'next/image';
import { Inter } from 'next/font/google';
import PrimaryLayout from '@/components/PrimaryLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <PrimaryLayout>
      <h1>Hello world!</h1>
    </PrimaryLayout>
  );
}
