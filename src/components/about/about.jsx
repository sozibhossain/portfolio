import React from 'react';
import './about.css';
import ME from '../../assets/about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* Left Side - Image */}
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Sozib Hossain - MERN Stack Developer" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>21+ Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>28+ Completed</small>
            </article>
          </div>

          <div className="about_text">
            <p>
              I am a <strong>Junior MERN Stack Developer</strong> with hands-on experience in building modern, scalable, and user-friendly web and mobile applications. 
              I have worked as a Front-end Web & Mobile App Developer at 
              <a href="https://bdcalling.com/" target="_blank" rel="noopener noreferrer"> BDCalling</a> 
              for 1 year and as a Web Mentor at 
              <a href="https://www.coderstrust.net/" target="_blank" rel="noopener noreferrer"> CodersTrust Bangladesh</a>, 
              where I guided students in mastering web development.
            </p>

            <p>
              My expertise includes <span className="highlight">React.js, Next.js, TanStack Query, Node.js, Express.js, MongoDB, Redux, Stripe, PayPal integration, Socket.io, React Native</span>, and modern UI libraries such as <span className="highlight">ShadCN, Tailwind CSS, and Bootstrap</span>.
            </p>

            <p>
              Over the course of my journey, I have successfully completed <strong>24+ projects</strong>, ranging from interactive websites to complex full-stack applications.
            </p>

            <p>
              I am passionate about <em>problem-solving</em>, crafting intuitive <em>UI/UX designs</em>, and optimizing application performance — always striving to create impactful digital solutions.
            </p>
          </div>

          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
