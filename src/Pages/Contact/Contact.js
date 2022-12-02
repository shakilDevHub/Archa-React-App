import React from 'react';
import NavBar from '../../Components/NavBar';
import HeroSecondary from '../../Components/HeroSecondary';
import ContactTop from './ContactTop';
import ContactMap from './ContactMap';

import '../../Styles/ContactStyles/Contact.css'


const Contact = () => {
  return (
    <>
      <HeroSecondary bannerBg='img/contact-banner.jpg' bannerTitle='Contact Us' />
      <ContactTop />
      <ContactMap />
    </>
  );
}

export default Contact;
