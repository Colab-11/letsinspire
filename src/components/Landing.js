import { Link } from 'react-router-dom';

function Landing() {
    return(
        <div className="landing-page">
            <main className=" wrapper">
                <div className="welcome-image"></div>
                <p>Are you a Software Developer looking for a new personal project to work on? Fill out our quick questionnaire and get matched with a project that best suits your interests and passions.</p>
                <p>Let us do the hard work for you!</p>
                <div className="btn-primary-link">
                    <Link to="/customize">Let's Get Started!</Link>
                </div>
            </main>
        </div>
    )
}

export default Landing;