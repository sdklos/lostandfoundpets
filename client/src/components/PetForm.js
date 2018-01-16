import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPet } from '../actions/index';
import { connect } from 'react-redux';

class PetForm extends Component {
  handleSubmit = event => {
    addPet(this.state)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Pet Name: </label>
        <input type="text" placeholder="Pet Name" name="name" onChange={this.handleChange}/>

        <label htmlFor="type">Pet Type: </label>
        <input type="text" placeholder="Pet Type" name="type" onChange={this.handleChange}/>

        <label htmlFor="primary_breed">Primary Breed: </label>
        <input type="text" placeholder="Primary Breed" name="primary_breed" onChange={this.handleChange}/>

        <label htmlFor="primary_color">Primary Color: </label>
        <input type="text" placeholder="Primary Color" name="primary_color" onChange={this.handleChange}/>

        <label htmlFor="age">Age: </label>
        <input type="text" placeholder="Age" name="age" onChange={this.handleChange}/>


        <button type="submit">Submit Pet</button>
      </form>
    )
  }
}

export default PetForm;
