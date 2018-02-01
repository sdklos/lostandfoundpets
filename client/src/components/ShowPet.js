import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { NavLink } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {incrementCounter} from '../actions/index.js'

class ShowPet extends Component {

  handleClick = event => {
    event.preventDefault()
    this.props.incrementCounter(this.props.pet.id)
  }



  render() {
    const pet = this.props.pet

    return (
      <Paper>
        <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
        <p>
          {pet.name} is a {pet.primary_color} {pet.primary_breed} ({pet.pet_type})
        </p>
        <p>
          Reported {pet.status} at {pet.address_string}
        </p>
        <RaisedButton type="button" onClick={this.handleClick.bind(this)} label={pet.counter} />
      </Paper>
    )
  }

  }

  const mapStateToProps = state => {
    return {

    };
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      incrementCounter: incrementCounter
    }, dispatch);
  };

  export default connect(mapStateToProps, mapDispatchToProps)(ShowPet);
