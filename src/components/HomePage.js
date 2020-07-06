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
                    <motion.li variants={item}>Andrew Zajac</motion.li>
                    <motion.li variants={item}>Software Engineer | Web Developer</motion.li>
                </motion.ul>
            </div>
        )
    }
}

export default HomePage
