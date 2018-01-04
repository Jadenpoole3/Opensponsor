import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'


class NewAthleteForm extends Component {
  state = {
      newAthlete: {
    name: '',
    description: '',
    gender: '',
    image: '',
    sport: '',
    nationality: ''
  }, 

  athleteId: 0, 
  redirect: false 
}

  handleChange = (event) => {
    const attribute = event.target.name 
    const updateAthlete = {...this.state.newAthlete}
    updateAthlete[attribute] = event.target.value
    this.setState({newAthlete: updateAthlete})
}

  handleSubmit = async (event) => {
    event.preventDefault()
    const res =  await axios.post('/api/athletes', {
        "athlete": this.state.newAthlete
    })
    this.setState({redirect: true, athleteId: res.data.id})
  }

  render () {
    if(this.state.redirect){
        return <Redirect to={`/`}/>
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <h1>New </h1>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.newAthlete.name}/>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input onChange={this.handleChange} type="text" name="description" value={this.state.newAthlete.description}/>
        </div>
        <div>
          <label htmlFor="nationality">Nationality: </label>
          <input onChange={this.handleChange} type="text" name="nationality" value={this.state.newAthlete.nationality}/>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <input onChange={this.handleChange} type="text" name="gender" value={this.state.newAthlete.gender}/>
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input onChange={this.handleChange} type="text" name="image" value={this.state.newAthlete.image}/>
        </div>
        <div>
          <label htmlFor="sport">Sport: </label>
          <input onChange={this.handleChange} type="text" name="sport" value={this.state.newAthlete.sport}/>
        </div>
        <button>Submit</button>
      </form>
    )
  }
}

export default NewAthleteForm