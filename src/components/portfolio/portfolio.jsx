import React from 'react';
import portfolio1 from '../../assets/portfolio1.jpg';
import portfolio2 from '../../assets/portfolio2.jpg';
import portfolio3 from '../../assets/portfolio3.jpg';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.jpg';
import portfolio7 from '../../assets/portfolio7.png';
import portfolio8 from '../../assets/portfolio8.jpg';
import portfolio9 from '../../assets/portfolio9.png';
import './portfolio.css';

const data = [
    {
        "id": 1,
        "name": "tablefresh",
        "picture": portfolio9,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://test.evpitch.com/",
        "ClientLink": ""
    },
      {
        "id": 2,
        "name": "tablefresh",
        "picture": portfolio9,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://www.tablefresh.org/",
        "ClientLink": "https://github.com/sozibhossain/gmain-frontend"
    },
    {
        "id": 3,
        "name": "WalkThroughz",
        "picture": portfolio2,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://walkthroughz.com/",
        "ClientLink": "https://github.com/sozibhossain/n_Krypted-frontend/tree/maint",
    },
    {
        "id": 4,
        "name": "Diamondauctionsllc",
        "picture": portfolio3,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://diamondauctionsllc.com/",
        "ClientLink": "",
    },
    {
        "id": 5,
        "name": "goalsapp",
        "picture": portfolio4,
        "Technologies": "Next JS, TanStack Query, Tailwind CSS.",
        "url": "https://goalsapp.store/",
        "ClientLink": "https://github.com/sozibhossain/Goals/tree/main",
    },
    {
        "id": 6,
        "name": "Splurjj",
        "picture": portfolio5,
        "Technologies": "Next JS, TanStack Query, Tailwind CSS.",
        "LiveLink": "https://splurjj.com/",
        "ClientLink": "",
        "ServerLink": "---"
    },
    {
        "id": 7,
        "name": "My StoreBD",
        "picture": portfolio6,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "WordPress",
        "LiveLink": "https://www.mystorebd.com/",
        "ClientLink": "---",
        "ServerLink": "---"
    },
    {
        "id": 8,
        "name": "Rajasthan",
        "picture": portfolio7,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, Tailwind CSS,",
        "LiveLink": "https://superb-swan-66e99c.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/govt-rajsthan",
        "ServerLink": "---"
    },
    {
        "id": 9,
        "name": "TuteDude",
        "picture": portfolio8,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, CSS.",
        "LiveLink": "https://fancy-hummingbird-d12250.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/tute-dude",
        "ServerLink": "---"
    },
    {
        "id": 10,
        "name": "Creative-zone",
        "picture": portfolio9,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, React Bootstrap, CSS.",
        "LiveLink": "https://comforting-kelpie-8fce87.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/Creative-zone",
        "ServerLink": "---"
    }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
            data.map(({id, name, Technologies, picture, LiveLink, ClientLink}) => {
                return (
                    <article key={id} className="protfolio_item">
                        <div className="portfolio_item-image">
                            <img src={picture} alt=''/>
                        </div>
                        <h3>{name}</h3>
                        <h5>{Technologies}</h5>
                        <div className="portfolio_item-cta">
                            <a href={ClientLink} className='btn' target='_blank'>GitHub</a>
                            <a href={LiveLink} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )
            })
        }
      </div>
    </section>
  )
}

export default Portfolio
