import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPets, updateAddress, updateRadius, submitLocationQuery, removeFilter, setPrimaryBreedFilter, setPetTypeFilter } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import StatusDropDown from '../components/StatusDropDown.js';
import DynamicStatusDropDown from '../components/DynamicStatusDropDown.js';
import '../App.css';
import {  DataLoadingMessage, ShowPets } from '../components/PresentationalFunctions.js'
import {Tabs, Tab} from 'material-ui/Tabs';


class PetsContainer extends Component {

  constructor(props) {
    super(props)
    this.props.fetchPets()
  }

  componentWillUpdate(nextProps) {
    this.filterPetsForDisplay(nextProps)
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

  filterPetsForDisplay = (props) => {
    if (props.filters.pet_type !== "") {
      if (props.filters.primary_breed !== "") {
        const petsForDisplay = props.pets.filter(pet => pet.primary_breed === props.filters.primary_breed)
        return petsForDisplay
        } else {
          const petsForDisplay = props.pets.filter(pet => pet.pet_type === props.filters.pet_type)
          return petsForDisplay
        }
      } else {
        const petsForDisplay = props.pets
        return petsForDisplay
      }
  }


  render() {
    const petTypeMenuItems = ["Dog", "Cat", "Bird"]

    const petsForDisplay = this.filterPetsForDisplay(this.props)
    if (this.props.isLoadingPets) {
      return (<DataLoadingMessage />)
    }

    return (
      <div>
        <h3 className="Instruction">Search for Pets</h3>
        <Tabs onChange={this.handleRemoveFilter}>
          <Tab label="Filter Pets">
            <div className="input">
              <StatusDropDown
                value={this.props.filters.pet_type}
                name="pet_type"
                setFormState={this.props.setPetTypeFilter}
                placeHolder="Filter By Pet Type"
                menuItems={petTypeMenuItems} />
                <DynamicStatusDropDown
                  className="item-1"
                  value={this.props.filters.primary_breed}
                  name="primary_breed"
                  setFormState={this.props.setPrimaryBreedFilter}
                  placeHolder="Filter By Primary Breed"
                  menuItems={this.populateBreeds(this.props.filters.pet_type)}
                  populateMenu={this.populateBreeds}
                  pet_type={this.props.filters.pet_type}
                />
              </div>
            </Tab>
            <Tab label="Search By Location">
              <div className="input">
                <TextField
                  className="item-1"
                  name="radius"
                  floatingLabelText="Enter a radius in miles"
                  floatingLabelFixed={true}
                  value={this.props.queryParams.radius}
                  onChange={this.handleRadiusChange}
                />
              <SearchByLocation
                className="item-1"
                handleChange={this.props.updateAddress}
                value={this.props.queryParams.address}
                placeholder="Enter an Address to Search"/>
            </div>
            <div className="input">
              <RaisedButton label="Search By Location" onClick={this.handleLocation.bind(this)}/>
            </div>
          </Tab>
        </Tabs>
          <RaisedButton label="View All Pets"
            onClick={this.handleRemoveFilter} />
        <ShowPets pets={petsForDisplay} />
      </div>
    )}
};

const mapStateToProps = state => {
  return {
    pets: state.pets,
    queryParams: state.queryParams,
    filters: state.filters,
    breeds: state.breeds,
    isLoading: state.loading,
    isLoadingPets: state.loadingPets
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
