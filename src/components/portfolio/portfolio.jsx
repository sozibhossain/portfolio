
import portfolio1 from '../../assets/portfolio1.png';
import portfolio3 from '../../assets/portfolio3.png';
import portfolio4 from '../../assets/portfolio4.jpg';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.png';
import portfolio7 from '../../assets/portfolio7.png';
import portfolio9 from '../../assets/portfolio9.png';
import './portfolio.css';

const data = [
    {
        "id": 1,
        "name": "evpitch",
        "picture": portfolio1,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://evpitch.com/",
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
        "picture": portfolio3,
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
        "name": "royalhousecheck",
        "picture": portfolio7,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://royalhousecheck.com/",
        "ClientLink": "---",
        "ServerLink": "---"
    },
    {
        "id": 6,
        "name": "gratiswag",
        "picture": portfolio6,
        "Technologies": "MENN Stack, Node JS, Express JS, MongoDB, Next JS, Socket io, Stripe, TanStack Query, ShadCN UI and Tailwind CSS.",
        "LiveLink": "https://gratiswag.com/",
        "ClientLink": "---",
        "ServerLink": "---"
    },
    {
        "id": 7,
        "name": "goalsapp",
        "picture": portfolio4,
        "Technologies": "Next JS, TanStack Query, Tailwind CSS.",
        "LiveLink": "https://goalsapp.store/",
        "ClientLink": "https://github.com/sozibhossain/Goals/tree/main",
    },
    {
        "id": 8,
        "name": "Splurjj",
        "picture": portfolio5,
        "Technologies": "Next JS, TanStack Query, Tailwind CSS.",
        "LiveLink": "https://splurjj.com/",
        "ClientLink": "",
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
  {ClientLink && ClientLink !== "" && ClientLink !== "---" ? (
    <a
      href={ClientLink}
      className="btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  ) : (
    <button className="btn" disabled>
      GitHub
    </button>
  )}

  {LiveLink ? (
    <a
      href={LiveLink}
      className="btn btn-primary"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  ) : (
    <button className="btn btn-primary" disabled>
      Live Demo
    </button>
  )}
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
