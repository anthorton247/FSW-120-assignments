import React from 'react'
import Badge from "./Components/Badge"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fName: "",
      lName: "",
      phoneNum: "",
      placeOfBirth: "",
      email: "",
      food: "",
      description: "",
      badge: []
    }
  }
  
  updateItems = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  listUpdate = () => {
    this.setState(prevState => {
      const newBadge = {
        fName: prevState.fName,
        lName: prevState.lName,
        phoneNum: prevState.phoneNum,
        placeOfBirth: prevState.placeOfBirth,
        email: prevState.email,
        food: prevState.food,
        description: prevState.description
      }
      return {
        badge: [newBadge, ...this.state.badge]
      }
    })
  }

  render() {
  const badgeList = this.state.badge.map(badge => <Badge key={badge.phoneNum} badge={badge}/>)
    return (
      <div>
        <div className="badgeInput">
          <form >
            <label className="smallLabel">
              <input 
                type="text" 
                value={this.state.fName}
                name="fName"
                placeholder="First Name" 
                onChange={this.updateItems}/>
            </label>
            <label className="smallLabel">
              <input 
                type="text" 
                value={this.state.lName}
                name="lName"
                placeholder="Last Name" 
                onChange={this.updateItems}/>
            </label>
            <label className="smallLabel">
              <input 
                type="tel" 
                value={this.state.phoneNum}
                name="phoneNum"
                placeholder="Phone number" 
                onChange={this.updateItems}/>
            </label>
            <label className="smallLabel">
              <input 
                type="text" 
                value={this.state.placeOfBirth}
                name="placeOfBirth"
                placeholder="Place of Birth" 
                onChange={this.updateItems}/>
            </label>
            <label className="smallLabel">
              <input 
                type="email" 
                value={this.state.email}
                name="email"
                placeholder="Email" 
                onChange={this.updateItems}/>
            </label>
            <label className="smallLabel">
              <input 
                type="text" 
                value={this.state.food}
                name="food"
                placeholder="Favorite Food" 
                onChange={this.updateItems}/>
            </label>
            <label className="bigLabel">
              <input 
                type="text" 
                value={this.state.description}
                name="description"
                placeholder="Describe yourself" 
                onChange={this.updateItems}/>
            </label>
            <input type="button" value="Create Badge" onClick={this.listUpdate}/>
          </form>
        </div>
        <div>
          {badgeList}
        </div>
      </div>
    )
  }
}

export default App;
