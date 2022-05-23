const AnswerBtnInputA = ({response, index, userInput, handleSelect, selectAlert}) => {
    const answers = response[index];
    return(
        <>
        {selectAlert ? <div>Please choose an option</div> : null}
        <div className="answer-fill answer-group">
            {answers.options.map((answer, index) => 
                (
                    <button className={userInput.language === answer ? "active" : null} value={answer} key={index} onClick={handleSelect}>{answer}</button>
                )
            )}
        </div>
        </>
    )
}

export default AnswerBtnInputA;