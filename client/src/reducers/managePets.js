const initialState = {
  loading: false,
  pets: [],
  filtered_pets: [],
  address: '',
  activePet: {}
}

export const initialPetState = {
  id: null,
  lost: null,
  found: null,
  petType: '',
  name: '',
  primaryBreed: '',
  secondaryBreed: '',
  primaryColor: '',
  secondaryColor: '',
  sex: '',
  neutered: null,
  weight: null,
  age: '',
  url: '',
  ownerName: '',
  contact_phone: '',
  contact_email: ''
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
    case 'SET_ACTIVE_PET':
      const activePetState = Object.assign({}, state, {activePet: action.payload})
      console.log(activePetState)
      return activePetState
    default:
      return state;
  }
};
