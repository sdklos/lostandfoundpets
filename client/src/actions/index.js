export const fetchPets = () => {
  // const pets = get pets from the server
  return {
    type: 'FETCH_PETS',
    // pets
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
