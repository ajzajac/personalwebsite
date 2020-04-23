import React, { Component } from 'react'
import Footer from './Footer'

export class Contact extends Component {
    render() {
        return (
            <div className="contactMePage">
                <h2>Contact Me</h2>
                    <div className="emailLink">
                        <a className="contacts" href="mailto:ajzajac@icloud.com">Email </a> 
                        <a className="contacts" href="https://www.linkedin.com/in/andrew-zajac-017672199/">Linked In</a>
                    </div> 
                <Footer></Footer>
            </div>
        )
    }
}

export default Contact
