import React, { Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';

// Lazy loading components
const CoverVideo = React.lazy(() => import('../components/CoverVideo'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Logo = React.lazy(() => import('../components/Logo'));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id="home">
      <Suspense fallback={<></>}>
        <Logo />
        <Navbar />
        {!isMobile && <CoverVideo />}
      </Suspense>
    </Section>
  );
};

export default Home;
