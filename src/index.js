import React from "react"
import ReactDOM from "react-dom"

const name = "Luis Miguel"
const jsx = (
    <div>
        <h1>Hello, Platzi Badges! mi nombre es {name}</h1>
        <p>Actualmente estoy estudiando en platzi. :)</p>
    </div>
)

ReactDOM.render(jsx, document.getElementById("app"))
