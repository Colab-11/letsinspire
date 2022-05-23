const AnswerFillInput = ({handleChange}) => {
    return (
        <form>
            <input type="text" id="name" name="name" className="name-input" onChange={handleChange}/>
        </form>
    )
}

export default AnswerFillInput;