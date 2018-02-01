import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findPet, updatePet, deletePet, setEditingState, confirmDelete, rejectDelete } from '../actions/index';

import EditPetContainer from '../containers/EditPetContainer';

import { ConfirmDelete, PetCard } from '../components/PresentationalFunctions.js'

class PetShow extends Component {

  componentDidMount(){
    //this.props.findPet(this.props.match.params.id)
  }


  toggleEdit = event => {
    this.props.setEditingState()
    }

  confirmDelete = event => {
    this.props.confirmDelete()
  }

  rejectDelete = event => {
    this.props.rejectDelete()
  }

  handleDeletePet = event => {
    this.props.deletePet(this.props.pet.id)
  }


  render() {

    if (this.props.isEditing) {
      return (<EditPetContainer match={this.props.match}/>)
    } else if (this.props.confirmingDelete) {
      return (
        <ConfirmDelete onConfirm={this.handleDeletePet} onReject={this.rejectDelete} />
      )
    }
    return (
      <PetCard
        pet={this.props.pet}
        onClickEdit={this.toggleEdit}
        onClickDelete={this.confirmDelete}
     />
    )
  }
}

const mapStateToProps = state => {
  return {
    pet: state.activePet,
    breeds: state.breeds,
    isEditing: state.isEditing,
    confirmingDelete: state.confirmingDelete
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    findPet: findPet,
    updatePet: updatePet,
    deletePet: deletePet,
    setEditingState: setEditingState,
    confirmDelete: confirmDelete,
    rejectDelete: rejectDelete
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetShow)
