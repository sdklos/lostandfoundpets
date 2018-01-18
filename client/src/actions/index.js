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

export function addPet(pet) {
  return (dispatch) => {
    dispatch({ type: 'POSTING_PET'})
  return fetch('/pets', {
    method: "POST",
    body: JSON.stringify(pet),
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    }
  }).then(response => response.json())
    .then(pet => {
    dispatch({type: 'SET_ACTIVE_PET', payload: pet })
    console.log(pet);
  }).catch((error) => {
      throw(error);
    })
  }
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
