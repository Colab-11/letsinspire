import { useState } from "react";
import AnswerFillInput from "./AnswerFillInput";
import AnswerBtnInputA from "./AnswerBtnInputA";
import AnswerBtnInputB from "./AnswerBtnInputB";
import Navigator from "./Navigator";

function QuestionSetOne({setUserInput}) {
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
                'Education',
                'Business / IT',
                'Government'
            ]
        },
        {
            question: 'What resources would you like to see to facilitate building your project?',
            options: [
                'YouTube Videos',
                'Completed Project Samples ',
                'Links to Relevant Courses',
                'Links to Relevant Websites'
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

    const handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value;
        if (questionIndex === 0) {
            setUserInput(prevState => ({
                ...prevState,
                userName: input
            }));
        }
    }
    
    const handleSelect = (e) => {
        e.preventDefault();
        const input = e.target.value;
        if (questionIndex === 1) {
            setUserInput(prevState => ({
                ...prevState,
                language: input
            }));           
        }
    }

    return(
        <div>
            {questionIndex <= 4 ? 
            <>
                <div className="question-container wrapper">

                    <p>Question #{questionIndex + 1}</p>
                    <h1>{questionsArr[questionIndex].question}</h1>
                    
                    {questionIndex === 0 ? <AnswerFillInput handleChange={handleChange}/> : null}
                    {questionIndex === 1 ? <AnswerBtnInputA response={questionsArr} index={questionIndex} handleSelect={handleSelect}/> : null}  
                    {questionIndex === 2 ? <AnswerBtnInputB response={questionsArr} index={questionIndex}/> : null}              
                    {questionIndex === 3 ? <AnswerBtnInputB response={questionsArr} index={questionIndex}/> : null}        
                    {questionIndex === 4 ? <AnswerBtnInputB response={questionsArr} index={questionIndex}/> : null}  

                </div>
                <Navigator next={navigateNext} back={navigateBack} index={questionIndex}/>
            </>
            : null
            }   
        </div>
    )
}

export default QuestionSetOne;