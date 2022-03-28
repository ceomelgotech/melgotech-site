import React from 'react';
import About from '../Components/About';
import Hero from '../Components/Hero';
import Testimonials from '../Components/Testimonials';
import WhyUs from '../Components/WhyUs';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <About />
      <Testimonials />
    </>
  )
}

export default Home;