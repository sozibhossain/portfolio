import React from 'react'
import CTA from './CTA';
import ME from '../../assets/Sozib.png';
import HeaderSocials from './headerSocials';
import './header.css';


const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>MD. Sozib Hossain</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
            <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default header
