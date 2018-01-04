import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import styled from 'styled-components';


const AthleteProfile = styled.div`



`

class SingleAthlete extends Component {
  state = {
    athlete: {}
  }
  static defaultProps = {
    match: {
        path: '',
    }
}
async componentWillMount() {
  this.getAthlete()
}

getAthlete = async () => {
  try {
      const {athleteId} = this.props.match.params
      console.log(athleteId)
      const response = await axios.get(`/api/athletes/${athleteId}`)
      console.log(response.data)
      this.setState({
          athlete: response.data
      })
  } catch (err) {
      console.log(err)
  }
}

updateAthlete = async (newAthlete) => {
  const res = await axios.post('/api/athletes', {
      "athlete": newAthlete
  })
  const clonedathletes = [...this.state.athletes]
  clonedathletes.push(res.data)
  this.setState({ athletes: clonedathletes })
}
deleteUser = async (user) => {
  console.log(user)
  const response = await axios.delete(`/api/users/${user.id}`)
  await this.setState({ users: response.data })

}

  render() {
    return (
      <div>
      <h1> Athlete Profile </h1>
      <img src={this.state.athlete.image}/>
      <h1>  Gender: {this.state.athlete.gender} </h1>
      <h1>  Nationality: {this.state.athlete.nationality} </h1>
      <h1> Bio: {this.state.athlete.description} </h1>
      <h1>  Sport: {this.state.athlete.sport} </h1>




  </div>
    );
  }
}

export default SingleAthlete;