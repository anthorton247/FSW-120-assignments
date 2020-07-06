import React from "react"

function Home(props) {
    return(
        <div className= "homePage">
            <h1>Welcome to Plumber Bros</h1>
            <p>
                We handle any job you can think of be it:
            </p>
            <div className= "table">
                <ul>
                    <li>Over loaded toilet system</li>
                    <li>Walking mushrooms</li>
                    <li>Shower lacking water pressure</li>
                    <li>Even fire breathing dragon turtles</li>
                </ul>
            </div>
            <p>Contact us today for your free quote</p>
        </div>
    )
}
export default Home