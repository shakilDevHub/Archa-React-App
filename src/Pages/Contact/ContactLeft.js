import React from 'react';
import SecondaryHeading from '../../Components/SecondaryHeading' ;
import ContactForm from './ContactForm';

import '../../Styles/ContactStyles/ContactLeft.css';

const ContactLeft = () => {
  return (
    <div className='contactForm'>
      <SecondaryHeading content='Write us' />
      <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri</p>
      <ContactForm />
    </div>
  );
}

export default ContactLeft;
