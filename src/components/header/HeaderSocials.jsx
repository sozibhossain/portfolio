import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';
import './header.css';

const headerSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/md-sozib-hossain-594213214/' target='_blank'><FaLinkedin/></a>
      <a href='https://github.com/sozibhossain?tab=repositories' target='_blank'><FaGithub/></a>
      <a href='https://www.fiverr.com/sozib3862' target='_blank'><TbBrandFiverr/></a>
    </div>
  )
}

export default headerSocials
