import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialIcon = {
    display: 'block',
    fontSize: '2rem',
}

const Footer = () => {
  return (
    <footer>
        <section className="top">
            <div className="container">
                <div className="col">
                    <Link to='/' className="logo2"><img src="img/logo2.svg" alt=""/></Link>
                    <p>One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                    <ul className="social">
                        <li><Link to='/'><FaFacebookF style={socialIcon} /></Link></li>
                        <li><Link to='/'><FaInstagram style={socialIcon} /></Link></li>
                        <li><Link to='/'><FaTwitter style={socialIcon} /></Link></li>
                        <li><Link to='/'><FaYoutube style={socialIcon} /></Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Other Pages</h3>
                    <ul className="footerMenu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/service'>Services</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Quick Links</h3>
                    <ul className="footerMenu">
                        <li><Link to='/'>Privacy Policy</Link></li>
                        <li><Link to='/'>Term Of Service</Link></li>
                        <li><Link to='/'>Disclaimer</Link></li>
                        <li><Link to='/'>Credits</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Contact Us</h3>
                    <ul className="footerMenu">
                        <li><Link to="tel:+81 2345 1234">(+75) 81 2345 1234</Link></li>
                        <li><Link to="mailto:Contact@domain.com">Contact@domain.com</Link></li>
                        <li><span>Ubud No.88, New York</span></li>
                        <li><span>USA, Renon, New York</span></li>
                    </ul>
                </div>
            </div>
        </section>
        <div className="bottom">
            <div className="container">
                <span>Interior Design Template Kit by Meemcode</span>
                <span>Copyright ©b 2021. All rights reserved.
                </span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
