import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { findPet, updatePet, deletePet } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js';
import StatusDropDown from './StatusDropDown.js';
import DynamicStatusDropDown from './DynamicStatusDropDown.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class PetShow extends Component {
  constructor(props) {
    super(props);
    this.state = {isEditing: false}
    this.state = {confirmDelete: false}
    this.updatePetAddressState = this.updatePetAddressState.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
  }


  toggleEdit = event => {
    this.setState({pet: this.props.pet})
    this.setState({isEditing: !this.state.isEditing})
    }

  toggleDeleteConfirmation = event => {
    this.setState({pet: this.props.pet})
    this.setState({confirmDelete: true})
  }

  handleDeletePet = event => {
    this.props.deletePet(this.state.pet.id)
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
    const innerPet = this.state.pet
    innerPet['address_attributes'] = {}
    innerPet['address_attributes']['address'] = this.state.pet['address_string']
    const pet = {pet: innerPet}
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
        <form>
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
        <TextField
          name="contact_phone" hintText="Contact Phone"
          value={statePet.contact_phone}
          onChange={this.updatePetState} />
        <RaisedButton type="button" onClick={this.handleSubmit} label="Update Pet" />
      </form>
    </div>
      )
    } else if (this.state.confirmDelete) {
      return (
        <div>
        <h1>Are You Sure You Want To Do That?</h1>
        <br /> <br /> <br /> <br />
        <div><RaisedButton type="button" onClick={this.toggleDeleteConfirmation} label="NO!!" /></div>
        <br /><br /><br /> <br /> <br /> <br /> <br />
        <span><RaisedButton type="button" onClick={this.handleDeletePet} label="yes" /></span>
        </div>
      )
    }
    return (
      <div key={pet.id}>
      <Card>
        <CardText>
          <p>Name: {pet.name}</p>
          <p>Age: {pet.age}</p>
          <p>Pet Type: {pet.pet_type}</p>
          <p>Primary Breed: {pet.primary_breed}</p>
          <p>Primary Color: {pet.primary_color}</p>
          <p>Status: {pet.status}</p>
          <p>Reported At: {pet.address_string}</p>
          <p>Contact Phone: {pet.contact_phone}</p>
        </CardText>
          <span><RaisedButton type="button" onClick={this.toggleEdit} label="Edit Pet" /></span>
          <span><RaisedButton type="button" onClick={this.toggleDeleteConfirmation} label="Delete Pet" /></span>
      </Card>
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
    updatePet: updatePet,
    deletePet: deletePet
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetShow)
