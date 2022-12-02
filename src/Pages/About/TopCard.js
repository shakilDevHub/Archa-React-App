import React from 'react';

const TopCard = ({aboutCardData}) => {
  const {imgLink, title, description} = aboutCardData;
  return (
    <div className="card">
      <div className="top">
          <img src={imgLink} alt={title} />
      </div>
      <div className="bottom">
          <h3>{title}</h3>
          <p>{description}</p>
      </div>
    </div>
  );
}

export default TopCard;
