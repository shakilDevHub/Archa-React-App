import React from 'react';
import Button from './Buttons/Button';

import '../Styles/MainHero.css';

const MainHero = () => {
  return (
    <section id='hero'>
      <div className="content text-center">
        <h1>INTERIOR DESIGNS</h1>
        <p>Dolores et ea rebum vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
        <Button link='/' content='Read More' />
      </div>
    </section>
  );
}

export default MainHero;
