import React from 'react';
import "./Question.css"

const Question = ({question}) => {
    return(
        <>
            <label className='question'>{question}</label>
        </>
    )
}
export default Question;