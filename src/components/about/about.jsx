import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt=''/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>28+ Completed</small>
            </article>
          </div>

          <p>I am a Junior MERN Stack Developer. I am working, as a Web Mentor at ‍<a target='_blank' href="https://coderstrustbd.com/">CodersTrust Bangladesh</a> and I am working on Data Structure Algorithm problem-solving <a target='_blank' href="https://leetcode.com/sozibhossain/">LeetCode</a> along with the job. I have completed 6 projects on <a target='_blank' href="https://www.fiverr.com/sozib3862">Fiverr</a> marketplaces 4 outside of marketplaces, and 27 small projects personally.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
