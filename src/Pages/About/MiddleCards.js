import React from 'react';
import MiddleCard from './MiddleCard';

const CardsTemplateData = [
    {
        icon: 'img/furniture.svg',
        title: 'Furniture design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
    },
    {
        icon: 'img/furniture.svg',
        title: 'Furniture design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
    },
    {
        icon: 'img/furniture.svg',
        title: 'Furniture design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
    },
    {
        icon: 'img/furniture.svg',
        title: 'Furniture design',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
    }
]

const cards = CardsTemplateData.map((CardTemplateData, key)=>{
  return <MiddleCard CardTemplateData={CardTemplateData} key={key} />
})

const BottomCards = () => {
  return (
    <section id='aboutMiddleCard'>
      <div className="container">
        {cards}
      </div>
    </section>
  );
}

export default BottomCards;
