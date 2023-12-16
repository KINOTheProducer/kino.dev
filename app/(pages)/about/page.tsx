import React from 'react';
import AboutImage from '@/components/img/about.png';
import Image from 'next/image';

const About = () => {
  return (
    <div className='container-page'>
      <div className='flex flex-row gap-6 items-center'>
        <Image
          src={AboutImage}
          width={300}
          alt='About Avatar'
          className='rounded-full'
        />
        <div className=''>
          <h1 className='text-6xl py-3 font-bold text-left flex'>
            about me
          </h1>
          <p className='text-left'>
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy.
            <br /> <br />
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy.
            <br /> <br />
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy.
            <br /> <br />
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy. Lorem Ipsussy.
            Lorem Ipsussy. Lorem Ipsussy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
