import React from 'react';
import OfficeCardsWrapper from './OfficeCardsWrapper';
import '../../Styles/ContactStyles/ContactRight.css';
import SecondaryHeading from '../../Components/SecondaryHeading' ;

const ContactRight = () => {
  return (
    <div className='contactOffice'>
      <SecondaryHeading content='Offices' />
      <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri</p>
      <OfficeCardsWrapper />
    </div>
  );
}

export default ContactRight;
