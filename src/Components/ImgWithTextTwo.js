import React from 'react';
import ImgWithTextDesc from './ImgWithTextDesc';
import '../Styles/ImgWithTextTwo.css';

const ImgWithTextTwo = ({descriptionDetails}) => {
    return (
        <>
            <ImgWithTextDesc descriptionDetails={descriptionDetails} />
        </>
    );
}

export default ImgWithTextTwo;
