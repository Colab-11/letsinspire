import { Link } from "react-router-dom";

const Navigator = ({next, back, index, userStep}) => {
    return (
        <div className="nav-btn">
            <button className="btn-back" onClick={back}>Back</button>

            {index < 4 ?
                <button className="btn-primary btn-next" onClick={next}>Next</button>
            : null
            }

            {index === 4 ? 
                <div className="btn-primary-link btn-next">
                    <Link to="/customize">Next</Link>
                </div>
            : null
            }

            {userStep ?
                <button className="btn-primary btn-next" onClick={next}>Next</button>
            : null
            }
        </div>
    )
}

export default Navigator;