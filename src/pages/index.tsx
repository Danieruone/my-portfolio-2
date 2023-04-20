import { Inter } from 'next/font/google';

import TestComponent from '@/components/TestComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <TestComponent />;
}
