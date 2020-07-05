import React from 'react'
import '../App.css'

export default function NavBar() {
    return (
        <div className="navBar">
                <ul>
                    <li><a className="glow" href='/#about'>about</a></li>
                    <li><a className="glow" href='/#skills'>skills</a></li>
                    <li><a className="glow" href='/#projectPage'>projects</a></li>
                    <li><a className="glow" href='/#contact'>contact</a></li>
               </ul>
        </div>
    )
}
