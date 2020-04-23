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
                  staggerChildren: .5,
                  ease: "easeIn", 
                  duration: 1,
                
              }
            }
          }

          const item = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }
        return (
            <div className="projectPage">
                <motion.ul variants={container} initial="hidden" animate="show">
                    <p style={{marginRight: "6vw"}}>Everybody Votes</p>
                    <motion.li style={{marginRight: "5vw"}} variants={item}><iframe width="400" height="200" src="https://www.youtube.com/embed/anOlvDfKD58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                    <p style={{marginRight: "6vw"}}>Doom</p>
                    <motion.li style={{marginRight: "5vw"}} variants={item}><iframe width="400" height="200" src="https://www.youtube.com/embed/lHuf6ozKEcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                    <p style={{marginRight: "5vw"}}>Friends Who Eat!</p>
                    <motion.li style={{marginRight: "5vw"}} variants={item}><iframe width="400" height="200" src="https://www.youtube.com/embed/cbURp5_wtaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                </motion.ul>       
                <Footer></Footer>
            </div>
        )
    }
}

export default Projects
