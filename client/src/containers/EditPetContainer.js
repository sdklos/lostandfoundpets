import React, { Component } from 'react';
import PetForm from '../components/PetForm.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findPet } from '../actions/index';

class EditPetContainer extends Component {

  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
  }

  render() {
  return (
    <PetForm template="editing"/>
  )}
}

const mapStateToProps = state => {
  return {
    pet: state.activePet
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findPet: findPet
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPetContainer)
