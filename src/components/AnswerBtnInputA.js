const AnswerBtnInputA = ({response, index, handleSelect}) => {
    const answers = response[index];
    return(
        <form className="answer-fill answer-group">
            {answers.options.map((answer, index) => 
                (
                    <button value={answer} key={index} onClick={handleSelect}>{answer}</button>
                )
            )}
        </form>
    )
}

export default AnswerBtnInputA;