import React, { Component } from 'react';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditPetForm extends Component {

  shouldComponentUpdate(nextProps) {
    if (nextProps.pet !== this.props.pet) {
      return true
    } else {
      return false
    }
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

  render() {
    const statusMenuItems = ["Lost", "Found"]
    const petTypeMenuItems = ["Dog", "Cat", "Bird"]
    const ages = ["Baby", "Young", "Adult", "Senior"]

    return (
      <div>
        <h3>Edit Your Pet Here:</h3>
        <SearchByLocation
          handleChange={this.props.handleAddressChange.bind(this)}
          value={this.props.pet.address_string}
          placeholder="Address" />
        <form onSubmit={this.props.handleSubmit}>
          <StatusDropDown value={this.props.pet.status} name="status" setFormState={this.props.setFormState} placeHolder="Status" menuItems={statusMenuItems}/>
          <TextField
            name="name" hintText="Pet Name"
            value={this.props.pet.name}
            onChange={this.handleChange} />
          <StatusDropDown value={this.props.pet.pet_type} name="pet_type" setFormState={this.props.setFormState} placeHolder="Pet Type" menuItems={petTypeMenuItems} />
          <DynamicStatusDropDown
            value={this.props.pet.primary_breed}
            name="primary_breed"
            setFormState={this.props.setFormState}
            placeHolder="Primary Breed"
            menuItems={this.populateBreeds(this.props.pet.pet_type)}
            populateMenu={this.populateBreeds}
            pet_type={this.props.pet.pet_type}
          />
          <DynamicStatusDropDown
            value={this.props.pet.primary_color}
            name="primary_color"
            setFormState={this.props.setFormState}
            placeHolder="Primary Color"
            menuItems={this.populateColors(this.props.pet.pet_type)}
            populateMenu={this.populateColors}
            pet_type={this.props.pet.pet_type} />
          <StatusDropDown
            value={this.props.pet.age}
            name="age"
            setFormState={this.props.setFormState}
            placeHolder="Age"
            menuItems={ages}
          />
        <RaisedButton type="submit" label="Submit Pet" />
      </form>
    </div>
    )
  }

}

export default EditPetForm;
