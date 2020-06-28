import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nameInput: "",
      names: []
    }
  }
  
  nameDisplay = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  listUpdate = () => {
    this.setState(prevState => {
      prevState.names.push(prevState.nameInput)
      return {
        names: prevState.names
      }
    })
  }

  render() {
  const namesList = this.state.names.map(name => <li>{name}</li>)
    return (
      <div>
        <form >
          <label>
          Name:
          <input 
            type="text" 
            value={this.state.nameInput}
            name="nameInput"
            placeholder="Full Name" 
            onChange={this.nameDisplay}/>
          </label>
          <input type="button" value="Add to List" onClick={this.listUpdate}/>
        </form>
        <h1>{this.state.nameInput}</h1>
        <ol>
          {namesList}
        </ol>
      </div>
    )
  }
}

export default App;
