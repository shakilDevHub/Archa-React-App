import React from 'react';

const HeroCard = (props) => {
  const {icon, title, description} = props;
  return (
    <div className='card'>
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>       
    </div>
  );
}

export default HeroCard;
