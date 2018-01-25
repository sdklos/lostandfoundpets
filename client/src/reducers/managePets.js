const formState = {
  status: '',
  address_attributes: {
    address: ''
  },
  name: '',
  pet_type: '',
  primary_breed: '',
  primary_color: '',
  age: '',
  contact_phone: ''
}

const breeds = {
  dogs: [],
  cats: [],
  birds: []
}

const initialState = {
  filtering: false,
  loading: false,
  pets: [],
  filtered_pets: [],
  queryParams: {
    address: '',
    radius: 15
  },
  activePet: {},
  formState: formState,
  filters: {
    pet_type: '',
    primary_breed: ''
  },
  breeds: breeds
}

function mapBreeds(breeds) {
  return breeds.map(breed => {
    return breed.name
  })
}

export default function managePets(state = initialState, action) {
  switch(action.type) {
    case 'REMOVE_FILTER':
      const noFilters = Object.assign({}, state.filters, {pet_type: '', primary_breed: ''})
      const noFilterState = Object.assign({}, state, {filtering: false, filters: noFilters})
      return noFilterState
    case 'FETCH_BREEDS':
      const breeds = {}
      breeds[`${action.name}`] = mapBreeds(action.payload)
      const fetchBreedsState = Object.assign({}, state.breeds, breeds)
      const newBreedsState = Object.assign({}, state, {breeds: fetchBreedsState})
      return newBreedsState
    case 'LOADING':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_PETS':
      const fetchPetsState = Object.assign({}, state, {loading: false, filtering: false, pets: action.payload})
      return fetchPetsState;
    case 'QUERY_PETS':
      const filteredPetsState = Object.assign({}, state, {loading: false, filtering: true, filtered_pets: action.payload})
      return filteredPetsState
    case 'UPDATE_ADDRESS':
      const addressQueryState = Object.assign({}, state.queryParams, {address: action.payload})
      const addressUpdateState = Object.assign({}, state, {queryParams: addressQueryState})
      return addressUpdateState
      case 'UPDATE_RADIUS':
        const radiusQueryState = Object.assign({}, state.queryParams, {radius: action.payload})
        const radiusUpdateState = Object.assign({}, state, {queryParams: radiusQueryState})
        return radiusUpdateState
    case 'SET_ACTIVE_PET':
      const activePet = action.payload
      const activePetState = Object.assign({}, state, {loading: false, activePet: activePet})
      return activePetState
    case 'SET_FORM_STATE':
      const formChange = action.payload
      const newFormState = Object.assign({}, state.formState, formChange)
      const setFormState = Object.assign({}, state, {formState: newFormState})
      return setFormState
    case 'SET_PET_TYPE_FILTER':
      const petTypeChange = action.payload
      const newFilterState = Object.assign({}, state.filters, petTypeChange)
      const filteredTypePets = state.pets.filter(pet => pet.pet_type === newFilterState.pet_type)
      const setFilterState = Object.assign({}, state, {filters: newFilterState, filtered_pets: filteredTypePets, filtering: true})
      return setFilterState
      case 'SET_PRIMARY_BREED_FILTER':
        const primaryBreedChange = action.payload
        const newNestedFilterState = Object.assign({}, state.filters, primaryBreedChange)
        const filteredBreedPets = state.pets.filter(pet => pet.primary_breed === newNestedFilterState.primary_breed)
        const setNestedFilterState = Object.assign({}, state, {filters: newNestedFilterState, filtered_pets: filteredBreedPets, filtering: true})
        return setNestedFilterState
    default:
      return state;
  }
};
