// 'use client';

// import React, {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from 'react';

// interface ScrollContextProps {
//   scrollY: number;
// }

// interface ScrollProviderProps {
//   children: ReactNode;
// }

// const ScrollContext = createContext<
//   ScrollContextProps | undefined
// >(undefined);

// export const ScrollProvider: React.FC<
//   ScrollProviderProps
// > = ({ children }) => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const value = { scrollY };

//   return (
//     console.log(scrollY),
//     (
//       <ScrollContext.Provider value={value}>
//         {children}
//       </ScrollContext.Provider>
//     )
//   );
// };

// export const useScroll = (): ScrollContextProps => {
//   const context = useContext(ScrollContext);
//   if (!context) {
//     throw new Error(
//       'useScroll must be used within a ScrollProvider',
//     );
//   }
//   return context;
// };
