import React, {useState} from 'react';


function App() {
  const initInputs = {
    value1: 0,
    value2: 0
  } 

  const [ math, setMath ] = useState(0)

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(event) {
    const {name, value} = event.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }

  function addition(event) {
    event.preventDefault()
    const val1 = parseInt(inputs.value1)
    const val2 = parseInt(inputs.value2)
    setMath(prevMath => prevMath = val1 + val2)
  }

  function subtract(event) {
    event.preventDefault()
    const val1 = parseInt(inputs.value1)
    const val2 = parseInt(inputs.value2)
    setMath(prevMath => prevMath = val1 - val2)
  }

  function multiply(event) {
    event.preventDefault()
    const val1 = parseInt(inputs.value1)
    const val2 = parseInt(inputs.value2)
    setMath(prevMath => {prevMath = val1 * val2})
  }

  function divide(event) {
    event.preventDefault()
    const val1 = parseInt(inputs.value1)
    const val2 = parseInt(inputs.value2)
    setMath(prevMath => prevMath = val1 / val2)
  }

  return (
    <div>
      <form>
        <input 
          type= "number"
          name= "value1"
          value= {inputs.value1}
          onChange= {handleChange}
        />
        <input 
          type= "number"
          name= "value2"
          value= {inputs.value2}
          onChange= {handleChange}
        />
        <button onClick= {addition}>Add</button>
        <button onClick= {subtract}>Subtract</button>
        <button onClick= {multiply}>Multiply</button>
        <button onClick= {divide}>Divide</button>
        <h1>{math}</h1>
      </form>
     
    </div>
  );
}

export default App;
