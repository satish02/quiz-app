import React, { useEffect, useRef, useState, useMemo } from "react";
import AnswerButton from "../UI/AnswerButton";
import Question from "../UI/Question";
import { QUESTION_TIMER_IN_SECONDS } from "../../Config/AppConstant";
import "./Quiz.css";
import Answers from "../UI/Answers";
 

const Quiz = ({ quizQuestions}) => {
    const [timer, setTimer] = useState(QUESTION_TIMER_IN_SECONDS);
    const [questionIndex, setQuestionIndex] = useState(0);
    const timerRef = useRef(null);
    timerRef.current = timer;
   
    const questionAnswer = quizQuestions[questionIndex];

    useEffect(() => {
        const interval = setInterval(() => {
                if(timerRef.current === 0) {
                    clearInterval(interval);
                }
                else {
                    if(timerRef.current !== 0)
                        setTimer(timerRef.current - 1);
                }
            }, 1000);

            return () => {
                clearInterval(interval);
            }
        }, [questionIndex]
    );

    const previousQuestionHandler = () => {
        setTimer(QUESTION_TIMER_IN_SECONDS);
         setQuestionIndex((previousQuestionIndex) => {
            return previousQuestionIndex - 1
        });
    }

    const nextQuestionHandler = () => {
        setTimer(QUESTION_TIMER_IN_SECONDS);
        setQuestionIndex((previousQuestionIndex) => {
            return previousQuestionIndex + 1
         });
   }

    return (
        <>
            <div className="quizContainer">
                <div className="questionContainer">
                    <Question id= {questionAnswer.id} question={questionAnswer.question} />
                </div>
                <label className="timer">{timer}</label>
            </div>
            <Answers answers= {questionAnswer.answers} disabledAnswer={timerRef.current == 0} />
            <div className="buttonContainer">
                <AnswerButton answer="Previous" disabledAnswer={ questionIndex == 0 } buttonCallback={ previousQuestionHandler} />
                <AnswerButton answer="Next" disabledAnswer={questionIndex === quizQuestions.length - 1} buttonCallback={nextQuestionHandler}/>
            </div>
        </>
    );
};
export default Quiz;
