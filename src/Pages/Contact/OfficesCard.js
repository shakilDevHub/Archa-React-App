import React from 'react';

const OfficesCard = (props) => {
  const {icon, title, description} = props;
  return (
    <div className='card'>
      <div className="left">
        <img src={icon} alt={title} />
      </div>
      <div className="right">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OfficesCard;
