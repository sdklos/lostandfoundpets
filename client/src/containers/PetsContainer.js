import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPets, updateAddress, updateRadius, submitLocationQuery, removeFilter, setPrimaryBreedFilter, setPetTypeFilter } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js'
import ShowPets from '../components/ShowPets.js'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import StatusDropDown from '../components/StatusDropDown.js';
import DynamicStatusDropDown from '../components/DynamicStatusDropDown.js';

class PetsContainer extends Component {

  constructor(props) {
    super(props)
    this.props.fetchPets()
  }

  handleLocation = event => {
    this.props.submitLocationQuery(this.props.queryParams)
  }

  handleRadiusChange = event => {
    var radius = event.target.value
    this.props.updateRadius(radius)
  }

  handleRemoveFilter = event => {
    this.props.removeFilter()
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

    const petTypeMenuItems = ["Dog", "Cat", "Bird"]

    function ConditionalRender(props) {
      const isFiltering = props.isFiltering
      if (isFiltering === true) {
        return <ShowPets pets={props.filtered_pets} />
      } else {
        return <ShowPets pets={props.pets} />
    }
  }

    return (
      <div>
        <h1>Search for Pets</h1>
        <div className="input">
          <SearchByLocation handleChange={this.props.updateAddress} value={this.props.queryParams.address} placeholder="Enter an Address to Search"/>
          <StatusDropDown
            value={this.props.filters.pet_type}
            name="pet_type"
            setFormState={this.props.setPetTypeFilter}
            placeHolder="Filter By Pet Type"
            menuItems={petTypeMenuItems} />
          <DynamicStatusDropDown
            value={this.props.filters.primary_breed}
            name="primary_breed"
            setFormState={this.props.setPrimaryBreedFilter}
            placeHolder="Filter By Primary Breed"
            menuItems={this.populateBreeds(this.props.filters.pet_type)}
            populateMenu={this.populateBreeds}
            pet_type={this.props.filters.pet_type}
          />
        </div>
        <div className="input">
          <TextField
            name="radius"
            floatingLabelText="Enter a radius in miles (default is 15)"
            floatingLabelFixed={true}
            value={this.props.queryParams.radius}
            onChange={this.handleRadiusChange}
          />
          <RaisedButton label="Search By Location" onClick={this.handleLocation.bind(this)}/>
          <RaisedButton label="View All Pets"
            onClick={this.handleRemoveFilter} />
        </div>
        <ConditionalRender
          isFiltering={this.props.isFiltering}
          pets={this.props.pets}
          filtered_pets={this.props.filtered_pets}
           />
      </div>
    )}
};

const mapStateToProps = state => {
  return {
    pets: state.pets,
    filtered_pets: state.filtered_pets,
    queryParams: state.queryParams,
    isFiltering: state.filtering,
    filters: state.filters,
    breeds: state.breeds
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPets: fetchPets,
    updateAddress: updateAddress,
    updateRadius: updateRadius,
    submitLocationQuery: submitLocationQuery,
    removeFilter: removeFilter,
    setPrimaryBreedFilter: setPrimaryBreedFilter,
    setPetTypeFilter: setPetTypeFilter
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
