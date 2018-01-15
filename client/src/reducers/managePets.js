const initialState = {
  loading: false,
  pets: [],
  filtered_pets: [],
  address: ''
}

export default function managePets(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_PETS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_PETS':
      const fetchPetsState = Object.assign({}, state, {loading: false, pets: action.payload})
      console.log(fetchPetsState)
      return fetchPetsState;
    case 'UPDATE_ADDRESS':
      const addressUpdateState = Object.assign({}, state, {address: action.payload})
      console.log(addressUpdateState)
      return addressUpdateState
    case 'ADD_PET':
      return Object.assign({}, state, { pets: state.pets.concat(action.pet) });
    default:
      console.log(state)
      return state;
  }
};
