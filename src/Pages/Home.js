import React from 'react';
import MainHero from '../Components/MainHero';
import HowWeWork from '../Sections/HowWeWork';
import CompanyLogo from '../Sections/CompanyLogo';
import Gallery from '../Components/Gallery';
import HeroCardSec from '../Components/HeroCardSec';
import ClientsSec from '../Sections/ClientsSec';
import ServicesSec from '../Components/ServicesSec';
import MainHeading from '../Components/MainHeading';
import LatestNewsSec from '../Components/LatestNewsSec';
import ImgWithTextTwo from '../Components/ImgWithTextTwo';
import TestimonialSec from '../Components/TestimonialSec';


const aboutUsData = {
  imgLink: 'img/about-us.png',
  imgFit: 'contain',
  heading: 'About us',
  descriptions: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus dolor in erat volutpat, et faucibus nibh Duis fringilla risus ut est blandit dapibus.'
  ],
  listItems: [
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.'
  ],
  buttonText: 'Read More',
  buttonLink: '/',
  imgPosition: 'right',
  imgAnim: true
}

const talksData = {
  imgLink: 'img/interior design.png',
  imgFit: 'cover',
  heading: "Let's talk interior design",
  descriptions: [
    'nteractively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before.',
    'Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic.'
  ],
  listItems: [],
  buttonText: 'Read More',
  buttonLink: '/',
  imgPosition: 'left',
  imgAnim: false
}


const Home = () => {
  return (
    <>
      <MainHero />
      <HeroCardSec />
      <ImgWithTextTwo descriptionDetails={aboutUsData}/>
      <section className='serviceSec'>
        <div className="container">
          <MainHeading content='Our services' bgText='Services' />
          <ServicesSec />
        </div>
      </section>
      <ImgWithTextTwo descriptionDetails={talksData}/>
      <Gallery />
      <HowWeWork />
      <CompanyLogo />
      <TestimonialSec />
      <ClientsSec />
      <LatestNewsSec />
    </>
  );
}

export default Home;
