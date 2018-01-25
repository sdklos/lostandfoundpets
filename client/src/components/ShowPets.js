import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Paper from 'material-ui/Paper';

export default class ShowPets extends React.Component {

  render() {

  const DisplayPets = this.props.pets.map(pet => {
      return (
        <Paper>
        <div className="item-1" key={pet.id}>
          <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
          <p>
            {pet.name} is a {pet.primary_color} {pet.primary_breed} ({pet.pet_type})
          </p>
          <p> Reported {pet.status} at {pet.address_string}
          </p>
        </div>
        </Paper>
      )
    })

    return (
      <div className="container-1">{DisplayPets}</div>
    )
  }
}
