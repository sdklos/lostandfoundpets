import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
// import components to render

class PetsContainer extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {

    return (
      <div>
        <h1>Search for Pets</h1>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
