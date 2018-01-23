import React, { Component } from 'react';
import EditPetForm from '../components/EditPetForm.js';
import { connect } from 'react-redux';

class EditPetContainer extends Component {

  constructor(props) {
    super(props)
    this.props.findPetToEdit(this.props.match.params.id)
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

export default connect(mapStateToProps)(EditPetContainer)
