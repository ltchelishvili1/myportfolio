import React from 'react';
import "./Feature.css";

const Feature = ({icon,heading,link }) => {
  return ( 
   
      <div className='feature 
    container'>
      
       <div className='imagehover'>
       <a href={link} target='_blank' >
         <img src={icon} alt="project photo" className='photo'/>
         </a>
         </div>
         <a href={link} target='_blank' >
       <h3 className='feature-text'>{heading}</h3>
       </a>
         </div>
    

         
       
  )
}

export default Feature