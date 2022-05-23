import { useState, useEffect } from "react";
import LoadingResults from "./LoadingResults";
import Navigator from "./Navigator";
import AnswerFillInput from "./AnswerFillInput";
import UserResult from "./UserResult";

const QuestionSetTwo = ({userInput, setUserInput}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userStep, setUserStep] = useState(0);
    const [fillAlert, setFillAlert] = useState(false);

    const mockRequest = () => {
        setTimeout(() => {
            setIsLoading(false);
            setUserStep(1);
        }, 1000)
    }

    const handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value;
        
        if (userStep === 2) {
            setUserInput(prevState => ({
                ...prevState,
                projectName: input
            }));
        }
    }

    if (userStep === 0) {
            mockRequest();
    }

    const answers = ['Note-taking application', 'Online Hotel Room Booking System']

    const navigateNext = () => {
        if (userStep === 2 && userInput.projectName === '') {
            setFillAlert(true);
            return
        } else {
            setFillAlert(false);
        }

        if (userStep < 3) {
            setUserStep(userStep + 1);
        }
    }

    const navigateBack = () => {
        if (userStep > 1) {
            setUserStep(userStep - 1);
        }
    }

    return (
        <>      
        <div>
            {isLoading === true ? <LoadingResults /> : null}
        </div>
        
        {userStep === 1 ? 
        <>
            <div className="question-container wrapper">
                <p>Results</p>
                <h1>Score! Based on your results, here are two projects that we think is right for you!</h1>

                <div className="answer-fill answer-group">
                    {answers.map((answer, index) => 
                        (
                            <button key={index}>{answer}</button>
                        )
                    )}
                </div>
            </div>   
            <Navigator next={navigateNext} back={navigateBack} userStep={userStep}/>
        </>
        : null}

        {userStep === 2 ? 
        <>
            <div className="question-container wrapper">
                <h1>What would you like to call this new project you’ll be working on? (Be Creative!)</h1>
                <AnswerFillInput userStep={userStep} userInput={userInput} handleChange={handleChange} fillAlert={fillAlert}/>
            </div>   
            <Navigator next={navigateNext} back={navigateBack} userStep={userStep}/> 
        </>
        : null}

        {userStep === 3 ?
        <div className="btn-primary-link btn-next">
            <UserResult userInput={userInput}/>
        </div>
        : null }
        </>

    )
}

export default QuestionSetTwo;