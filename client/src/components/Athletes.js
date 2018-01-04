import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components';
import NewAthleteForm from './NewAthleteForm'

const AthleteStyles = styled.div`
@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);
.snip1336 {
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 10px 1%;
  min-width: 230px;
  max-width: 315px;
  width: 100%;
  color: #ffffff;
  text-align: left;
  line-height: 1.4em;
  background-color:	conditioner;
}
.snip1336 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}
.snip1336 img {
  max-width: 100%;
  vertical-align: top;
  opacity: 0.85;
}
.snip1336 figcaption {
  width: 100%;
  background-color: #141414;
  padding: 25px;
  position: center;
}
.snip1336 figcaption:before {
  position: absolute;
  content: '';
  bottom: 100%;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 55px 0 0 400px;
  border-color: transparent transparent transparent #141414;
}
.snip1336 figcaption a {
  padding: 5px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 0.7em;
  text-transform: uppercase;
  margin: 10px 0;
  display: inline-block;
  opacity: 0.65;
  width: 47%;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
}
.snip1336 figcaption a:hover {
  opacity: 1;
}
.snip1336 .profile {
  border-radius: 50%;
  position: center;
  bottom: 100%;
  left: 25px;
  z-index: 1;
  max-width: 90px;
  opacity: 1;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}
.snip1336 .follow {
  margin-right: 4%;
  border-color: #2980b9;
  color: #2980b9;
}
.snip1336 h2 {
  margin: 0 0 5px;
  font-weight: 300;
}
.snip1336 h2 span {
  display: block;
  font-size: 0.5em;
  color: #2980b9;
}
.snip1336 p {
  margin: 0 0 10px;
  font-size: 0.8em;
  letter-spacing: 1px;
  opacity: 0.8;
}
button {
margin-right: 4%;
  border-color: #2980b9;
  color: #2980b9; 
}

`

class Athletes extends Component {
    state = {
        athletes: [],
        showNewForm: false
    }

    static defaultProps = {
        match: {
            path: '',
        }
    }
    componentWillMount () {
        this.getAllAthletes()
    } 
    getAllAthletes = async () => {
        const res = await axios.get('/api/athletes')
        console.log(res.data)
        this.setState({athletes: res.data})
   
    }

    toggleShowNewForm = () => {
      this.setState({showNewForm: !this.state.showNewForm})
    }
    

    render() {
        return (
            <div>
               
            <h1>Welcome to The Athletes</h1>
        {this.state.athletes.map(athlete => (
           <div>
            <AthleteStyles>
           
            <figure className="snip1336">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
                        <figcaption>
                            <img src={athlete.image} alt="profile-sample4" className="profile" />
                            {/* <Link key={athlete._id} to={`/athletes/${athlete._id}`}/> */}
                            <h3>{athlete.name}</h3>
                            <p>{athlete.sport}</p>
                            <p>{athlete.description} </p>
                            <p>{athlete.nationality} </p>
                            <p>{athlete.gender} </p>
                            <Link to={`/athletes/${athlete._id}`} className="follow">Follow</Link>
                            {/* <Link to={`/athletes/${athlete.id}/ActionPage`} className="info">Action Items</Link> */}
                            <Link to={`/athletes/${athlete._id}/edit`} >Edit</Link>
                            <Link to={`/NewAthlete`}>New </Link>
                        </figcaption>
                    </figure>

</AthleteStyles> 
{/* <button onClick={this.toggleShowNewForm}>Create New</button>

{this.state.showNewForm ? <NewAthleteForm getAllAthletes={this.getAllAthletes}/> : null} */}

          

            </div>
           
            ))}
            </div>
            
            
           
        );
    }
}

export default Athletes;



      //   <h1>Welcome to The Athletes</h1>
      //   {this.state.athletes.map(athlete => (
      //     <Link key={athlete._id} to={`/athlete/${athlete._id}`}>
      //       <h3>Name: {athlete.name}</h3>
      //       <p>Image: {athlete.image}</p>
      //       <p>Sport: {athlete.sport}</p>
      //       <p>Description: {athlete.description}</p>
      //       <p>Nationality: {athlete.nationality}</p>
      //       <p>Gender: {athlete.gender}</p>
            

      
           
            // <img src={athlete.image}/>
            // <p>Sport: {athlete.sport}</p>
            // <p>Description: {athlete.description}</p>
            // <p>Nationality: {athlete.nationality}</p>
            // <p>Gender: {athlete.gender}</p>
            
            // <Link to={`/athletes/${athlete._id}/edit`} >edit</Link>
           

            