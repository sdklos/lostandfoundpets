import React, { Component } from 'react';
import PetForm from '../components/PetForm.js';
import { bindActionCreators } from 'redux';
import { addPet, setFormState, clearFormState } from '../actions/index';
import { connect } from 'react-redux';

class NewPetContainer extends Component {

  componentDidMount(){
    this.props.clearFormState()
  }

  render() {
  return (
    <PetForm
      template="new"
      formState={this.props.formState}
      setFormState={this.props.setFormState}
      submitPet={this.props.addPet}
      breeds={this.props.breeds}
       />
  )}
}

const mapStateToProps = state => {
  return {
    formState: state.formState,
    breeds: state.breeds,
    isLoading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPet: addPet,
    setFormState: setFormState,
    clearFormState: clearFormState
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPetContainer);
