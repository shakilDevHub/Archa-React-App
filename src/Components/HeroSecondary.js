import React from 'react';
import '../Styles/HeroSecondary.css'

const HeroSecondary = (props) => {
  const {bannerBg, bannerTitle} = props; 
  const bannerBgStyle = {
    backgroundImage: `url(${bannerBg})`
  }
  return (
    <div id='banner' style={bannerBgStyle}>
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default HeroSecondary;
