import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

const LoadingResults = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000) 
    }, [])

    return (
        <>
            {isLoading === true ? 
                <div className="loading-results wrapper">
                    <h1>Finding Your Project</h1>
                    <div className="spinner"></div>
                </div>
            : <Navigate to="/result" />
            }
        </> 
    )
}

export default LoadingResults;