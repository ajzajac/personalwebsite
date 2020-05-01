import React from 'react'
import '../App.css'

export default function NavBar() {
    return (
        <div className="navBar">
                <ul className="navBarList">
                    <li style={{marginRight: "3%", display: "inLine"}}><a className="glow" href='/about'>about</a></li>
                    <li style={{marginRight: "4%", marginLeft: "1.3%", marginBottom: "2vh", display: "inLine"}}><a className="glow" href='/projects'>projects</a></li>
                    <li style={{ display: "inLine"}}><a className="glow" href='/contact'>contact</a></li>
               </ul>
        
        </div>
    )
}
