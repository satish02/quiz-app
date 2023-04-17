import React, { memo } from 'react';
import "./Question.css"
import AnswerButton from './AnswerButton';

const Answers = ({answers, disabledAnswer}) => {
    const quizAnswers = answers.map((answer) => {
        return <AnswerButton answer={answer} disabledAnswer={disabledAnswer} buttonCallback={()=> {}}/>
    });

    return(
        <>
            {quizAnswers}
        </>
    )
}
export default memo(Answers);