import React, { useEffect, useRef, useState } from "react";
import AnswerButton from "../UI/AnswerButton";
import Question from "../UI/Question";
import { QUESTION_TIMER_IN_SECONDS } from "../../Config/AppConstant";
import "./Quiz.css";

const Quiz = ({ quizQuestions}) => {
    const [timer, setTimer] = useState(QUESTION_TIMER_IN_SECONDS );
    const [questionIndex, setQuestionIndex] = useState(0);
    const [timeOut, setTimeOut] = useState(false);
    const timerRef = useRef(null);
    timerRef.current = timer;
   

    useEffect(() => {
        const interval = setInterval(() => {
                if(timerRef.current === 0) {
                    clearInterval(interval);
                    setTimeOut(true)
                }
                else
                    setTimer(timerRef.current - 1 );

            }, 1000);
        }, []
    );

    const quizAnswers = quizQuestions.answers.map((answer) => {
        return <AnswerButton answer={answer} disabledAnswer={timeOut}/>
    });

    return (
        <>
            <div className="quizContainer">
                <div className="questionContainer">
                    <Question question={quizQuestions.question} />
                </div>
                <label className="timer">{timer}</label>
            </div>
            {quizAnswers}
        </>
    );
};
export default Quiz;
