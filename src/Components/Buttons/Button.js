import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Button.css'

const Button = (props) => {
  return (
    <>
      <Link to={props.link} className='customBtn'>{props.content}</Link>
    </>
  );
}

export default Button;
