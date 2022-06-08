import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import UserResult from './UserResult';

const LoadingResults = ({userInput}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const rotate = <FontAwesomeIcon icon={faArrowsRotate} />

    useEffect(() => {
        fetch('https://api.jsonbin.io/v3/b/62a13314449a1f382101b5eb', {
            headers: new Headers({
                'X-Master-Key': '$2b$10$OcmHF33GbHlZs39WZaVxiO5AJVJB9QAxwaU01iklMXmf6KakiBbjq'
            })
        })
        .then((res) => {
            return res.json();
        }).then((data) => {
            setData(data.record);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <>
            {isLoading === true ? 
                <div className="loading-results wrapper">
                    <h1>Finding Your Project</h1>
                    <div className='load-icon'>{rotate}</div>
                </div>
            : <UserResult result={data} userInput={userInput}/>
            }
        </> 
    )
}

export default LoadingResults;