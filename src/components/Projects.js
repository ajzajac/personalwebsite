import React, { Component } from 'react'
import { motion } from "framer-motion"
import '../App.css'
import Footer from './Footer'



export class Projects extends Component {
    render() {
        return (
            <div className="projectPage">
            <h2 style={{marginRight: '3vw', marginTop: '-1px'}}>Projects</h2>
                <div className="wrapper">
                    <ul className='projectList'>
                        <p style={{marginRight: "6.5vw"}}>Disaster map Made with React and Google Maps API</p>
                        <li style={{marginRight: "6vw"}}><iframe width="400" height="200" src="https://www.youtube.com/embed/lHuf6ozKEcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                        <p style={{marginRight: "7vw"}}>Voting App made with React and Ruby on Rails</p>
                        <li style={{marginRight: "6vw"}}><iframe width="400" height="200" src="https://www.youtube.com/embed/anOlvDfKD58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                        <p style={{marginRight: "6vw"}}>Social media app for dining out made with Ruby on Rails</p>
                        <li style={{marginRight: "6vw", paddingBottom: "5vh"}}><iframe width="400" height="200" src="https://www.youtube.com/embed/cbURp5_wtaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                    </ul> 
                </div>     
                <Footer></Footer>
            </div>
        )
    }
}

export default Projects
