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
        "name": "BIMTECH",
        "picture": portfolio9,
        "details": "Admin and user will see the different features. Users can order products, Cancel orders, order history, order reviews with dynamic ratings of the product. Only admin can add products, manage products, delete products, new admin",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase, Authentication,   Material UI, CSS, Heroku, JWT",
        "LiveLink": "https://creative-syrniki-99fe1b.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/BIMTECH"
    },
    {
        "id": 2,
        "name": "SKOLA",
        "picture": portfolio1,
        "details": "Admin and user will see the different features. Users can order products, Cancel orders, order history, order reviews with dynamic ratings of the product. Only admin can add products, manage products, delete products, new admin",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase, Authentication,   Material UI, CSS, Heroku, JWT",
        "LiveLink": "https://naughty-johnson-102b1c.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/team-projects-programming-hero",
        "ServerLink": "https://github.com/sozibhossain/team-projects-programming-hero/tree/client-side/backend"
    },
    {
        "id": 3,
        "name": "YA-MART",
        "picture": portfolio2,
        "details": "Admin and user will see the different features. Users can order products, Cancel orders, order history, order reviews with dynamic ratings of the product. Only admin can add products, manage products, delete products, new admin",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase, Authentication, Tailwind, CSS, Heroku, JWT",
        "LiveLink": "https://lucky-kringle-fd19a0.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/ya-mart",
        "ServerLink": ""
    },
    {
        "id": 4,
        "name": "AutoCar",
        "picture": portfolio3,
        "details": "Admin and user will see the different features. Users can order products, Cancel orders, order history, order reviews with dynamic ratings of the product. Only admin can add products, manage products, delete products, new admin",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase, Authentication,   Material UI, CSS, Heroku, JWT",
        "LiveLink": "https://autocar-ab3c5.web.app/",
        "ClientLink": "https://github.com/sozibhossain/Assignment-12",
        "ServerLink": "https://github.com/sozibhossain/Assignment-12-server"
    },
    {
        "id": 5,
        "name": "Atrii World",
        "picture": portfolio4,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase Authentication, React Bootstrap, CSS, Heroku, JWT.",
        "url": "https://atrii-world.web.app/",
        "ClientLink": "https://github.com/sozibhossain/Assignment-11",
        "ServerLink": "https://github.com/sozibhossain/Assignment-11-server"
    },
    {
        "id": 6,
        "name": "Medicine Shop",
        "picture": portfolio5,
        "details": "Admin and user will see the different features. Users can order products, Cancel orders, order history, order reviews with dynamic ratings of the product. Only admin can add products, manage products, delete products, new admin",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase Authentication, React Bootstrap, CSS.",
        "LiveLink": "https://medicine-shop-2dc4e.web.app/",
        "ClientLink": "https://github.com/sozibhossain/Assignment-10",
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
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase Authentication, Tailwind, CSS.",
        "LiveLink": "https://superb-swan-66e99c.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/govt-rajsthan",
        "ServerLink": "---"
    },
    {
        "id": 9,
        "name": "TuteDude",
        "picture": portfolio8,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase Authentication, React Bootstrap, CSS.",
        "LiveLink": "https://fancy-hummingbird-d12250.netlify.app/",
        "ClientLink": "https://github.com/sozibhossain/tute-dude",
        "ServerLink": "---"
    },
    {
        "id": 10,
        "name": "Creative-zone",
        "picture": portfolio9,
        "details": "Users and admin can log in with registered email or product details with the private route in login. Responsive web application with dynamic products and users review section. Used firebase authentication system for login, register, and Google sign-in.",
        "Technologies": "React js, MongoDB, Node js, Node Express, Firebase Authentication, React Bootstrap, CSS.",
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
            data.map(({id, name, picture, LiveLink, ClientLink}) => {
                return (
                    <article key={id} className="protfolio_item">
                        <div className="portfolio_item-image">
                            <img src={picture} alt=''/>
                        </div>
                        <h3>{name}</h3>
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
