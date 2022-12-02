import React from 'react';
import Button from './Buttons/Button';

import '../Styles/ImgWithTextOne.css';

const ImgWithTextOne = (props) => {
    const {imgLink, title, description, buttonLink, buttonText} = props;
    return (
        <section id='imgWithTextOne'>
        <div className="container">
                <div className="left">
                    <img src={imgLink} alt={title} />
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Button link={buttonLink} content={buttonText} />
                </div>
            </div>
        </section>
    );
}

export default ImgWithTextOne;
