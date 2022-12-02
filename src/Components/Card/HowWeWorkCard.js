import React from 'react';

const HowWeWorkCard = ({HowWeWorkCardData}) => {
  const {number, title, description} = HowWeWorkCardData;
  return (
    <div className='card'>
      <h3>{number}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default HowWeWorkCard;
