import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import LoadingResults from "./LoadingResults";
import Navigator from "./Navigator";
import AnswerFillInput from "./AnswerFillInput";

const QuestionSetTwo = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userStep, setUserStep] = useState(0);

    const mockRequest = () => {
        setTimeout(() => {
            setIsLoading(false);
            setUserStep(1);
        }, 1000)
    }

    useEffect(() => {
        mockRequest();
    }, [isLoading]);

    const answers = ['Note-taking application', 'Online Hotel Room Booking System']

    const navigateNext = () => {
        // Based on question index, store answer in state
        if (userStep < 2) {
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
        <Navigation />        
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
            <Navigator next={navigateNext} back={navigateBack}/> 
        </>
        : null}

        {userStep === 2 ? 
        <>
            <div className="question-container wrapper">
                <h1>What would you like to call this new project you’ll be working on? (Be Creative!)</h1>
                <AnswerFillInput />
            </div>   
            <Navigator next={navigateNext} back={navigateBack}/> 
        </>
        : null}
        </>
    )
}

export default QuestionSetTwo;