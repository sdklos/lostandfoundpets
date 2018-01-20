const formState = {
  address_data: {
    address: '',
    address_type: ''
  },
  name: '',
  pet_type: '',
  primary_breed: '',
  primary_color: '',
  age: ''
}

const initialState = {
  loading: false,
  pets: [],
  filtered_pets: [],
  address: '',
  activePet: {},
  formState: formState
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
      const activePet = action.payload
      const activePetState = Object.assign({}, state, {activePet: activePet})
      console.log(activePetState)
      window.location.assign(`/pets/${activePet.id}`)
      return activePetState
    case 'SET_FORM_ADDRESS_STATE':
      const formAddressChange = action.payload
      const newFormAddressData = Object.assign({}, state.formState.address_data, formAddressChange)
      const newFormAddressState = Object.assign({}, state.formState, {address_data: newFormAddressData})
      const setFormAddressState = Object.assign({}, state, {formState: newFormAddressState})
      console.log(setFormAddressState)
      return setFormAddressState
    case 'SET_FORM_STATE':
      const formChange = action.payload
      const newFormState = Object.assign({}, state.formState, formChange)
      const setFormState = Object.assign({}, state, {formState: newFormState})
      console.log(setFormState)
      return setFormState
    default:
      return state;
  }
};
