'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ThemeToggle } from '@/app/utils/ThemeToggle';

const Navbar: React.FC = () => {
  let pathname = usePathname() || '/';
  const navItems = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/projects',
      name: 'Projects',
    },
    {
      path: '/resume',
      name: 'Resume',
    },
    {
      path: '/contact',
      name: 'Contact',
    },
  ];
  // const { scrollY } = useScroll();
  // const controls = useAnimation();

  // useEffect(() => {
  //   controls.start({
  //     opacity: scrollY > 420 ? 1 : 0,
  //     y: 0,
  //   });
  // }, [scrollY, controls]);

  return (
    <motion.nav
      className='fixed top-0 left-0 w-full p-4 flex justify-end items-center'
      // animate={controls}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
    >
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex gap-8 relative justify-center w-full'>
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-4 py-2 text-sm lg:text-base relative no-underline duration-300 ease-in`}
                href={item.path}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <div className='ml-auto'>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
