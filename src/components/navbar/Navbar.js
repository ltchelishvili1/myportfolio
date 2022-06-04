import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import '../UI/button/Button.css';
const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  const toggleMenu= () =>{
    setShowMenu(!showMenu);
  }

  return (
    <nav className='container navbar'>
      
       <menu>
         <ul className='nav-links' id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide" }>
            <li><a href='#home'>Home</a></li>
           
            <li><a href='#download'>Projects</a></li>
             <li><a href='#subscribe'>Contact Me</a></li>
            <li><a href='#footer'>About me</a></li>
            

         </ul>
       </menu>
       <div className='menu-icons' onClick={toggleMenu}>
         {showMenu ?( 
            <RiCloseLine color='#fff' size={30} />
            ) : (
           <AiOutlineBars color='#fff' size={27}/>
         )}
       </div>

    </nav>
  );
}

export default Navbar 