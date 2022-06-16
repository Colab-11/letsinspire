import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import UserResult from './UserResult';

const LoadingResults = ({userInput, setUserInput}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({
        errorMessage: ''
    })
    const [data, setData] = useState([]);

    const rotate = <FontAwesomeIcon icon={faArrowsRotate} />

    useEffect(() => {
        fetch(`https://robotic-door-352700.wn.r.appspot.com/api/projectResources?lang=${userInput.language.toLowerCase()}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            setData(data);
            setIsLoading(false);
        }).catch((err) => {
            setError({errorMessage: err.message})
            setIsLoading(false);
        })
    }, [userInput.language])

    return (
        <>
            {isLoading === true ? 
                <div className="loading-results wrapper">
                    <h1>Finding Your Project</h1>
                    <div className='load-icon'>{rotate}</div>
                </div>
            : !error.errorMessage && <UserResult result={data} userInput={userInput} setUserInput={setUserInput}/>
            }

            {
                error.errorMessage &&
                <div className='error'>
                    <h1>Oops!</h1>
                    <p>{error.errorMessage}</p>
                </div>
            }
        </> 
    )
}

export default LoadingResults;