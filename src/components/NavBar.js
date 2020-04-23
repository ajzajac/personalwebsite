import React from 'react'
import '../App.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBarLinks">
               <ul className="navBarList">
                    <li style={{marginRight: "5vw", display: "inLine"}}><a className="glow" href='/about'>about</a></li>
                    <li style={{marginRight: "5vw",  marginBottom: "2vh", display: "inLine"}}><a className="glow" href='/projects'>projects</a></li>
                    <li style={{marginRight: "5vw", display: "inLine"}}><a className="glow" href='/contact'>contact</a></li>
               </ul>
            </div>
        </div>
    )
}
