import React from "react"

function Box(props) {
    const styles = {
        backgroundColor: props.boxColor,
        textAlign: "center",
        border: "solid black 5px",
        width: "50%",
        height: 200,
        margin: "auto"
    }

    return (
        <div style={styles}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Box