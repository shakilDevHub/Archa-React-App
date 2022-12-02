import React from 'react';
import ServicesSec from '../Components/ServicesSec';
import HeroSecondary from '../Components/HeroSecondary';
import ClientsSec from '../Sections/ClientsSec';
import ImgWithTextOne from '../Components/ImgWithTextOne';

const bgColorOne = {
  background: `{var(--secondaryColor)}`
}

const Services = () => {
  return (
    <>
      <HeroSecondary bannerBg='img/service-banner.jpg' bannerTitle='Our Services' />
      <section className='serviceSec'>
        <div className="container">
          <ServicesSec />
        </div>
      </section>
      <ClientsSec style={bgColorOne} />
      <ImgWithTextOne imgLink='img/gallery5.jpg' title='This is the lorem ipsum main' description='nteractively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets. Globally incubate standards compliant channels before.' buttonLink='/' buttonText='Read More' />
    </>
  );
}

export default Services;
