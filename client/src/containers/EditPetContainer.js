import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetForm from '../components/PetForm.js';
import { updatePet, setFormState, findPet, revertChanges } from '../actions/index';
import { bindActionCreators } from 'redux';

class EditPetContainer extends Component {

  componentDidMount(){
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
      breeds={this.props.breeds}
      submitPet={this.props.updatePet}
      removeEditingState={this.props.revertChanges}
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
    setFormState: setFormState,
    revertChanges: revertChanges
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPetContainer)
