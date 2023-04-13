import React from 'react';
import "./Question.css"

const Question = ({id, question}) => {
    return(
        <>
            <label className='question'>{id}. {question}</label>
        </>
    )
}
export default Question;