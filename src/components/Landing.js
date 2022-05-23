import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className="landing-page">
            <main className=" wrapper">
                <div className="welcome-image"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className="btn-primary">
                    <Link to="/start">Let's Get Started!</Link>
                </div>
            </main>
        </div>
    )
}

export default Landing;