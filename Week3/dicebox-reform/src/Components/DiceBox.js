import React from "react"
import Die from "./Die"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
                num1: 0,
    
                num2: 0,
    
                num3: 0,
    
                num4: 0,

                num5: 0,
        }
        
    }

    handleClick = () => {
        this.setState({
                num1: Math.floor(Math.random() * 6),
                num2: Math.floor(Math.random() * 6),
                num3: Math.floor(Math.random() * 6),
                num4: Math.floor(Math.random() * 6),
                num5: Math.floor(Math.random() * 6)
        })
    }

    render() {
        return (
            <div className="diceBox">
                <Die number= {this.state.num1}/>
                <Die number= {this.state.num2}/>
                <Die number= {this.state.num3}/>
                <Die number= {this.state.num4}/>
                <Die number= {this.state.num5}/>
                <button onClick={this.handleClick}>ROLL!</button>
            </div> 
        )
    }
}

export default DiceBox