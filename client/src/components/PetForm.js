import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPet, setFormState } from '../actions/index';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';

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

  render() {

    const locationSearchInputProps = {
      value: this.props.formState.address,
      onChange: this.handleAddressChange,
      placeholder: 'Enter an Address',
      name: 'address'
    }

    const shouldFetchSuggestions = ({ value }) =>
     value.length > 2

    const AutocompleteItem = ({formattedSuggestion}) => (
      <div>
        <strong>
          {formattedSuggestion.mainText}
        </strong>{' '}
      </div>
    )

    return (
      <div className="input">
      <PlacesAutocomplete inputProps={locationSearchInputProps} renderSuggestion={AutocompleteItem} shouldFetchSuggestions={shouldFetchSuggestions} onEnterKeyDown={this.handleAddressChange}/>
      <form onSubmit={this.handleSubmit}>

        <label htmlFor="name">Pet Name: </label>
        <input type="text" placeholder="Pet Name" name="name" value={this.props.formState.name} onChange={this.handleChange}/>

        <label htmlFor="type">Pet Type: </label>
        <input type="text" placeholder="Pet Type" name="pet_type" value={this.props.formState.pet_type} onChange={this.handleChange}/>

        <label htmlFor="primary_breed">Primary Breed: </label>
        <input type="text" placeholder="Primary Breed" value={this.props.formState.primary_breed} name="primary_breed" onChange={this.handleChange}/>

        <label htmlFor="primary_color">Primary Color: </label>
        <input type="text" placeholder="Primary Color" name="primary_color" value={this.props.formState.primary_color} onChange={this.handleChange}/>

        <label htmlFor="age">Age: </label>
        <input type="text" placeholder="Age" name="age" value={this.props.formState.age} onChange={this.handleChange}/>


        <button type="submit">Submit Pet</button>
      </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    activePet: state.activePet,
    formState: state.formState
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPet: addPet,
    setFormState: setFormState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
