import React from 'react';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.png';
import AVTR4 from '../../assets/avatar4.png';
import AVTR5 from '../../assets/avatar5.png';
import AVTR6 from '../../assets/avatar6.png';
import './testimonial.css';

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR2,
    name: 'hrdsingh',
    client: 'Fiverr',
    location: 'India',
    review: 'Good job done'
  },
  {
    avatar: AVTR3,
    name: 'nilahto',
    client: 'Fiverr',
    location: 'United States',
    review: 'Absolutely excellent quality work. This seller exceeded my expectation. Very fast and well communication. I will must come back for more. I recommended this seller every one. A+++++++'
  },
  {
    avatar: AVTR4,
    name: 'amaanaaz',
    client: 'Fiverr',
    location: 'India',
    review: ''
  },
  {
    avatar: AVTR5,
    name: 'agnichakraborty',
    client: 'Fiverr',
    location: 'India',
    review: ''
  },
  {
    avatar: AVTR1,
    name: 'creative_rex',
    client: 'Fiverr',
    location: 'Bangladesh',
    review: 'I have worked with sozib3862 first time and it is a very nice experience to work with him, so looking forward to working with him again. Requirements were clear. Communication was easy, fast, and productive. Thanks, sozib3862, it was a pleasure to work with you!'
  },
  {
    avatar: AVTR6,
    name: 'Jakaria',
    client: 'Fiverr',
    location: 'Bangladesh',
    review: ''
  },
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        >
        {
          data.map(({avatar, name, client, location, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar} alt="" />
                </div>
                  <h5 className='client_name'>{name}</h5>
                  <h5 className='client_name'>Client : {client}</h5>
                  <h5 className='client_name'>Location : {location}</h5>
                  <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial
