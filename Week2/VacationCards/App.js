import React, { Component } from "react"
import VacationCards from "./Components/VacationCards"
import VacationSpots from "./Components/VacationSpots"

function App(){
  const vacationComponents = VacationSpots.map(vacation => 
  <VacationCards 
  place={vacation.place} 
  price={vacation.price}
  background={vacation.timeToGo}
  />)
  return (
    <div>
      <h1>Come and Take a vacation!</h1>
      {vacationComponents}
    </div>
    
  )
  }

export default App