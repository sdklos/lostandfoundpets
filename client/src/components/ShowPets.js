import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ShowPets extends React.Component {

  render() {

  const DisplayPets = this.props.pets.map(pet => {
      return (
        <div key={pet.id}>
          <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
          <div>{pet.age}</div>
          <div>{pet.contact_phone}</div>
          <div>{pet.owner_name}</div>
          <div>{pet.pet_type}</div>
          <div>{pet.primary_breed}</div>
          <div>{pet.primary_color}</div>
          <div>{pet.sex}</div>
          <div>{pet.address_string}</div>
        </div>
      )
    })

    return (
      <div>{DisplayPets}</div>
    )
  }
}
