import React from "react"
import NavBar from "./Navbar"

function Header() {
    return (
        <div>
            <NavBar />
            <header className="masthead">
                <span className="title">Clean Blog <br/><span className="subtitle">A Blog Theme by Start Bootstrap</span></span>
            </header>
        </div>
    )
}

export default Header