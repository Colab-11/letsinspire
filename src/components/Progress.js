const Progress = ({step, complete}) => {
    return(

        <div className="prog-container">
            <div className="progress">
                {step === 0 ? 
                    <>
                        <div className="step"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                    </>
                    : null
                }
                {step === 1 ? 
                    <>
                        <div className="step-complete"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                    </>
                    : null
                }
                {step === 2 ? 
                    <>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step"></div>
                        <div className="step"></div>
                    </>
                    : null
                }
                {step === 3 ? complete === false ?
                    <>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step"></div>
                    </> : 
                    <>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                    </>
                    : null
                }
                {/* {step === 3 ? complete === true ?
                    <>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                        <div className="step-complete"></div>
                    </> : null
                : null
                } */}
            </div>            
        </div>

    )
}

export default Progress;