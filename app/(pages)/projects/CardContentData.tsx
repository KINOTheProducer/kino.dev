import p1 from '@/components/p1.png';

export interface cardData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  stack: string[];
  type: string;
}
[];

export const CardContentData: cardData[] = [
  {
    id: 1,
    title: 'Matchify',
    description: 'League of Legends Match History',
    image: '/projects/p1.png',
    link: 'https://matchify-topaz.vercel.app/',
    stack: ['Next.JS', 'Javascript', 'Tailwind'],
    type: 'fullstack',
  },
];
