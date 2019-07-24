import React, { Component } from 'react'
import '../styles/Badge.css'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'


export default class Badge extends Component {

  render() {
    
    //props
    const {name, lastName, jobTitle, twitter, email} = this.props

    return (
      <div className="badge_container">
        <div className="badge_header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="badge_content">
          <Gravatar email={email}/>
          <h1>
            <p>{name}<br /> {lastName}</p>
          </h1>
        </div>

        <div className="badge_footer">
          <h4>{jobTitle}</h4>
          <div>@{twitter}</div>
        </div>

        <div className="badge_conf">
          <p>#PlatziConf</p>
        </div>
      </div>
    )
  }
}
