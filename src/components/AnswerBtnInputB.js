const AnswerBtnInputB = ({response, index}) => {
    const answers = response[index];
    return(
        <div className="answer-outline answer-one-group">
            {answers.options.map((answer, index) => 
                (
                    <button key={index}>{answer}</button>
                )
            )}
        </div>
    )
}

export default AnswerBtnInputB;