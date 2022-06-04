import React,{useEffect} from 'react'
import "./Features.css";
import Feature from './Feature';
import {featureList} from './data.js';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/navigation';

import { Navigation,  A11y } from 'swiper';


function Features() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,

    }
    );
  },[])
    return (
    <div>
    <div className='temp' >
      <div data-aos='fade-down' className='project-allitems'>
      <Swiper  modules={[Navigation, A11y]}  
    
    navigation 
    loop={true}
    breakpoints={ {
      
      960: {
        slidesPerView: 5,
        spaceBetween: 8
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 6
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 4
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 2
      },
      
    }}
    
    >
      
      {featureList.map ((feature)=>{
          return(
            <SwiperSlide key={feature.id}>
             <Feature key={feature.id} icon={feature.icon} 
             heading={feature.heading } link={feature.link}  />
              </SwiperSlide>
            )
})}

        </Swiper>
        
      </div>
    </div>
  </div>
 
  )
}
export default Features
