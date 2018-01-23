import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { findPet, updatePet } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class PetShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
    this.updatePetAddressState = this.updatePetAddressState.bind(this)
  }

  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
  }


  toggleEdit = event => {
    this.setState({pet: this.props.pet})
    this.setState({isEditing: !this.state.isEditing})
    }

  updatePetState = event => {
    const field = event.target.name;
    const pet = this.state.pet;
    pet[field] = event.target.value;
    return this.setState({pet: pet})
    console.log(this.state)
  }

  updatePetAddressState = address => {
    const pet = this.state.pet;
    pet['address_string'] = address
    return this.setState({pet: pet})
    console.log(this.state)
  }

  updateDropdownState = formState => {
    const oldPet = this.state.pet;
    const newPet = Object.assign({}, oldPet, formState)
    return this.setState({pet: newPet}, function () {
      console.log(this.state)
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const pet = this.state.pet
    pet['address_attributes'] = {}
    pet['address_attributes']['address'] = pet['address_string']
    this.props.updatePet(pet, this.props.pet.id)
    console.log(pet)
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
    const pet = this.props.pet
    const statePet = this.state.pet

    const statusMenuItems = ["Lost", "Found"]
    const petTypeMenuItems = ["Dog", "Cat", "Bird"]
    const ages = ["Baby", "Young", "Adult", "Senior"]


    if (this.state.isEditing) {
      return (
        <div>
        <h3>Edit Your Pet Here:</h3>
        <SearchByLocation
          handleChange={this.updatePetAddressState}
          value={statePet.address_string}
          placeholder="Address" />
        <form onSubmit={this.handleSubmit}>
          <StatusDropDown
            value={statePet.status}
            name="status"
            setFormState={this.updateDropdownState.bind(this)}
            placeHolder="Status"
            menuItems={statusMenuItems}/>
          <TextField
            name="name" hintText="Pet Name"
            value={statePet.name}
            onChange={this.updatePetState} />
          <StatusDropDown
            value={statePet.pet_type}
            name="pet_type"
            setFormState={this.updateDropdownState}
            placeHolder="Pet Type"
            menuItems={petTypeMenuItems} />
          <DynamicStatusDropDown
            value={statePet.primary_breed}
            name="primary_breed"
            setFormState={this.updateDropdownState}
            placeHolder="Primary Breed"
            menuItems={this.populateBreeds(statePet.pet_type)}
            populateMenu={this.populateBreeds}
            pet_type={statePet.pet_type}
          />
          <DynamicStatusDropDown
            value={statePet.primary_color}
            name="primary_color"
            setFormState={this.updateDropdownState}
            placeHolder="Primary Color"
            menuItems={this.populateColors(statePet.pet_type)}
            populateMenu={this.populateColors}
            pet_type={statePet.pet_type} />
          <StatusDropDown
            value={statePet.age}
            name="age"
            setFormState={this.updateDropdownState}
            placeHolder="Age"
            menuItems={ages}
          />
        <RaisedButton type="submit" label="Submit Pet" />
      </form>
    </div>
      )
    }
    return (
      <div key={pet.id}>
          <div>{pet.name}</div>
          <div>{pet.age}</div>
          <div>{pet.contact_phone}</div>
          <div>{pet.pet_type}</div>
          <div>{pet.primary_breed}</div>
          <div>{pet.primary_color}</div>
          <div>{pet.address_string}</div>
          <button onClick={this.toggleEdit}>Edit Pet</button>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pet: state.activePet,
    breeds: state.breeds
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findPet: findPet,
    updatePet: updatePet
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetShow)
