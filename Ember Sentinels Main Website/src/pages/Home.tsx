import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Ember Sentinels | Wildfire Detection';
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CallToAction />
    </>
  );
};

export default Home;