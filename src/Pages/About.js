import React from 'react';
import Breadcrumb from '../Components/Breadcrumb';
import AboutSection from '../Components/AboutSection';
import WhyChoose from '../Components/WhyChoose';
import Achievement from '../Components/Achievement'
import Team from '../Components/Team';

const About = () => {
  return (
    <>
    <Breadcrumb
      title="About Us"
      name="About Us"
    />
    <AboutSection />
    <WhyChoose />
    <Achievement />
    <Team />
    </>
  )
}

export default About;