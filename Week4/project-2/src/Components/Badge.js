import React from "react"

function Badge(props) {
    return (
        <div className="container">
            <h1 className="header">BADGE:</h1>
            <span className="smallSpan">First Name: {props.badge.fName}</span>
            <span className="smallSpan">Last Name: {props.badge.lName}</span>
            <span className="smallSpan">Phone: {props.badge.phone}</span>
            <span className="smallSpan"> Place of Birth: {props.badge.PoB}</span>
            <span className="smallSpan"> Email: {props.badge.email}</span>
            <span className="smallSpan">Favorite Food: {props.badge.food}</span>
            <span className="bigSpan">{props.badge.description}</span>
        </div>
    )
}

export default Badge