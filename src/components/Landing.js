import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className="landing-page">
            <main className=" wrapper">
                <div className="welcome-image"></div>
                <p>Are you a Software Developer looking for a new personal project to work on? Fill out our quick questionaire and get matched with a project that best suites your interests and passions. Let us do the hard work for you!</p>
                <div className="btn-primary-link">
                    <Link to="/start">Let's Get Started!</Link>
                </div>
            </main>
        </div>
    )
}

export default Landing;