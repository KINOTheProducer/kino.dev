import Head from 'next/head';
import Header from './(pages)/header/Header';
import Navbar from '../components/Navbar';
import About from './(pages)/about/page';

export default function Home() {
  return (
    <div className='min-h-screen h-full'>
      <Head>
        <title>KINO Dev Portfolio</title>
        <meta
          name='description'
          content='A developer portfolio for KINO, built with Next.js, TypeScript and Tailwind.'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
    </div>
  );
}
