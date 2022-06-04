import React,{useEffect} from 'react'
import "./Footer.css"
import AOS from 'aos'
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  } from "react-icons/fa";
 
const Footer = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000,

    }
    );
  },[])
  return (
    <footer id='footer'>
        <div data-aos='fade-left' className='container footer'>
          <div className='footer-box'>
              <h4>Contact Me</h4>
              <div className='footer-contact'>
                <p>
                  <FaMapMarkerAlt/> &nbsp; Address: Kutaisi, Georgia
                </p>
                <p>
                  <FaPhoneAlt/> &nbsp; Phone: +995557700447
                </p>
                <p>
                  <FaEnvelope/> &nbsp; Email: chelishvililevani@mail.ru
                </p>
              </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer