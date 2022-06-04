import React from 'react'
import "./Footer.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
  } from "react-icons/fa";
  import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer id='footer'>
        <div className='container footer'>
          <div className='footer-box'>
            <h4>Useful Links</h4>
            <div className='footer-links'>
              <a href='#'>&bull;Support</a>
              <a href='#'>&bull;About</a>
              <a href='#'>&bull;Learn</a>
              <a href='#'>&bull;Hosting</a>
              <a href='#'>&bull;Messenger</a>
            </div>
          </div>
          <div className='footer-box'>
          <h4>Support</h4>
            <div className='footer-links'>
              <a href='#'>&bull;Support</a>
              <a href='#'>&bull;About</a>
              <a href='#'>&bull;Learn</a>
              <a href='#'>&bull;Hosting</a>
              <a href='#'>&bull;Messenger</a>
            </div>

          </div>
          <div className='footer-box'>
              <h4>Contact Us</h4>
              <div className='footer-contact'>
                <p>
                  <FaMapMarkerAlt/> &nbsp; Address: Georgia
                </p>
                <p>
                  <FaPhoneAlt/> &nbsp; Pgone: +995557700447
                </p>
                <p>
                  <FaEnvelope/> &nbsp; Email: chelishvililevani@mail.ru
                </p>
                <p>
                  <FaGlobe/> &nbsp; Website: ...
                </p>
              </div>
          </div>
          <div className='footer-box'>
            <img src={logo} alt="logo"/>
            <p className='u-small-text'>
              &copy; copyright
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer