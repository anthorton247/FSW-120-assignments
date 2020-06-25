import React from "react"
import DJBox from "./Components/DJBox"
import { PureComponent } from "react"


class App extends React.Component {
    constructor () {
        super ()
         this.state = {
             color: ["white", "white", "white", "white"]
         }
        
    }
   colorSwitch = (num) => {
         switch(num){
             case 0: this.setState(() => {
               let check
               for(check=0; check < this.state.color.length; check++){
                 if(this.state.color[check] === "white"){
                   return {
                     color: ["black", "black", "black", "black"]
                   }
                 } else {
                   return {
                    color: ["white", "white", "white", "white"]
                   }
                 }
               }
             })
             break
             case 1: this.setState(() => {
               if(this.state.color[0] != "purple" && this.state.color[1] != "purple"){
                const cutColorr= this.state.color.splice(0, 2)
                const addPurple= ["purple", "purple"]
                const purpleArr= addPurple.concat(cutColorr)
                return {
                  color: purpleArr
                }
               }
             })
             break
             case 2: this.setState(() => {
               if(this.state.color[2] != "blue"){

                let prevState = this.state.color.slice()
                let oldColor1= prevState.splice(0, 2)
                let oldColor2= prevState.splice(0, 1)
                let addBlue = oldColor1.push("blue")
                let change = oldColor1.concat(oldColor2)
                return{
                 color: change
                }
              }
             })
             break
             case 3: this.setState(() => {
              if(this.state.color[3] != "blue"){
                console.log(this.state.color)
                let prevState = this.state.color.slice()
                let oldColor1= prevState.splice(0, 2)
                let oldColor2= prevState.splice(0, 1)
                let addBlue = oldColor2.push("blue")
                let change = oldColor1.concat(oldColor2)
                return{
                 color: change
                }
              }
             })
             break
         }
     }

    render() {
        const DJComponents = this.state.color.map(color => 
            <DJBox color={color}/>)
        return (
            <div className="grid">
                {DJComponents}
                <button onClick={() => this.colorSwitch(0)}>B/W</button>
                <button onClick={() => this.colorSwitch(1)}>Top Purple</button>
                <button onClick={() => this.colorSwitch(2)}>Left Blue</button>
                <button onClick={() => this.colorSwitch(3)}>Right Blue</button>
            </div>
        )
    }
}

export default App