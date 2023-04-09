import AnswerButton from "../UI/AnswerButton";
import Quiz from "./Quiz";
import "./QuizDashboard.css";

const QuizDashboard = props => {

    const quizQuestion = {"question": "Which of the following is the correct name of React.js?", 
        "answers":[ "React", "React.js", "ReactJS","All of the above" ]}

    return(
        < div className="quizDashboard">
            <Quiz 
                quizQuestions = {quizQuestion}
            />
        </div>
    )
}

export default QuizDashboard;