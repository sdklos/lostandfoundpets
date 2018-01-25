import React, { Component } from 'react';
import PetForm from '../components/PetForm.js';
import { bindActionCreators } from 'redux';
import { addPet, setFormState } from '../actions/index';
import { connect } from 'react-redux';
import SearchByLocation from '../components/SearchByLocation.js';

class NewPetContainer extends Component {

  render() {
  return (
    <PetForm
      template="new"
      formState={this.props.formState}
       />
  )}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPetContainer);
