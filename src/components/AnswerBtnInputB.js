const AnswerBtnInputB = ({userInput, response, index, handleSelect}) => {
    const answers = response[index];
    return(
        <div className="answer-outline answer-one-group">
            {index === 2 ? 
            answers.options.map((answer, index) => 
                (
                    <button className={userInput.interest === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                )
            )
            : null
            }

            {index === 3 ? 
            answers.options.map((answer, index) => 
                (
                    <button className={userInput.resource === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                )
            )
            : null
            }

            {index === 4 ? 
            answers.options.map((answer, index) => 
                (
                    <button className={userInput.length === answer ? "active" : null} key={index} value={answer} onClick={handleSelect}>{answer}</button>
                )
            )
            : null
            }

        </div>
    )
}

export default AnswerBtnInputB;