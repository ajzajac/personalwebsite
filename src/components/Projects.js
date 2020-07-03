import React, { Component } from 'react'
import { motion } from "framer-motion"
import '../App.css'



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
            <div className="projectPage" id='projectPage'>
           <h2 style={{marginTop: '-1px'}}>Projects</h2>
                <div className="wrapper"> 
                    <motion.ul className='projectList' variants={container} initial="hidden" animate="show">
                        <motion.p  variants={item}>Disaster map made with React and Google Maps API</motion.p>
                        <motion.li variants={item} ><iframe width="57%" height="55%" src="https://www.youtube.com/embed/lHuf6ozKEcc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                        <motion.p  variants={item} >Voting App made with React and Ruby on Rails</motion.p>
                        <motion.li variants={item} ><iframe width="57%" height="55%" src="https://www.youtube.com/embed/anOlvDfKD58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                        <motion.p variants={item} >Social media app for dining out made with Ruby on Rails</motion.p>
                        <motion.li variants={item} style={{paddingBottom: "5vh"}}><iframe width="57%" height="55%" src="https://www.youtube.com/embed/cbURp5_wtaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></motion.li>
                    </motion.ul> 
                </div> 
            </div>
        )
    }
}

export default Projects
