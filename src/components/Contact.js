import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const linkedInUrl = "https://www.linkedin.com/in/andrew-zajac-017672199"
const gitHubUrl = "https://github.com/ajzajac"

export class Contact extends Component {

    sendEmail = () => {
      window.location.href='mailto:ajzajac@icloud.com'
    }

    getLinkedIn = () => {
        var win = window.open(linkedInUrl, '_blank');
        win.focus()
    }

    goToGithub = () => {
        var win = window.open(gitHubUrl, '_blank');
        win.focus()
    }

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
            <div className="contactMePage" id='contact'>
                <h2>Contact Me</h2>
                    <div className="emailLink">
                        <motion.ul className="contactList" variants={container} initial="hidden" animate="show" >
                            <motion.li variants={item}><motion.img style={{cursor: 'pointer', marginTop: "2%"}} whileHover={{ scale: 1.2}} whileTap={{ scale: .9}} src="https://ajzpersite.s3.us-east-2.amazonaws.com/linkedIn.png" height="30%" width="30%" title='LinkedIn' onClick={this.getLinkedIn} /></motion.li>
                            <motion.li variants={item}><motion.img style={{cursor: 'pointer'}} whileHover={{ scale: 1.2}} whileTap={{ scale: .9}} src="https://ajzpersite.s3.us-east-2.amazonaws.com/githubLogo.jpg" height="38%" width="38%" title='GitHub' onClick={this.goToGithub}/></motion.li>
                            <motion.li variants={item}><motion.img style={{cursor: 'pointer', marginTop: '-20px'}} whileHover={{ scale: 1.2}} whileTap={{ scale: .9}} src="https://ajzpersite.s3.us-east-2.amazonaws.com/email.png" height="38%" width="38%" title='Email' onClick={this.sendEmail} /></motion.li>
                        </motion.ul>
                    </div> 
                <Footer></Footer>
            </div>
        )
    }
}

export default Contact
