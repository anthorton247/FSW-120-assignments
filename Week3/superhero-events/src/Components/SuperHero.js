import React from "react"


function SuperHero(props) {
    return (
        <div className="superHero" onClick={() => props.handleChange(props.superHeroes.catchPhrase)}>
            <h1>{props.superHeroes.name}</h1>
            <h3>{props.superHeroes.show}</h3>
            <img src={props.superHeroes.imageName} width={200}/>
        </div>
    )
}


export default SuperHero