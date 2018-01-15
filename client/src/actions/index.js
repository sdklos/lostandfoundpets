import fetch from 'isomorphic-fetch';

export function fetchPets() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PETS' });
    return fetch('/pets.json')
    .then(response => response.json())
    .then(pets => {
    dispatch({type: 'FETCH_PETS', payload: pets })})
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

export function updateAddress(address) {
  return {
    type: 'UPDATE_ADDRESS',
    payload: address
  }
}
