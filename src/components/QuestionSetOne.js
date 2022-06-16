import { useState } from "react";
import AnswerFillInput from "./AnswerFillInput";
import AnswerBtnInput from "./AnswerBtnInput";
import LoadingResults from "./LoadingResults";
import Navigator from "./Navigator";
import Progress from "./Progress";

function QuestionSetOne({userInput, setUserInput}) {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [fillAlert, setFillAlert] = useState(false);
    const [selectAlert, setSelectAlert] = useState(false);
    const [complete, setComplete] = useState(false);

    const questionsArr = [
        {
            question: 'What is your name?',
            options: null
        },
        {
            question: 'What programming language are you most interested in?',
            options: [
                'JavaScript',
                'Python'
            ]
        },
        {
            question: 'What industry are you most interested in working in?',
            options: [
                'FinTech',
                'Healthcare',
                'E-Commerce',
                'Education'
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
        if (questionIndex === 0 && userInput.userName === '') {
            setFillAlert(true);
            return
        } else {
            setFillAlert(false);
        }
        
        if (questionIndex === 1 && userInput.language === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex === 2 && userInput.interest === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex === 3 && userInput.projectLength === '') {
            setSelectAlert(true);
            return
        } else {
            setSelectAlert(false);
        }

        if (questionIndex < 3) {
            setQuestionIndex(questionIndex + 1);
        }
        if (questionIndex === 3) {
            setComplete(true);
            setTimeout(() => setQuestionIndex(questionIndex + 1), 200);
        }
    }


    const navigateBack = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        const input = e.target.value.replace(/ +/g, '');
        if (questionIndex === 0) {
            setUserInput(prevState => ({
                ...prevState,
                userName: input
            }));
        }
    }
    
    const handleSelect = (e) => {
        const input = e.target.value;
        if (questionIndex === 1) {
            setUserInput(prevState => ({
                ...prevState,
                language: input
            }));           
        }
        if (questionIndex === 2) {
            setUserInput(prevState => ({
                ...prevState,
                interest: input
            }));           
        }
        if (questionIndex === 3) {
            setUserInput(prevState => ({
                ...prevState,
                projectLength: input
            }));           
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            navigateNext();
        }
    }

    document.addEventListener("keydown", handleKeyPress);

    return(
        <div className="question-container-flex">
            {questionIndex <= 3 ? 
            <>
                <div className="question-container wrapper" id={'question'+questionIndex}>
                    <p>Question #{questionIndex + 1}</p>
                    <h1>{questionsArr[questionIndex].question}</h1>
                    <Progress step={questionIndex} complete={complete}/>
                    
                        {questionIndex === 0 ? <AnswerFillInput handleChange={handleChange} fillAlert={fillAlert} userInput={userInput} index={questionIndex}/> : null}

                        {questionIndex === 1 ? <AnswerBtnInput response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert}/> : null}  

                        {questionIndex === 2 ? <AnswerBtnInput response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert} /> : null}       

                        {questionIndex === 3 ? <AnswerBtnInput response={questionsArr} index={questionIndex} userInput={userInput} handleSelect={handleSelect} selectAlert={selectAlert}/> : null}          

                </div>
                <Navigator next={navigateNext} back={navigateBack} index={questionIndex}/>
            </>
            : null
        }   
        {questionIndex === 4 
            ? <LoadingResults userInput={userInput} setUserInput={setUserInput}/>
            : null}
        </div>
    )
}

export default QuestionSetOne;