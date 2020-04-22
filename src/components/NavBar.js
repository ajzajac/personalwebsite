import React from 'react'
import '../App.css'

export default function NavBar() {
    return (
        <div className="navBar">
            <div className="navBarLinks">
               <ul>
                  <li style={{marginRight: "15px", marginBottom: "2vh"}}><a className="glow" href='/about'>about</a></li>
                  <li style={{marginRight: "25px"}}><a className="glow" href='/projects'>projects</a></li>
                  <li style={{marginRight: "25px"}}><a className="glow" href='/contact'>contact</a></li>
                  <li style={{marginRight: "76vw", marginBottom: "1vh", fontWeight: "800"}}><a className="glow" href='/'>//</a></li>
               </ul>
            </div>
        </div>
    )
}
