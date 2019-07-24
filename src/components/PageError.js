import React from 'react'

import '../styles/PageError.css'

export default function PageError(props) {
    return(
        <div className="PageError">
            <h2><span role="img" aria-label="X">❌</span>{props.error}<span role="img" aria-label="surprise">😱</span> </h2>
        </div>
    )
}