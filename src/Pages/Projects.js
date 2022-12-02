import React from 'react';
import HeroSecondary from '../Components/HeroSecondary';
import Gallery from '../Components/Gallery';
import ImgWithTextTwo from '../Components/ImgWithTextTwo';

const discussionData = {
  imgLink: 'img/gallery6.jpg',
  imgFit: 'cover',
  heading: 'Discussion',
  descriptions: [
    'Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id.'
  ],
  listItems: [
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.',
    'Lorem ipsum dolor sit amet, consectetur.'
  ],
  buttonText: 'Read More',
  buttonLink: '/',
  imgPosition: 'left',
  imgAnim: false
}

const Projects = () => {
  return (
    <>
      <HeroSecondary bannerBg='img/service-banner.jpg' bannerTitle='Our Services' />
      <section className='container'>
        <Gallery />
      </section>
      <ImgWithTextTwo descriptionDetails={discussionData}/>
    </>
  );
}

export default Projects;
