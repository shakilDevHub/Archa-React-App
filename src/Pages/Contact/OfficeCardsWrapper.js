import React from 'react';
import OfficesCard from './OfficesCard';

const officeCardData = [
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  },
  {
    icon: 'img/furniture.svg',
    title: 'Address',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
  }
]

const OfficeCardsWrapper = () => {
  return (
    <div className='officeCardsWrapper'>
      {
        officeCardData.map((officeCardData, key)=>{
          const {icon, title, description} = officeCardData;
          return <OfficesCard icon={icon} title={title} description={description} key={key} />
        })
      }
    </div>
  );
}

export default OfficeCardsWrapper;
