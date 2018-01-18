import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { addPet } from '../actions/index';
import { connect } from 'react-redux';
import PlacesAutocomplete from 'react-places-autocomplete';

class PetForm extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const pet = {pet: this.state}
    this.props.addPet(pet)
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {

    const locationSearchInputProps = {
      value: this.state.address,
      onChange: this.handleChange,
      placeholder: 'Enter an Address',
      name: 'address'
    }

    const shouldFetchSuggestions = ({ value }) => value.length > 2

    const AutocompleteItem = ({formattedSuggestion}) => (
      <div>
        <strong>
          {formattedSuggestion.mainText}
        </strong>{' '}
      </div>
    )

    return (
      <div className="input">
      <PlacesAutocomplete inputProps={locationSearchInputProps} renderSuggestion={AutocompleteItem} shouldFetchSuggestions={shouldFetchSuggestions} onEnterKeyDown={this.handleChange}/>
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
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    activePet: state.activePet
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPet: addPet
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetForm);
