import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js'
import ShowPets from '../components/ShowPets.js'
import { deletePet } from '../actions/index.js'
import { updateAddress } from '../actions/index';

class PetsContainer extends Component {

  constructor(props) {
    super(props)
    this.props.fetchPets()
  }

  render() {
    return (
      <div>
        <h1>Search for Pets</h1>
        <SearchByLocation handleChange={this.props.updateAddress} value={this.props.address} placeholder="Enter an Address to Search"/>
        <ShowPets pets={this.props.pets} deletePet={this.props.deletePet} />
      </div>
    )}
};

const mapStateToProps = state => {
  return {
    pets: state.pets,
    address: state.address
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPets: fetchPets,
    updateAddress: updateAddress,
    deletePet: deletePet
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
