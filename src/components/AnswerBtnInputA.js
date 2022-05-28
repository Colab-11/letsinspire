const AnswerBtnInputA = ({userStep, response, userInput, handleSelect, selectAlert}) => {
    const answers = response[userStep];
    return(
        <>
        {selectAlert ? <div>Please choose an option</div> : null}
        {userStep === 1 ? 
            <div className="answer-fill answer-group">
                {answers.options.map((answer, index) => 
                    (
                        <button className={userInput.projectType === answer ? "active" : null} value={answer} key={index} onClick={handleSelect}>{answer}</button>
                    )
                )}
            </div>
        : null
        }
        </>
    )
}

export default AnswerBtnInputA;