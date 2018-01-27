import React, { Component } from 'react';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class PetForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const pet = {pet: this.props.formState}
    pet['pet']['address_attributes'] = {}
    pet['pet']['address_attributes']['address'] = this.props.formState.address_string
    this.props.submitPet(pet, pet.pet.id)
  }

  handleChange = event => {
    var change = {}
    change[event.target.name] = event.target.value
    this.props.setFormState(change)
  }

  handleAddressChange = address => {
    var addressChange = {address_string: ''}
    addressChange['address_string'] = address
    this.props.setFormState(addressChange)
  }

  toggleEditing = event => {
    this.props.removeEditingState()
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

  populateColors = (pet_type) => {
    const dogAndCatColors = ["Brown", "Red", "Yellow", "White", "Black", "Blue", "Grey", "Cream", "Tan", "Orange"]
    const otherColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "White", "Grey", "Pink", "Brown"]
    if (pet_type === "Dog" || pet_type === "Cat") {
      return dogAndCatColors
    } else if (pet_type === "Bird") {
        return otherColors
      } else {
        return ["Please Select a Pet Type"]
    }
  }

  addressPlaceholder = (pet) => {
    if (pet.address.address !== undefined) {
      return pet.address.address
    } else {
      return "Address"
    }
  }

  render() {
    const statusMenuItems = ["Lost", "Found"]
    const petTypeMenuItems = ["Dog", "Cat", "Bird"]
    const ages = ["Baby", "Young", "Adult", "Senior"]

    if (this.props.isLoading === true) {
      return (<h1>Please Wait While The Data Is Loaded</h1>)
    }

    return (
      <div>
        <h3>{this.props.template === "new" ? 'Add' : 'Edit'} Your Pet Here:</h3>
      <div className="input">
        <SearchByLocation
          handleChange={this.handleAddressChange}
          value={this.props.formState.address_string}
          placeholder="Address" />
      </div>
        <form className="input" onSubmit={this.handleSubmit}>
          <StatusDropDown value={this.props.formState.status} name="status" setFormState={this.props.setFormState} placeHolder="Status" menuItems={statusMenuItems}/>
          <TextField name="name" hintText="Pet Name" value={this.props.formState.name} onChange={this.handleChange} />
          <StatusDropDown value={this.props.formState.pet_type} name="pet_type" setFormState={this.props.setFormState} placeHolder="Pet Type" menuItems={petTypeMenuItems} />
          <DynamicStatusDropDown value={this.props.formState.primary_breed} name="primary_breed" setFormState={this.props.setFormState} placeHolder="Primary Breed" menuItems={this.populateBreeds(this.props.formState.pet_type)}
              populateMenu={this.populateBreeds}
            pet_type={this.props.formState.pet_type} />
          <DynamicStatusDropDown value={this.props.formState.primary_color} name="primary_color" setFormState={this.props.setFormState} placeHolder="Primary Color" menuItems={this.populateColors(this.props.formState.pet_type)} populateMenu={this.populateColors} pet_type={this.props.formState.pet_type} />
          <StatusDropDown value={this.props.formState.age} name="age" setFormState={this.props.setFormState} placeHolder="Age" menuItems={ages} />
          <TextField name="contact_phone" hintText="Contact Phone" value={this.props.formState.contact_phone} onChange={this.handleChange} />
        <div className="input">
          <RaisedButton type="button" onClick={this.handleSubmit} label="Submit Pet" />
        </div>
        {this.props.template === 'edit' ?
          <RaisedButton type="button" onClick={this.toggleEditing} label="Discard Edits" /> : ''
        }
      </form>
    </div>
    )
  }

}
