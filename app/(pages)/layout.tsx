import Navbar from '@/components/Navbar';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='container'>{children}</div>;
}
