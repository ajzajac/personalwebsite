import React, { Component } from 'react'
import { motion } from "framer-motion"
import '../App.css'
import Footer from './Footer'



export class Projects extends Component {
    render() {

        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                  staggerChildren: .8,
                  ease: "easeIn", 
                  duration: 2,
              }
            }
          }
          
          const item = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }

        return (
            <div className="projectPage">
            <h2 style={{marginTop: '-1px'}}>Projects</h2>
                <div className="wrapper">
                    <motion.ul className='projectList' variants={container} initial="hidden" animate="show">
                        <motion.p  variants={item} style={{marginRight: "6.5vw"}}>Disaster map Made with React and Google Maps API</motion.p>
                        <motion.li variants={item} style={{marginRight: "6vw"}}><iframe width="350" height="180" src="https://www.youtube.com/embed/lHuf6ozKEcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                        <motion.p  variants={item} style={{marginRight: "7vw"}}>Voting App made with React and Ruby on Rails</motion.p>
                        <motion.li variants={item} style={{marginRight: "6vw"}}><iframe width="350" height="180" src="https://www.youtube.com/embed/anOlvDfKD58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                        <motion.p variants={item} style={{marginRight: "6vw"}}>Social media app for dining out made with Ruby on Rails</motion.p>
                        <motion.li variants={item} style={{marginRight: "6vw", paddingBottom: "5vh"}}><iframe width="350" height="180" src="https://www.youtube.com/embed/cbURp5_wtaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                    </motion.ul> 
                </div>     
                <Footer></Footer>
            </div>
        )
    }
}

export default Projects
