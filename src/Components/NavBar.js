import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../Styles/NavBar.css'
import {FaBuffer} from 'react-icons/fa';

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const navToggleBtn = ()=>{
    setNavToggle(!navToggle);
  }

  return (
    <>
      <nav>
        <Link to='/' className='logo'>
          <img src="/img/logo.svg" alt="" />
        </Link>
        <span onClick={navToggleBtn} >
          <FaBuffer  className={(navToggle)? 'active navToggle': 'navToggle'} />
        </span>
        <ul className={(navToggle)? 'active': null}>
          <li style={{'--i': '1'}}><NavLink to='/' className='navLink'>Home</NavLink></li>
          <li style={{'--i': '2'}}><NavLink to='/about' className='navLink'>About Us</NavLink></li>
          <li style={{'--i': '3'}}><NavLink to='/service' className='navLink'>Services</NavLink></li>
          <li style={{'--i': '4'}}><NavLink to='/projects' className='navLink'>Projects</NavLink></li>
          <li style={{'--i': '5'}}><NavLink to='/price' className='navLink'>Price</NavLink></li>
          <li style={{'--i': '6'}}><NavLink to='/blog' className='navLink'>Blogs</NavLink></li>
          <li style={{'--i': '7'}}><NavLink to='/contact' className='navLink'>Contact</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
