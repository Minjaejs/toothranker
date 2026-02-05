import React from 'react';
import Hero from './Hero';
import Pain from './Pain';
import Proof from './Proof';
import Services from './Services';
import WhyUs from './WhyUs';
import Audit from './Audit';
import ClosingCTA from './ClosingCTA';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Pain />
      <Proof />
      <Services />
      <WhyUs />
      <Audit />
      <ClosingCTA />
    </>
  );
};

export default HomePage;