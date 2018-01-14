const initialState = {
  loading: false,
  pets: [],
  filtered_pets: []
}

export default function managePets(state = initialState, action) {
  switch(action.type) {
    case 'LOADING_PETS':
      return Object.assign({}, state, {loading: true});
    case 'FETCH_PETS':
      const newState = Object.assign({}, state, {loading: false, pets: action.payload})
      console.log(newState)
      return newState;
    case 'ADD_PET':
      return Object.assign({}, state, { pets: state.pets.concat(action.pet) });
    default:
      console.log(state)
      return state;
  }
};
