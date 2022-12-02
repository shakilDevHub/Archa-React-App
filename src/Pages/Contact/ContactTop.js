import React from 'react';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const ContactTop = () => {
  return (
    <section id='contactTop'>
      <div className="container">
        <ContactLeft />
        <ContactRight />
      </div>
    </section>
  );
}

export default ContactTop;
