import React from 'react';
import { NavLink } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import PetShow from './ShowPets.js'

export default class ShowPets extends React.Component {

  render() {

  const DisplayPets = this.props.pets.map(pet => {
      return (
        <div key={pet.id}>
          <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
        </div>
      )
    })

    return (
      <div>{DisplayPets}</div>
    )
  }
}
