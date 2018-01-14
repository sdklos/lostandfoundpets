import fetch from 'isomorphic-fetch';

export function fetchPets() {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_PETS_REQUEST' });
    return fetch('/pets.json')
    .then(response => response.json())
    .then(pets => console.log(pets))
  };
}

export const addPet = (pet) => {
  return {
    type: 'ADD_PET',
    pet
  };
};

export const filterPetsAction = () => {

  return {
    type: 'FILTER_PETS',
    // filtered_pets
  }
}
