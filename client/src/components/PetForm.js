import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPet, setFormState } from '../actions/index';
import { connect } from 'react-redux';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PetForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const pet = {pet: this.props.formState}
    this.props.addPet(pet)
  }

  handleChange = event => {
    var change = {}
    change[event.target.name] = event.target.value
    this.props.setFormState(change)
  }

  handleAddressChange = address => {
    var addressChange = {address_attributes: {address: ''}}
    addressChange['address_attributes']['address'] = address
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

    return (
      <div>
        <h3>Add Your Pet Here:</h3>
      <div className="input">
        <SearchByLocation
          handleChange={this.handleAddressChange}
          value={this.props.formState.address_attributes.address}
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
          <RaisedButton type="submit" label="Submit Pet" />
        </div>
      </form>
    </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    formState: state.formState,
    breeds: state.breeds,
    activePet: state.active
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPet: addPet,
    setFormState: setFormState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
