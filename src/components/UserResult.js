import Footer from "./Footer";
import { useState, useEffect } from "react";

const UserResult = ({userInput, result}) => {
    const [ideas, setIdeas] = useState([]);
    const [videos, setVideos] = useState([]);
    const [techResource, setTechResource] = useState([]);
    const [forum, setForum] = useState([]);

    useEffect(() => {
        const createResults = () => {
            let field = '';
            if (userInput.interest === 'FinTech') {
                field = 'finTech';
            } else if (userInput.interest === 'Healthcare') {
                field = 'healthCare';
            } else if (userInput.interest === 'E-Commerce') {
                field = 'eCommerce';
            } else if (userInput.interest === 'Education') {
                field = 'education';
            }
            const ideas = result.filter((object) => 
                object.resourceSubsection === field
            )
            setIdeas(ideas);
    
            const filterVideos = result.filter((object) => 
                object.resourceSubsection === 'youtubeVideo'
            ).map((object) => {
                const newObject = {
                    resourceTitle: object.resourceTitle,
                    link: object.link.match(/v=(.*)/)[1]
                }
                return newObject;
            })
    
            setVideos(filterVideos);
    
            const techResource = result.filter((object) => 
                object.resourceSubsection === 'techDocumentation'
            )
            setTechResource(techResource);
    
            const forum = result.filter((object) => 
                object.resourceSubsection === 'forum'
        )
            setForum(forum);
        }

        createResults();
    }, [result, userInput]);


    return (
        <>
            <div className="user-container wrapper">
                <section className="title-section">
                    <h1>JavaScript: {userInput.language}</h1>
                    <p>Project Owner: {userInput.userName}</p>
                </section>
                <section className="field-section">
                    <p>Field of Interest: {userInput.interest}</p>
                </section>
                <section className="left-results-section">
                    <h2>Recommended Projects</h2>
                    <div></div>
                    <ul className="left-results-links">
                        <p>{userInput.interest}</p>
                        {ideas.map((object, index) => {
                            return(
                                <li key={index}><a href={object.link} target="_blank" rel="noreferrer">{object.resourceTitle}</a></li>
                            )
                        })}
                    </ul>
                </section>
                <div className="separator-line"></div>
                <section className="right-results-section">
                    <h2>Additional Projects</h2>
                    <ul className="right-results-links">
                        {videos.map((value, index) => {
                            return(
                                <li className={index}>
                                    <p>{value.resourceTitle}</p>
                                    <iframe width="350" height="215" src={"https://www.youtube.com/embed/" + value.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <div className="separator-line-bottom"></div>
                <section className="bottom-results-section">
                    <div className="bottom-results-links">
                        <h2>Technical Resources</h2>
                        <p>{userInput.language} Documentation</p>
                        <ul>
                            {techResource.map((object, index) => {
                                return(
                                    <li key={index}><a href={object.link} target="_blank" rel="noreferrer">{object.resourceTitle}</a></li>
                                )
                            })}
                        </ul>
                        <p>{userInput.language} Developer Forums</p>
                        <ul>
                        {forum.map((object, index) => {
                            return(
                                <li key={index}><a href={object.link} target="_blank" rel="noreferrer">{object.resourceTitle}</a></li>
                            )
                        })}
                    </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default UserResult;