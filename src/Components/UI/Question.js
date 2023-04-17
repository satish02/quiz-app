import React, { memo } from 'react';
import "./Question.css"

const Question = ({id, question}) => {
    console.log("QUestion")
    return(
        <>
            <label className='question'>{id}. {question}</label>
        </>
    )
}
export default memo(Question);