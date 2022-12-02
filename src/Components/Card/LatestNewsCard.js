import React from 'react';
import {Link} from 'react-router-dom';

const LatestNewsCard = ({newsData}) => {
  console.log(newsData);
  const {newsCategory, newsLink, imgLink, title, description, buttonText} = newsData;
  return (
      <div className='card'>
          <div className='top'>
              <Link to='/' className='newsCategory'>{newsCategory}</Link>
              <Link to={newsLink} className="imgBox">
                  <img src={imgLink} alt={title} />
              </Link>
          </div>
          <div className='bottom'>
              <Link to={newsLink} >
                  <h3>{title}</h3>
              </Link>
              <p>{description}</p>
              <Link to={newsLink} className='btnBlog'>{buttonText}</Link>
          </div>
      </div>
  );
}

export default LatestNewsCard;
