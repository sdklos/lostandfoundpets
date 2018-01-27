import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetForm from '../components/PetForm.js';
import { updatePet, setFormState, findPet } from '../actions/index';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

class EditPetContainer extends Component {

  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
    this.populateFormState(this.props.pet)
  }

  populateFormState = (pet) => {
    this.props.setFormState(pet)
  }

  render() {

  return (
    <PetForm
      template="edit"
      formState={this.props.formState}
      setFormState={this.props.setFormState}
      addPet={this.props.addPet}
      breeds={this.props.breeds}
      submitPet={this.props.updatePet}
       />
  )}
}

const mapStateToProps = state => {
  return {
    pet: state.activePet,
    formState: state.formState,
    breeds: state.breeds,
    isLoading: state.loading
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updatePet: updatePet,
    findPet: findPet,
    setFormState: setFormState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPetContainer)
