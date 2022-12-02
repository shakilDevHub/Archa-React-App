import React from 'react';

const ServiceCard = (props) => {
  const {icon, title, para } = props;
  return (
    <div className='serviceCard'>
      <img src={icon} alt={title} />
      <h4>{title}</h4>
      <p>{para}</p>
    </div>
  );
}

export default ServiceCard;
