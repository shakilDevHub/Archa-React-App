import React from 'react';

const BottomCard = ({CardTemplateData}) => {
    const {icon, title, description} = CardTemplateData;
    return (
        <div class="card">
            <img src={icon} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default BottomCard;
