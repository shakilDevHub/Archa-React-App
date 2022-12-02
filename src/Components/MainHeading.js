import React from 'react';
import '../Styles/Heading.css'

const MainHeading = (props) => {
  const {content, bgText} = props;
  return (
    <h2 className='mainHeading'>
      <span className='headingContent'>{content}</span>
      <span className='bgText'>{bgText}</span>
    </h2>
  );
}

export default MainHeading;
