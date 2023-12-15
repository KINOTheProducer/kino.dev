import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
}) => {
  return (
    <div className='transition-opacity duration-500 ease-in-out'>
        {children}
    </div>
  );
};

export default PageContainer;
