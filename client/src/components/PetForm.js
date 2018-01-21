import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPet, setFormState } from '../actions/index';
import { connect } from 'react-redux';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';

class PetForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const pet = {pet: this.props.formState}
    debugger
    this.props.addPet(pet)
  }

  handleChange = event => {
    var change = {}
    change[event.target.name] = event.target.value
    this.props.setFormState(change)
  }

  handleAddressChange = address => {
    var addressChange = {}
    addressChange['address'] = address
    this.props.setFormState(addressChange)
  }

  populateBreeds = (pet_type) => {
    switch(pet_type) {
      case "Dog":
        return this.props.breeds.dogs
      case "Cat":
        return this.props.breeds.cats
      case "Bird":
        return this.props.breeds.birds
      default:
        return ["Please Select a Pet Type"]
    }
  }

  render() {
    const statusMenuItems = ["Lost", "Found"]
    const petTypeMenuItems = ["Dog", "Cat", "Bird"]

    return (
      <div>
        <div className="input">
          <label htmlFor="address">Address: </label>
          <SearchByLocation handleChange={this.handleAddressChange} value={this.props.formState.address} placeholder="Address" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <StatusDropDown value={this.props.formState.status} name="status" setFormState={this.props.setFormState} placeHolder="Status" menuItems={statusMenuItems}/>
          <div className="input">
            <label htmlFor="name">Pet Name: </label>
            <input type="text" placeholder="Pet Name" name="name" value={this.props.formState.name} onChange={this.handleChange}/>
          </div>
          <StatusDropDown value={this.props.formState.pet_type} name="pet_type" setFormState={this.props.setFormState} placeHolder="Pet Type" menuItems={petTypeMenuItems} />
          <DynamicStatusDropDown value={this.props.formState.primary_breed} name="primary_breed" setFormState={this.props.setFormState} placeHolder="Primary Breed" menuItems={this.populateBreeds(this.props.formState.pet_type)}
              populateBreeds={this.populateBreeds}
            pet_type={this.props.formState.pet_type} breeds={this.props.breeds}/>
          <div className="input">
            <label htmlFor="primary_color">Primary Color: </label>
            <input type="text" placeholder="Primary Color" name="primary_color" value={this.props.formState.primary_color} onChange={this.handleChange} />
          </div>
          <div className="input">
            <label htmlFor="age">Age: </label>
            <input type="text" placeholder="Age" name="age" value={this.props.formState.age} onChange={this.handleChange}/>
          </div>
        <button type="submit">Submit Pet</button>
      </form>
    </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    activePet: state.activePet,
    formState: state.formState,
    breeds: state.breeds
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPet: addPet,
    setFormState: setFormState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
