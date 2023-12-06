import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'KINO Dev Portfolio',
  description:
    'A developer portfolio for KINO, built with Next.js, TypeScript and Tailwind.',
  keywords: [
    'kino',
    'dev',
    'portfolio',
    'nextjs',
    'typescript',
    'tailwind',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
