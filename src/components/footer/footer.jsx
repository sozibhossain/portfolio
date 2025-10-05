import React from 'react';
import { MdOutlineWork } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaFacebookF, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { TbBrandFiverr } from 'react-icons/tb';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SOZIB</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        
        {/* Dual Icon Hover */}
        <div className="dual-wrapper">
          {/* Default Icon */}
          <div className="default-icon">
            <MdOutlineWork />
          </div>

          {/* On Hover → Show Two Links */}
          <div className="dual-icons">
            <a href="https://www.coderstrust.net/" target="_blank" rel="noopener noreferrer">CT</a>
            <a href="https://bdcalling.com/" target="_blank" rel="noopener noreferrer">BDC</a>
          </div>
        </div>

        <a href='https://leetcode.com/sozibhossain/' target='_blank' rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://www.facebook.com/profile.php?id=100084242119486" target='_blank' rel="noopener noreferrer"><FaFacebookF/></a>
        <a href="https://www.instagram.com/mdsozibhossain9/" target='_blank' rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/sozibhossain69" target='_blank' rel="noopener noreferrer"><IoLogoTwitter/></a>
        <a href='https://www.linkedin.com/in/md-sozib-hossain-594213214/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/sozibhossain?tab=repositories' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href='https://www.fiverr.com/sozib3862' target='_blank' rel="noopener noreferrer"><TbBrandFiverr/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; SozibBD Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
