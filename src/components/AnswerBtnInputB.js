const AnswerBtnInputB = ({userInput, response, index, handleSelect, selectAlert}) => {
    const answers = response[index];
    return(
        <>
        {selectAlert ? <div>Please choose an option</div> : null}
            {index === 1 ? 
                <div className="answer-outline answer-one-column">
                    {answers.options.map((answer, index) => 
                        (
                            <button className={userInput.language === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                        )
                    )
                    }
                </div>
            : null
            }

            {index === 2 ? 
                <div className="answer-outline answer-one-column">
                    {answers.options.map((answer, index) => 
                        (
                            <button className={userInput.interest === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                        )
                    )
                    }
                </div>
            : null
            }

            {index === 3 ? 
                <div className="answer-outline answer-one-column">
                    {answers.options.map((answer, index) => 
                        (
                            <button className={userInput.projectLength === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                        )
                    )
                    }
                </div>
            : null
            }
        </>
    )
}

export default AnswerBtnInputB;