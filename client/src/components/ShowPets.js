import React from 'react';
import { NavLink } from 'react-router-dom';

const ShowPets = (props) => {
  function displayPets(){
    return props.pets.map(pet => {
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
          <NavLink to={`/pets/${pet.id}`}>View {pet.name}</NavLink>
        </div>
      )
    })
  }
  return (
    <div>{displayPets()}</div>
  )
}

export default ShowPets
