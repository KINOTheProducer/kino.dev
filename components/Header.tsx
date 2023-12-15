'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import PageContainer from '../app/PageContainer';

export default function Home() {
  // const { scrollY } = useScroll();
  // const controls = useAnimation();

  // const stopScrollPosition = 420;

  // const xOffset =
  //   scrollY <= stopScrollPosition
  //     ? 0
  //     : Math.min(0, scrollY - stopScrollPosition);

  // React.useEffect(() => {
  //   controls.start({
  //     fontSize: scrollY > 100 ? '2rem' : '8rem',
  //     y: 0,
  //     x: xOffset,
  //   });
  // }, [scrollY, controls, xOffset]);

  return (
    <PageContainer>
      <div className='container mx-auto py-10 px-4 flex flex-col items-center justify-center h-screen'>
        <motion.h1
          className='font-bold mb-5 gradient z-20 text-9xl'
          // animate={controls}
        >
          kino.dev
        </motion.h1>
        <motion.p className='text-4xl text-center'>
          Internet Website Maker Man&trade;
        </motion.p>
      </div>
    </PageContainer>
  );
}
