import Navigation from "./Navigation";
import { useState } from "react";

function UserQuestions() {
    const [question, setQuestion] = useState(0);

    const questions = [
        'What is your name?',
        'What programming language are you most interested in?',
        'What industry are you most interested in working in?',
        'What resources would you like to see to facilitate building your project?',
        'How long do you want to spend on this project?'
    ]

    return(
        <div>
            <Navigation />
                <div className="question-container wrapper">
                    <p>Question #{question + 1}</p>
                    <h1>{questions[question]}</h1>
                    <form>
                        <input type="text" id="name" name="name" className="name-input"/>
                    </form>
                    <div className="nav-btn">
                        <button className="btn-back">Back</button>
                        <button className="btn-primary btn-next">Next</button>
                    </div>
                </div>
        </div>
    )
}

export default UserQuestions;