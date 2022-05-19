const AnswerBtnInputA = ({response, index}) => {
    const answers = response[index];
    return(
        <div className="answer-fill answer-group">
            {answers.options.map((answer, index) => 
                (
                    <button key={index}>{answer}</button>
                )
            )}
        </div>
    )
}

export default AnswerBtnInputA;