import Navigation from "./Navigation";
import { useState } from "react";

function UserQuestions() {
    const [questionIndex, setQuestionIndex] = useState(0);

    const questionsArr = [
        {
            question: 'What is your name?',
            options: null
        },
        {
            question: 'What programming language are you most interested in?',
            options: [
                'JavaScript',
                'Python',
                'C#',
                'Ruby'
            ]
        },
        {
            question: 'What industry are you most interested in working in?',
            options: [
                'B2B Software and Services',
                'Retail',
                'Gaming',
                'Healthcare',
                'Education'
            ]
        },
        {
            question: 'What resources would you like to see to facilitate building your project?',
            options: [
                'YouTube Videos',
                'Completed Project Samples ',
                'Links to Relevant Courses'
            ]
        },
        {
            question: 'How long do you want to spend on this project?',
            options: [
                '<3 Months',
                '3-6 months',
                '6-9 months',
                '>9 months'
            ]
        }
    ]

    const navigateNext = () => {
        if (questionIndex < 4) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    const navigateBack = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    return(
        <div>
            <Navigation />
                <div className="question-container wrapper">
                    <p>Question #{questionIndex + 1}</p>
                    <h1>{questionsArr[questionIndex].question}</h1>
                    
                    <form>
                        <input type="text" id="name" name="name" className="name-input"/>
                    </form>
                    
                    <div className="nav-btn">
                        <button className="btn-back" onClick={navigateBack}>Back</button>
                        <button className="btn-primary btn-next" onClick={navigateNext}>Next</button>
                    </div>
                </div>
        </div>
    )
}

export default UserQuestions;