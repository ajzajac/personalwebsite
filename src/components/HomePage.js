import React, { Component } from 'react'
import '../App.css'
import { motion } from "framer-motion"

export class HomePage extends Component {
    
    render() {
        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                  staggerChildren: 1.5,
                  ease: "easeIn", 
                  duration: 1.5,
              }
            }
          }
          
          const item = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }

        return (
            <div className="homeInfoCard" id='home'>
                <motion.ul className="homePageList" variants={container} initial="hidden" animate="show" >
                    <motion.li variants={item} style={{fontSize: "8vh", marginTop: "30vh",}}>Andrew Zajac</motion.li>
                    <motion.li variants={item} style={{fontSize: "2.5vh", marginTop: "5vh",}}>Software Engineer | Web Developer</motion.li>
                </motion.ul>
            </div>
        )
    }
}

export default HomePage
