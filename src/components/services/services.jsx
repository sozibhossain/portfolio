import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML, CSS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JavaScript, React JS, Next JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>TypeScript, Redux</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>API Integration</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>CSS Framework: Taillwind, MaterialUI, Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Git, GitHub, Adobe Illustrator/Photoshop, Jira.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className="service">
          <div className="service_head">
            <h3>Fullstack Development</h3>
          </div>
          <ul className='service_list'>
          <li>
              <BiCheck className='service_list-icon'/>
              <p>HTML, CSS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>JavaScript, React JS, Next JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>TypeScript, Redux</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>API Integration</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Node JS, Express JS</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>MongoBD, Mongoose, Firebase</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>CSS Framework: Taillwind, MaterialUI, Bootstrap</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Git, GitHub, Adobe Illustrator/Photoshop, Jira.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}
        <article className="service">
          <div className="service_head">
            <h3>WordPress Web Application</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>WordPress Theme Customization</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>WooCommerce</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Elementor</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>E-commerce Website Development</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Services
