import React from 'react';

const ClientCard = (props) => {
  const {num, description} = props;
  return (
    <div className='card'>
      <h3>{num}+</h3>
      <span>{description}</span>
    </div>
  );
}

export default ClientCard;
