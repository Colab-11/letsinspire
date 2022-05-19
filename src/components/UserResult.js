const UserResult = () => {
    return (
        <div className="user-container wrapper">
            <div className="title-section">
                <form>
                    <label>Project Name:</label>
                    <input type="text" />
                </form>
                <p>Project Owner: Paul Ahn</p>
            </div>
            <div className="left-results-section">
                <h2>Sample Completed Projects</h2>
                <div></div>
                <ul className="left-results-links">
                    <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                    <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                    <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                </ul>
            </div>

            <div className="right-results-section">
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
            </div>

            <div className="bottom-results-section">
                <div className="bottom-results-links">
                    <h2>Additional Webpages</h2>
                    <ul>
                        <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                        <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                        <li><a href="#" target="_blank">https://www.joincolab.io/projects</a></li>
                    </ul>
                </div>
                <div className="bottom-results-image"></div>
            </div>
        </div>
    )
}

export default UserResult;