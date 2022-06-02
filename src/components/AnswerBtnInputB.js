const AnswerBtnInputB = ({userInput, response, index, handleSelect, selectAlert, selectLang}) => {
    const answers = response[index];
    return(
        <>
            {selectAlert ? <div className="select-alert">Please choose an option</div> : null}
            {selectLang ? <div className="select-alert">Please select JavaScript! Python coming soon.</div> : null}
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