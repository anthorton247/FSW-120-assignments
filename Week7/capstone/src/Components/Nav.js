import React from "react"
import {Link} from "react-router-dom"

function Nav(props) {
    return (
        <div className= "nav">
            <ul>
                <li><Link to= "/" className= "link">Home</Link></li>
                <li className="floatRight"><Link to= "/support" className= "link">Support</Link></li>
            </ul>
        </div>
    )
}

export default Nav