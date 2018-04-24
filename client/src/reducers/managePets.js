const formState = {
  id: null,
  status: '',
  address_string: '',
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

const activePet = {
  status: '',
  address: {
    address: ''
  },
  address_string: '',
  name: '',
  pet_type: '',
  primary_breed: '',
  primary_color: '',
  age: '',
  contact_phone: '',

}

const initialState = {
  isEditing: false,
  confirmingDelete: false,
  loading: false,
  loadingPets: false,
  pets: [],
  queryParams: {
    address: '',
    radius: 15
  },
  activePet: activePet,
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
      const noParams = Object.assign({}, state.queryParams, {address: '', radius: 15})
      const noFilterState = Object.assign({}, state, {filters: noFilters, queryParams: noParams})
      return noFilterState
    case 'FETCH_BREEDS':
      const breeds = {}
      breeds[`${action.name}`] = Array.from(new Set(mapBreeds(action.payload)))
      const fetchBreedsState = Object.assign({}, state.breeds, breeds)
      const newBreedsState = Object.assign({}, state, {breeds: fetchBreedsState})
      return newBreedsState
    case 'LOADING':
      return Object.assign({}, state, {loading: true});
    case 'LOADING_PETS':
      return Object.assign({}, state, {loadingPets: true});
    case 'SET_EDITING_STATE':
      const editingState =  Object.assign({}, state, {isEditing: true})
      return editingState
    case 'REMOVE_EDITING_STATE':
      const updatedActivePet = action.payload
      const noEditingState = Object.assign({}, state, {isEditing: false, loading: false, activePet: updatedActivePet})
      return noEditingState
    case 'REVERT_CHANGES':
      const revertedState = Object.assign({}, state, {isEditing: false, loading: false})
      return revertedState
    case 'CONFIRM_DELETE':
      const deletingState = Object.assign({}, state, {confirmingDelete: true})
      return deletingState
    case 'REJECT_DELETE':
      const notDeletingState = Object.assign({}, state, {confirmingDelete: false})
      return notDeletingState
    case 'FETCH_PETS':
      const fetchPetsState = Object.assign({}, state, {loading: false, isEditing: false, confirmingDelete: false, pets: action.payload})
      return fetchPetsState;
    case 'QUERY_PETS':
      const filteredPetsState = Object.assign({}, state, {pets: action.payload, loadingPets: false})
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
    case 'CLEAR_FORM_STATE':
      const clearedFormState = { id: null,
        status: '',
        address_string: '',
        name: '',
        pet_type: '',
        primary_breed: '',
        primary_color: '',
        age: '',
        contact_phone: ''}
      const stateWithClearedFormState = Object.assign({}, state, { formState: clearedFormState })
      return stateWithClearedFormState
    case 'SET_PET_TYPE_FILTER':
      const petTypeChange = action.payload
      const newFilterState = Object.assign({}, state.filters, petTypeChange)
      const setFilterState = Object.assign({}, state, {filters: newFilterState})
      return setFilterState
      case 'SET_PRIMARY_BREED_FILTER':
        const primaryBreedChange = action.payload
        const newNestedFilterState = Object.assign({}, state.filters, primaryBreedChange)
        const setNestedFilterState = Object.assign({}, state, {filters: newNestedFilterState})
        return setNestedFilterState
    default:
      return state;
  }
};
