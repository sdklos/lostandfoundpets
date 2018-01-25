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
    dispatch({ type: 'LOADING' });
    return fetch('/pets.json')
    .then(response => response.json())
    .then(pets => {
    dispatch({type: 'FETCH_PETS', payload: pets })})
  };
}

export function deletePet(pet_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`/pets/${pet_id}.json`, {
      method: "DELETE",
      body: JSON.stringify(pet_id),
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
    .then(pets => {
    dispatch({type: 'FETCH_PETS', payload: pets })
    window.location.assign(`/`)
  })
    .catch((error) => {
        throw(error);
    })
  }
}

export function updatePet(pet, id) {
  return (dispatch) => {
    dispatch({type: 'LOADING'})
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
    dispatch({ type: 'LOADING'})
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
    window.location.assign(`/pets/${pet.id}`)
  }).catch((error) => {
      throw(error);
    })
  }
};

export function findPet(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    return fetch(`/pets/${id}`)
    .then(response => response.json())
    .then(pet => {
    dispatch({type: 'SET_ACTIVE_PET', payload: pet })
    if (window.location.pathname !== `/pets/${pet.id}`){
        window.location.assign(`/pets/${pet.id}`)
    }
  }).catch((error) => {
      throw(error);
    })
  };
}

export function submitLocationQuery(queryParams) {
  const address = queryParams.address
  const radius = queryParams.radius
  return(dispatch) => {
    dispatch({ type: 'LOADING_PETS' });
    return fetch(`/pets/query?address=${queryParams.address}&radius=${queryParams.radius}.json`)
    .then(response => response.json())
    .then(pets => {
    dispatch({type: 'QUERY_PETS', payload: pets })})
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

export function updateRadius(radius) {
  return {
    type: 'UPDATE_RADIUS',
    payload: radius
  }
}

export function setFormState(formState) {
  return {
    type: 'SET_FORM_STATE',
    payload: formState
  }
}

export function setPetTypeFilter(filterState) {
  return {
    type: 'SET_PET_TYPE_FILTER',
    payload: filterState
  }
}

export function setPrimaryBreedFilter(filterState) {
  return {
    type: 'SET_PRIMARY_BREED_FILTER',
    payload: filterState
  }
}

export function removeFilter() {
  return {
    type: 'REMOVE_FILTER'
  }
}
