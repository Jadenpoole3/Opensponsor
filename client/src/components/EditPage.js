import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'





class EditPage extends Component {
    state = {
        athlete: {},
        redirectToAthlete: false
        
    }
    componentWillMount(){
        this.getAthlete()
    }
    getAthlete = async () => {
        try {
            const { athleteId } = this.props.match.params
            console.log(athleteId)
            const response = await axios.get(`/api/athletes/${athleteId}`)
            
            this.setState({
                athlete: response.data
            })
        } catch (err) {
            console.log(err)
        }
    }
    handleChange = async (event) => {
        console.log(event)
    
        //getting the input 
        const attribute = event.target.name
    
        const clonedAthlete = {...this.state.athlete }
        clonedAthlete[attribute] = event.target.value
    
        this.setState({ athlete: clonedAthlete})
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { athleteId } = this.props.match.params 
        const newAthlete = {...this.state.athlete}       
		const res = await axios.patch(`/api/athletes/${athleteId}`, {
		athlete: newAthlete	
		})
		
		this.setState({redirectToAthlete: !this.state.redirectToAthlete})
		
    }

    render() {
        if(this.state.redirectToAthlete === true) {
            return (
                <Redirect to={`/`}/>
            )
        }
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="text" name="name" value={this.state.athlete.name} placeholder="Name"/>
		
		<input 
        onChange={this.handleChange} className="kutus1" type="text" name="Gender" value={this.state.athlete.gender} placeholder="Gender"/>

<input 
        onChange={this.handleChange} className="kutus1" type="text" name="sport" value={this.state.athlete.sport} placeholder="Sport"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="image" value={this.state.athlete.image} placeholder="Image"/>
		
		<input 
        onChange={this.handleChange} className="kutus2" type="text" name="description" value={this.state.athlete.description} placeholder="Description"/>
        <button>Edit</button>
            </form>
            </div>


        );
    }
}

export default EditPage;