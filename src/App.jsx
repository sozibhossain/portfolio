import './App.css';
import Header from './components/header/header';
import Contact from './components/contact/contact';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Testimonial from './components/testimonial/testimonial';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
