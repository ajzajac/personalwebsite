import React, { Component } from 'react'
import '../App.css'



export class Projects extends Component {
    render() {
        return (
            <div className="projectPage" id='projectPage'>
                <h2 style={{marginTop: '-1px'}}>Projects</h2>
                   
                    <div className="wrapper">
                        <div className='project-left'>
                            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/lHuf6ozKEcc" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='Doom' allowFullScreen></iframe>
                        </div>
                        <div className='project-right'>
                            <h3>Doom</h3>
                            <p>A web application built utilizing the Google Maps API to display on going natural disasters around the world. The data was pulled from the NASA EONET API. </p>
                            <ul>
                                <li><a href='https://master.dh8hc53n5sm7o.amplifyapp.com/'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M22 6v16h-20v-16h20zm2-6h-24v24h24v-24zm-11 11v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201z"/></svg>Deployed on AWS</a></li>
                                <li><a href='https://github.com/ajzajac/mymod5project'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>Github Repo</a></li>
                            </ul>
                            <p>Created with:</p>
                            <ul className='tech-list'>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="wrapper">
                        <div className='project-left'>
                            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/anOlvDfKD58" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='Everybody Votes' allowFullScreen></iframe>
                        </div>
                        <div className='project-right'>
                            <h3>Everybody Votes</h3>
                            <p>A full stack web application made for voting. Users can create polls and share them while other users can vote and engage in community discussion. All CRUD operations are sent to a back end API and stored, read, updated, or deleted. </p>
                            <ul>
                                <li><a href='https://github.com/ajzajac/mod4-poll-frontend'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>Front End Github Repo</a></li>
                                <li><a href='https://github.com/ajzajac/mod4-poll-project'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>Back End Github Repo</a></li>
                            </ul>
                            <p>Created with:</p>
                            <ul className='tech-list'>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>Ruby on Rails</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                            </ul>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div className='project-left'>
                            <iframe width="90%" height="90%" src="https://www.youtube.com/embed/cbURp5_wtaM" frameBorder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title='Friends Who Eat' allowFullScreen></iframe>
                        </div>
                        <div className='project-right'>
                            <h3>Friends Who Eat!</h3>
                            <p>A social networking platform created to encourage community interaction around dining experiences. User to user messaging and following features help users discuss, review, and make reservations at any restaurant on the platform.</p>
                            <ul>
                                <li><a href='https://github.com/ajzajac/friendswhoeat/tree/andrew/app'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>Github Repo</a></li>
                            </ul>
                            <p>Created with:</p>
                            <ul className='tech-list'>
                                <li>Ruby on Rails</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Projects
