import React from 'react'
import { Link } from 'react-router-dom'

import platziConf from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

import '../styles/Home.css'

export default function Home () {
    return(
        <div className="home__container">
            <div className="container">
                <div className="row home__content">
                    <div className="col text-white home__left">
                        <img src={platziConf} alt=""/>
                        <h2 >PRINT YOUR BADGES</h2>
                        <h5 >The easiest way to manage your conference</h5>
                        <Link  className="btn btn-success" to="/badges">Start Now</Link>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <img className="home__image" src={astronauts} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}