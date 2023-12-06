'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScroll } from '../utils/ScrollContext';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      fontSize: scrollY > 100 ? '2rem' : '8rem',
    });
  }, [scrollY, controls]);

  return (
    <div className='container mx-auto py-10 px-4 flex flex-col items-center justify-center h-screen'>
      <motion.h1
        className='font-bold mb-5 gradient'
        animate={controls}
      >
        kino.dev
      </motion.h1>
      <motion.p className='text-4xl text-gray-300'>
        shohei ohtani please sign with the toronto blue jays
      </motion.p>
    </div>
  );
};

export default Header;
