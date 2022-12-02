import React from 'react';
import TopCard from './TopCard';

const aboutCardsData = [
  {
    imgLink: 'img/gallery3.jpg',
    title: 'Places to get lost',
    description: 'Alienum phaedrum torquatos nec eu, expetendis in mei. Meieuripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.',
  },
  {
    imgLink: 'img/gallery6.jpg',
    title: 'Perfect Design',
    description: 'Alienum phaedrum torquatos nec eu, expetendis in mei. Meieuripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.',
  },
  {
    imgLink: 'img/gallery4.jpg',
    title: 'Happy Clients',
    description: 'Alienum phaedrum torquatos nec eu, expetendis in mei. Meieuripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.',
  }
]

const aboutCardsWrapper = aboutCardsData.map((aboutCardData, key)=>{
  return (
    <TopCard aboutCardData={aboutCardData} key={key} />
  )
})

const TopCards = () => {
  return (
    <section id='aboutTopCard'>
      <div className='container'>
        {aboutCardsWrapper}
      </div>
    </section>
  );
}

export default TopCards;
