import React,{useEffect,useState} from 'react';
import "./Download.css"
import AOS from 'aos';
import "aos/dist/aos.css";
const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,

    }
    );
  },[])
  const[offsetY,setOffsetY]= useState(0);
  const handleScroll= () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[])
  return (
    <section id='download'>
      <div className='container download' data-aos="fade-up" style={{transform: `translateY(${offsetY * -0.1}px)`}} >
      <h2  >Check out some of my projects</h2>
      <p className='u-text-small u-text- light'>
        Fully responsive custom designed websites 
      </p>
      
      </div>
    </section>
  )
}

export default Download