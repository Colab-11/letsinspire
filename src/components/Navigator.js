import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navigator = ({next, back, index, userStep}) => {
    const faNext = <FontAwesomeIcon icon={faArrowRightLong} />
    const faBack = <FontAwesomeIcon icon={faArrowLeftLong} />

    return (
        <div className="nav-btn">
            
            {index === 0 ? 
                <>
                    <Link to="/" className="btn-back-link"><span>{faBack}</span> Previous</Link>
                    <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
                </>
            : null }

            {index > 0 ?
                <>
                    <button className="btn-back" onClick={back}><span>{faBack}</span> Previous</button>            
                    <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
                </>
            : null
            }

            {userStep === 1 ?
                <>
                    <button className="btn-back" onClick={back}><span>{faBack}</span> Previous</button>                      
                    <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
                </>
            : null
            }

            {userStep === 2 ?
                <>
                    <button className="btn-back" onClick={back}><span>{faBack}</span> Previous</button>                      
                    <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
                </>
            : null
            }
        </div>
    )
}

export default Navigator;