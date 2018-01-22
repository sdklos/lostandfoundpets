const formState = {
  status: '',
  address_attributes: {
    address: ''
  },
  name: '',
  pet_type: '',
  primary_breed: '',
  primary_color: '',
  age: ''
}

const breeds = {
  dogs: [],
  cats: [],
  birds: []
}

const initialState = {
  loading: false,
  pets: [],
  filtered_pets: [],
  address: '',
  activePet: {},
  formState: formState,
  breeds: breeds
}

function mapBreeds(breeds) {
  return breeds.map(breed => {
    return breed.name
  })
}

export default function managePets(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BREEDS':
      const breeds = {}
      breeds[`${action.name}`] = mapBreeds(action.payload)
      const fetchBreedsState = Object.assign({}, state.breeds, breeds)
      const newBreedsState = Object.assign({}, state, {breeds: fetchBreedsState})
      return newBreedsState
    case 'LOADING_PETS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_PETS':
      const fetchPetsState = Object.assign({}, state, {loading: false, pets: action.payload})
      return fetchPetsState;
    case 'UPDATE_ADDRESS':
      const addressUpdateState = Object.assign({}, state, {address: action.payload})
      return addressUpdateState
    case 'SET_ACTIVE_PET':
      const activePet = action.payload
      const activePetState = Object.assign({}, state, {activePet: activePet})
      return activePetState
    case 'SET_FORM_STATE':
      const formChange = action.payload
      const newFormState = Object.assign({}, state.formState, formChange)
      const setFormState = Object.assign({}, state, {formState: newFormState})
      return setFormState
    default:
      return state;
  }
};
