import React, {useEffect,useState} from 'react'
import "./Header.css"
import phoneHeader from "../../assets/homepageback.png"
import Button from '../UI/button/Button';
import '../UI/button/Button.css';
import {RiRestartFill} from 'react-icons/ri'
import {AiOutlineArrowDown} from "react-icons/ai";
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'
import AOS from 'aos';
import "aos/dist/aos.css";
import MyPDF from '../../assets/CV.pdf'

const Header = () => {
  
  const [showAnswer,setShowAnswer]=useState(false);
    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
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
    <section id='header'>
         {
                    showAnswer ?   <div className='show' >
                    <div className='container header' >
                      <div className='header-left'
                       data-aos="fade-left"  style={{
                        transform: `translateY(${offsetY * 0.13}px)` }}>
                        <h1>
                          <span>Hi, I am Levani </span>
                          <span>React Developer </span>
                          <span>From Georgia</span>
                        </h1>
                        <p className='u-text-small u-text-light ' >I was born in Kutaisi, Georgia. I am 20 years old studying Computer Science at  Kutaisi International University. Go down to see my projects     </p>
                        <div className='header-cta'>
                       <Button  text={"Check CV"} btnClass={"btn-dark"} href={MyPDF}  />
                       <Button  text={"Hire me  ... "} btnClass={"buttonorange"} href={"#subscribe"} />
            
                      </div>
                      </div>
                      <div className='header-right' data-aos="fade-down">
                      <img src={phoneHeader} alt="phone"></img>
                      </div>
                    </div>
                    <div className='floating-icon'>
                      <a href="#download">
                        <AiOutlineArrowDown color="#fff" size={25} className="mouse"/>
                      </a>
                    </div>
                    </div>
                     :
                     <div className='container welcomepage'  >
                       <div data-aos="fade-up">
                      <h1  className='welcome' data-aos="zoom-in fade-up" data-aos-duration="2500" 
                      >Welcome To My Portfolio </h1>
                      <h1  className='clickbegin' data-aos="zoom-in" data-aos-duration="2500"
                      >Click Here To Begin </h1>
                      </div>
                      <HiOutlineArrowNarrowDown className='animation1' color='rgba(255, 255, 255, 0.6' size={70}  />
                       <RiRestartFill  className='animation' color='rgba(255, 255, 255, 0.6' size={70} onClick={handleClick}/>
                     
                      </div>
                      
                }
       
    </section>
  )
}

export default Header
