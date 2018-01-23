import fetch from 'isomorphic-fetch';

export function fetchBreeds(pet_type) {
  return (dispatch) => {
    return fetch(`/breeds/${pet_type}.json`)
    .then(response => response.json())
    .then(breeds => {
      dispatch({type: 'FETCH_BREEDS', payload: breeds, name: pet_type})
    })
  }
}

export function fetchDogBreeds() {
  return (dispatch) => {
    return fetch('/breeds/dogs.json')
    .then(response => response.json())
    .then(breeds => {
      dispatch({type: 'FETCH_DOG_BREEDS', payload: breeds})
    })
  }
}

export function fetchPets() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PETS' });
    return fetch('/pets.json')
    .then(response => response.json())
    .then(pets => {
    dispatch({type: 'FETCH_PETS', payload: pets })})
  };
}

export function deletePet(pet_id) {
  return (dispatch) => {
    return fetch(`/pets/${pet_id}.json`, {
      method: "DELETE",
      body: JSON.stringify(pet_id),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(pets => {
    dispatch({type: 'FETCH_PETS', payload: pets })})
    .catch((error) => {
        throw(error);
    })
  }
}

export function updatePet(pet, id) {
  return (dispatch) => {
    dispatch({type: 'UPDATING_PET'})
    return fetch(`/pets/${id}`, {
      method: "PATCH",
      body: JSON.stringify(pet),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(pet => {
    dispatch({type: 'SET_ACTIVE_PET', payload: pet })
    console.log(pet);
    window.location.assign(`/pets/${id}`)
  }).catch((error) => {
      throw(error);
    })
  }
};

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
    window.location.assign(`/pets/${pet.id}`)
  }).catch((error) => {
      throw(error);
    })
  }
};

export function findPet(id) {
  return (dispatch) => {
    dispatch({ type: 'FINDING_PET' });
    return fetch('/pets.json')
    .then(response => response.json())
    .then(pets => {
      const pet = pets.find(pet => {
        return pet.id.toString() === id
      })
    dispatch({type: 'SET_ACTIVE_PET', payload: pet })
  })
};
}

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

export function setFormState(formState) {
  return {
    type: 'SET_FORM_STATE',
    payload: formState
  }
}
