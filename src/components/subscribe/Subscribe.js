import React,{useRef,useEffect} from 'react';
import "./Subscribe.css";
import  {TiSocialGooglePlus} from "react-icons/ti";
import  {FaFacebookF} from  "react-icons/fa";
import {BiPhoneCall} from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import "aos/dist/aos.css";

const Subscribe = () => {
  
  const [showDot, setShowDot] = React.useState(true);

  const form = useRef();
  const sendEmail = (e) => {
    setShowDot(false)
    setTimeout(() => {
      setShowDot(true);
    }, 2000);
    e.preventDefault();  
    emailjs.sendForm('service_71rgluv','template_d2jggsb', form.current, 'NRxIxpD1-Oc75baOp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      

     
  };
  
  useEffect(() => {
    AOS.init({
      duration: 1000,

    }
    );
  },[])


 
  
  return (
    <section id='subscribe' >
        <div data-aos='fade-down' className='container subscribe'>
          {showDot? <h2>Contact Me!</h2> : <h3 className='messagesent'> Message Sent </h3>}
          
          <form  ref={form} onSubmit={sendEmail}  >
           
            <div className='form-control'>
                
              <div className='inputlist'>
              <input type="text" placeholder='Enter Your Name' name='name'>
              </input>
              <br/>
              <input type="text" name='mail' placeholder='Enter Your Email Address'>
              </input>
              <br/>
              <input type="text" name='subject' placeholder='Enter Subject'>
              </input>
              <br/>
              <input type="text" name='message' placeholder='Enter Your Message'>
              </input>
              <br/>
              <input type='submit' className='inpsubmit' value='Mail Me Now!' ></input>
              
              </div>
              
              <div className='social-icons'>
              <a href='facebook.com'>
                <div className='social-icon'>
                  <TiSocialGooglePlus/>
                </div>
                </a>
                <a href='facebook.com'>
                <div className='social-icon'>
                  <FaFacebookF/>
                </div>
                </a>
                <a href='facebook.com'>
                <div className='social-icon'>
                  <BiPhoneCall/>
                </div>
                </a>
              </div>
             
            </div>
          </form>
        </div>
    </section>
  )
}

export default Subscribe

