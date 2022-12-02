import React from 'react';
import HeroCard from './Card/HeroCard';

import '../Styles/HeroCardSec.css'

const cardsData = [
  {
    icon: 'img/indoor.svg',
    title: 'Indoor',
    description: 'Lorem Ipsum is simply text of the printing and. '
  },
  {
    icon: 'img/residential.svg',
    title: 'Office',
    description: 'Lorem Ipsum is simply text of the printing and. '
  },
  {
    icon: 'img/indoor.svg',
    title: 'Ecommercial',
    description: 'Lorem Ipsum is simply text of the printing and. '
  },
  {
    icon: 'img/residential.svg',
    title: 'Residential',
    description: 'Lorem Ipsum is simply text of the printing and. '
  }
]
let card = cardsData.map((cardData, key)=>{
  const {icon, title, description} = cardData;
  return <HeroCard key={key} icon={icon} title={title} description={description} />
})

const HeroCardSec = () => {
  return (
    <div id='heroBox'>
      <div className="container">
        <div className="wrapper">
          {card}
        </div>
      </div>
    </div>
  );
}

export default HeroCardSec;
