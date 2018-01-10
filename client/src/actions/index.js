export function fetchPets() {
  // const pets = get pets from the server
  return {
    type: 'FETCH_PETS',
    pets
  };
}

export function addPet(pet){
  return {
    type: 'ADD_PET',
    pet
  };
};

export function filterPets() {

  return {
    type: 'FILTER_PETS',
    filtered_pets
  }
}
