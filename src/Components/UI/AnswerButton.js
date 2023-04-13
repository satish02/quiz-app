import React from 'react';
import "./AnswerButton.css";

const AnswerButton = ({answer, disabledAnswer, buttonCallback}) => {
    return(
        <div className= { disabledAnswer ? 'button disabled': 'button'} onClick={() => buttonCallback()} >
            <label >{answer}</label>
        </div>
    )
}
export default AnswerButton;