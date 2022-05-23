const AnswerBtnInputA = ({response, index, handleSelect, selectAlert}) => {
    const answers = response[index];
    return(
        <>
        {selectAlert ? <div>Please choose an option</div> : null}
        <div className="answer-fill answer-group">
            {answers.options.map((answer, index) => 
                (
                    <button value={answer} key={index} onClick={handleSelect}>{answer}</button>
                )
            )}
        </div>
        </>
    )
}

export default AnswerBtnInputA;