import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findPet, updatePet, deletePet, setEditingState, confirmDelete, rejectDelete } from '../actions/index';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';
import EditPetContainer from '../containers/EditPetContainer';

class PetShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
  }


  toggleEdit = event => {
    this.props.setEditingState()
    }

  ConfirmDelete = event => {
    this.props.confirmDelete()
  }

  rejectDelete = event => {
    this.props.rejectDelete()
  }

  handleDeletePet = event => {
    this.props.deletePet(this.props.pet.id)
  }


  render() {
    const pet = this.props.pet

    if (this.props.isEditing) {
      return (<EditPetContainer match={this.props.match}/>)
    } else if (this.props.confirmingDelete) {
      return (
        <div>
        <h1>Are You Sure You Want To Do That?</h1>
        <br /> <br /> <br /> <br />
        <div><RaisedButton type="button" onClick={this.rejectDelete} label="NO!!" /></div>
        <br /><br /><br /> <br /> <br /> <br /> <br />
        <span><RaisedButton type="button" onClick={this.handleDeletePet} label="yes" /></span>
        </div>
      )
    }
    return (
      <div key={pet.id}>
      <Card>
        <CardText>
          <p>Name: {pet.name}</p>
          <p>Age: {pet.age}</p>
          <p>Pet Type: {pet.pet_type}</p>
          <p>Primary Breed: {pet.primary_breed}</p>
          <p>Primary Color: {pet.primary_color}</p>
          <p>Status: {pet.status}</p>
          <p>Reported At: {pet.address_string}</p>
          <p>Contact Phone: {pet.contact_phone}</p>
        </CardText>
          <span><RaisedButton type="button" onClick={this.toggleEdit} label="Edit Pet" /></span>
          <span><RaisedButton type="button" onClick={this.ConfirmDelete} label="Delete Pet" /></span>
      </Card>
      </div>
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
