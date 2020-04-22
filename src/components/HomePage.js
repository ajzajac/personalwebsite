import React, { Component } from 'react'
import '../App.css'


export class homePage extends Component {
    render() {
        return (
            <div className="homeInfoCard">
                <div className="home-page-info">
                    <h2 style={{fontSize: "6vh"}}>Andrew Zajac</h2>
                    <p style={{fontSize: "3vh"}}>Software Engineer</p>
                </div>
            </div>
        )
    }
}

export default homePage
