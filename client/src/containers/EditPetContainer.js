import React, { Component } from 'react';
import EditPetForm from '../components/EditPetForm.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findPet } from '../actions/index';

class EditPetContainer extends Component {

  constructor(props) {
    super(props)
    this.props.findPet(this.props.match.params.id)
  }

  populateForm = () => {
    debugger
  }

  render() {

  return (
    <EditPetForm template="editing" pet={this.props.pet} />
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
