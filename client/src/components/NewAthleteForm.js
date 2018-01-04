import React, { Component } from 'react'
import axios from 'axios'

class NewAthleteForm extends Component {
  state = {
    name: '',
    description: '',
    gender: '',
    image: '',
    sport: '',
    nationality: '',
  }

  handleChange = (event) => {
    const name = event.target.name
    const newState = {...this.state}
    newState[name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const payload = {
      name: this.state.name,
      description: this.state.description
    }
    await axios.post('/api/athletes', payload)
    await this.props.getAllAthletes()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleChange} type="text" name="description" value={this.state.description}/>
        </div>
        <div>
          <label htmlFor="nationality">Nationality: </label>
          <input onChange={this.handleChange} type="text" name="nationality" value={this.state.nationality}/>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input onChange={this.handleChange} type="text" name="gender" value={this.state.gender}/>
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input onChange={this.handleChange} type="text" name="image" value={this.state.image}/>
        </div>
        <div>
          <label htmlFor="sport">Sport: </label>
          <input onChange={this.handleChange} type="text" name="sport" value={this.state.sport}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewAthleteForm