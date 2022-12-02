import React from 'react';
import SecondaryHeading from './SecondaryHeading';
import Button from '../Components/Buttons/Button';


const ImgWithTextDesc = ({descriptionDetails}) => {
    const {imgLink, imgFit, heading, descriptions, listItems, buttonText, buttonLink, imgPosition, imgAnim} = descriptionDetails;

    const para = descriptions.map((description, key)=>{
        return <p key={key} >{description}</p>
    })

    const list = listItems.map((listItem, key)=>{
        return <li key={key} > <span></span> {listItem}</li>
    })

    const imgLeftPosi = '1/2';
    const imgRightPosi = '2/-1';
    const contentLeftPosi = '1/2';
    const contentRightPosi = '2/-1';
    const imgInLeft = (imgPosition=='left'? true: false);
    const imgDirectionStyle = {
        display: 'grid',
        gridRow: '1/-1',
        gridColumn: (imgInLeft? imgLeftPosi: imgRightPosi)
    }
    
    const imgContentStyle = {
        gridColumn: (imgInLeft? contentRightPosi: contentLeftPosi),
        gridRow: '1/-1',
        padding: (imgInLeft? '2.5rem': '0'),
        paddingLeft: (imgInLeft? '5rem': '0'),
        paddingRight: (imgInLeft? '0': '5rem'),
    }
    
    const imgAnimation = imgAnim? 'imgAnim 1s linear infinite alternate' : 'none';
    const imgAnimationStyle = {
        animation: imgAnimation,
        objectFit: imgFit
    }


    return (
        <section id='ImgWithTextTwo'>
            <div className="container">
                <div className="left" style={imgDirectionStyle}>
                    <img src={imgLink} alt={heading} style={imgAnimationStyle} />
                </div>
                <div className="right" style={imgContentStyle} >
                    <SecondaryHeading content={heading} />
                    {para}
                    <ul>{list}</ul>
                    <Button link={buttonLink} content={buttonText} />
                </div>
            </div>
        </section>
    );
}

export default ImgWithTextDesc;
