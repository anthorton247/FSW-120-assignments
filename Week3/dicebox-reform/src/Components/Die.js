import React from "react"

function Die(props) {
    const style = {
        border: "black solid 3px",
        textAlign: "center",
        width: 100,
        gridColumn: "span 1"
    }
    return (
        <div style={style}>
            <h1>{props.number}</h1>
        </div>
    )
}

export default Die