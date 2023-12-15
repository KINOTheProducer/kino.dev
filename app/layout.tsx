import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '../components/theme-provider';

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
      <body className={cn('container', poppins.className)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
