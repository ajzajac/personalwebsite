import React from 'react'
import '../App.css'

export default function NavBar() {
    return (
        <div className="navBar">
                <ul>
                    <li><a className="glow" href='/#about'>About</a></li>
                    <li><a className="glow" href='/#skills'>Skills</a></li>
                    <li><a className="glow" href='/#projectPage'>Projects</a></li>
                    <li><a className="glow" href='/#contact'>Contact</a></li>
               </ul>
        </div>
    )
}
