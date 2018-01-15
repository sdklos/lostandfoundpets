import React from 'react';

const ShowPets = (props) => {
  function displayCats(){
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
        </div>
      )
    })
  }
  return (
    <div>{displayCats()}</div>
  )
}

export default ShowPets
