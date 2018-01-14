const initialState = {
  pets: [],
  filtered_pets: []
}

export default function managePets(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, { pets: state.pets.concat(action.pet) });
    default:
      console.log(state)
      return state;
  }
};
