import Footer from "./Footer";

const UserResult = ({userInput}) => {
    return (
        <>
            <div className="user-container wrapper">
                <section className="title-section">
                    <h1>Project Name: {userInput.projectName}</h1>
                    <p>Project Owner: {userInput.userName}</p>
                </section>
                <section className="left-results-section">
                    <h2>Sample Completed Projects</h2>
                    <div></div>
                    <ul className="left-results-links">
                        <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                        <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                        <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                    </ul>
                </section>
                <div className="separator-line"></div>
                <section className="right-results-section">
                    <h2>Youtube Videos</h2>
                    <ul className="right-results-links">
                        <li>
                            <p>C# Note-taking application tutorial</p>
                            <div></div>
                        </li>
                        <li>
                            <p>C# Note-taking application tutorial</p>
                            <div></div>
                        </li>
                        <li>
                            <p>C# Note-taking application tutorial</p>
                            <div></div>
                        </li>
                    </ul>
                </section>
                <div className="separator-line-bottom"></div>
                <section className="bottom-results-section">
                    <div className="bottom-results-links">
                        <h2>Additional Webpages</h2>
                        <ul>
                            <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                            <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                            <li><a href="https://www.joincolab.io/projects" target="_blank" rel="noreferrer">https://www.joincolab.io/projects</a></li>
                        </ul>
                    </div>
                    <div className="bottom-results-image"></div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default UserResult;