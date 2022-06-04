import React, {useState} from 'react'
import "./Question.css"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

const Question = ({title,answer,icon}) => {
    const [showAnswer,setShowAnswer]=useState(false);
    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
  return (
    <div className='container question'>
        <div className='question-title'>
            <div className='titleicon'>
                {icon}
            <h4>  {title }</h4>
            </div>
            <button className='question-icon' onClick={handleClick}>
                {
                    showAnswer ? <AiOutlineMinus color='red' /> 
                     :
                      <AiOutlinePlus color='#1f93ff' />
                }
            </button>
        </div>
        <div className='question-answer'>
            {showAnswer && <p className='u-text-small answer'>
                {answer}
            </p>}
            
        </div>
        
    </div>
  )
}

export default Question