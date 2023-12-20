export interface cardData {
  title: string;
  description: string;
  image: string;
  link: string;
  stack: string[];
  type: ProjectType[];
}
[];

export type ProjectType =
  | 'fullstack'
  | 'frontend'
  | 'backend';

export const CardContentData: cardData[] = [
  {
    title: 'Frontend',
    description: 'League of Legends Match History',
    image: '/projects/p1.png',
    link: 'https://matchify-topaz.vercel.app/',
    stack: ['Next.JS', 'Javascript', 'Tailwind'],
    type: ['frontend'],
  },
  {
    title: 'Fullstack',
    description: 'League of Legends Match History',
    image: '/projects/p1.png',
    link: 'https://matchify-topaz.vercel.app/',
    stack: ['Next.JS', 'Javascript', 'Tailwind'],
    type: ['fullstack', 'frontend', 'backend'],
  },
  {
    title: 'Backend',
    description: 'League of Legends Match History',
    image: '/projects/p1.png',
    link: 'https://matchify-topaz.vercel.app/',
    stack: ['Next.JS', 'Javascript', 'Tailwind'],
    type: ['backend'],
  },
  {
    title: 'Fullstack',
    description: 'League of Legends Match History',
    image: '/projects/p1.png',
    link: 'https://matchify-topaz.vercel.app/',
    stack: ['Next.JS', 'Javascript', 'Tailwind'],
    type: ['fullstack', 'frontend', 'backend'],
  },
];
