// import React from 'react'
// import Shop from '../shop/page'

// export default function About() {
//   return (
//     <>
//   <Shop />
//     </>
//   )
// }
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Shop component with SSR disabled
const Shop = dynamic(() => import('../shop/page'), { ssr: false });

const About: React.FC = () => {
  return (
    <>
      <Shop />
    </>
  );
}

export default About;
