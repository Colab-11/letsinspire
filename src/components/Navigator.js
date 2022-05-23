import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

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

            {userStep ?
                <button className="btn-primary btn-next" onClick={next}>Next <span>{faNext}</span></button>
            : null
            }
        </div>
    )
}

export default Navigator;