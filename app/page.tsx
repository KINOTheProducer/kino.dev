import Head from 'next/head';
import Header from './components/Header';

export default function Home() {
  return (
    <div className='bg-secondary min-h-screen'>
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
