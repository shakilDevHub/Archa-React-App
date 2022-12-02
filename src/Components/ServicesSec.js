import React from 'react';
import ServiceCard from './Card/ServiceCard';

import '../Styles/ServicesSec.css';
const serviceData = [
  {
    icon: 'img/analysis.svg',
    title: 'Project Analysis 01',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/design.svg',
    title: 'Project Analysis 02',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/building.svg',
    title: 'Project Analysis 03',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/furniture.svg',
    title: 'Project Analysis 04',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/office-design.svg',
    title: 'Project Analysis 05',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/consultancy.svg',
    title: 'Project Analysis 06',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/advising.svg',
    title: 'Project Analysis 07',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  },
  {
    icon: 'img/remodeling.svg',
    title: 'Project Analysis 08',
    para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Nulla luctus dolor.'
  }
]

const ServicesCompo = serviceData.map((service, key)=>{
  const {icon, title, para} = service;
  return <ServiceCard icon={icon} title={title} para={para} key={key} />
})

const ServicesSec = () => {
  return (
    <div className='serviceCardWrapper'>
      {ServicesCompo}
    </div>
  );
}

export default ServicesSec;
