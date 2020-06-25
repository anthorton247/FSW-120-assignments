import React from "react"

function DJBox(props) {
    const style = {
        height: 300,
        background: props.color,
        gridColumn: "span 1"
    }
    return (
        <div style={style}>
        </div>
    )
}

export default DJBox