import React from 'react'

import '../styles/PageError.css'

export default function PageError(props) {
    return(
        <div className="PageError">
            <h2>❌{props.error}😱</h2>
        </div>
    )
}