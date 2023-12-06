import Head from 'next/head';
import Header from './components/Header';
import { ScrollProvider } from './utils/ScrollContext';

export default function Home() {
  return (
    <div className='bg-secondary min-h-screen h-full'>
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
      <ScrollProvider>
        <Header />
        <Header />
      </ScrollProvider>
    </div>
  );
}
