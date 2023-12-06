import React from 'react';

const Header = () => {
  return (
    <main className='container mx-auto py-10 px-4 flex flex-col items-center justify-center h-screen'>
      <h1 className='text-8xl font-bold mb-8 text-white'>
        kino.dev
      </h1>
      {/* don't ship it with this part in it, idiot */}
      <p className='text-4xl text-gray-300'>
        ayyo hire this mf
      </p>
    </main>
  );
};

export default Header;
