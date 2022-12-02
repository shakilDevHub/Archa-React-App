import React from 'react';
import HeroSecondary from '../../Components/HeroSecondary';
import TopCards from './TopCards';
import MiddleCards from './MiddleCards';
import ImgWithTextOne from '../../Components/ImgWithTextOne';
import HowHeWork from '../../Sections/HowWeWork';
import '../../Styles/About.css';


const About = () => {
  return (
    <>
      <HeroSecondary bannerBg='img/about-us-banner.jpg' bannerTitle='About Us' />
      <TopCards />
      <MiddleCards />
      <ImgWithTextOne imgLink='img/gallery5.jpg' title='This is the lorem ipsum main' description='nteractively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before.' buttonLink='/' buttonText='Read More' />
      <HowHeWork />
    </>
  );
}

export default About;
