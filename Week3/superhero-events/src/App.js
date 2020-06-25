import React from "react"
import SuperHero from "./Components/SuperHero"
import data from "./Components/superhero.json"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            heroes: data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(catchPhrase) {
        alert(catchPhrase)
    }
    render() {
        const supers = this.state.heroes.map(superHeroes => <SuperHero key={superHeroes.catchPhrase} superHeroes={superHeroes} handleChange={this.handleChange}/>)
        return (
            <div>
                {supers}
            </div> 
        )
    }
}

export default App
