import React from 'react';

const SecondaryHeading = (props) => {
    const {content} = props;
    return (
        <h2 className="secondaryHeading">
            <span>{content}</span>
        </h2>
    );
}

export default SecondaryHeading;
