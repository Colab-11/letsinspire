import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navigator = ({next, back, index, userStep}) => {
    const faNext = <FontAwesomeIcon icon={faArrowRightLong} />
    const faBack = <FontAwesomeIcon icon={faArrowLeftLong} />

    return (
        <div className="nav-btn">
            <button className="btn-back" onClick={back}><span>{faBack}</span> Previous</button>

            {index <= 4 ?
                <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
            : null
            }

            {userStep === 1 ?
                <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
            : null
            }

            {userStep === 2 ?
                <div className="btn-primary-link btn-next">
                    <Link to="/result">Next <span>{faNext}</span></Link>
                </div>
            : null
            }
        </div>
    )
}

export default Navigator;