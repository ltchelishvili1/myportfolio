import React from 'react'
import {MdOutlineLibraryBooks} from "react-icons/md"
import Question from './Question';
import {questions} from "./data.js"
const Faq = () => {
  return (
    <section id='faq'>
      <div className='container faq'>
        <div className='u-title'>
         
         <MdOutlineLibraryBooks color="orangered" size={30}/>
          <h2>FAQS</h2>
          <p className='u-text-small u-text-dark'>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati ea aliqual sit nemo nisi!
            Nesciunt quis illum id qui et! </p>
          </div>
          <div className='questions'>
            {questions.map((question)=> (
              <Question title={question.title} answer={question.answer} />
            ))}
           
         </div>
         </div>
    </section>
  )
}

export default Faq