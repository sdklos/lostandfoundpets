import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { findPet } from '../actions/index';

class PetShow extends React.Component {
  componentDidMount(){
    this.props.findPet(this.props.match.params.id)
  }

  render() {
    const pet = this.props.pet
    return (
      <div key={pet.id}>
          <div>{pet.name}</div>
          <div>{pet.age}</div>
          <div>{pet.contact_phone}</div>
          <div>{pet.owner_name}</div>
          <div>{pet.pet_type}</div>
          <div>{pet.primary_breed}</div>
          <div>{pet.primary_color}</div>
          <div>{pet.sex}</div>
        </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(PetShow)
