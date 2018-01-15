import React, { Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';

class PetForm extends Component {
  handleSubmit(pet) {
    // dispatch
  }

  render() {
    return (
      <Form
        model="pet"
        onSubmit={(pet) => this.handleSubmit(pet)}
      >
        <label htmlFor="pet.name">Pet Name:</label>
        <Control.text model="pet.name" id="pet.name" />

        <button type="submit">Submit Pet</button>
      </Form>
    )
  }
}

export default UserForm;
