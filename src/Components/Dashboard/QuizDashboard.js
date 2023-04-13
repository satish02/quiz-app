import Quiz from "./Quiz";
import "./QuizDashboard.css";

const QuizDashboard = props => {

    const quizQuestions = [{"id":"1", "question": "Which of the following is the correct name of React.js?", 
        "answers":[ 
            "React", 
            "React.js", 
            "ReactJS",
            "All of the above" 
        ]},
        {"id":"2", "question": "Choose the correct statement in the context of uncontrolled components in ReactJS?", 
        "answers":[ 
            "Source of truth can be anything", 
            "Source of truth is component state", 
            "Source of truth is DOM",
            "None of above" 
        ]},
        {"id": "3", "question": "Which of the following best defines the 'key' prop?",
        "answers":[
            "\"Key\" prop is used to look pretty, and there is no benefit whatsoever.",
            "\"Key\" prop is a way for React to identify a newly added item in a list and compare it during the \"diffing\" algorithm.",
            "It is one of the attributes in HTML.",
            "It is NOT commonly used in an array."
        ]}
    ]

    return(
        < div className="quizDashboard">
            { quizQuestions.length > 0 && <Quiz quizQuestions = {quizQuestions} /> }
        </div>
    )
}

export default QuizDashboard;