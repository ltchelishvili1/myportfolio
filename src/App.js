import React,{useState} from 'react';
import {RiRestartFill} from 'react-icons/ri'
import './App.css';
import {Navbar,Header,Features,Download,Subscribe,Faq,Footer} from './components/';
function App() {
 
 
  return (
    <main>
      <div className='display'> 
      <header className="header-bg" >
        <Navbar/>
        <Header />
       
      </header>
     <div>
      <Download/>
      <Features/>
      <Subscribe/>
      <Faq/>
      <Footer/>
    </div>
    </div>
      </main>
  );
}

export default App;
