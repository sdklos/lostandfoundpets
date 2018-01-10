export default function managePets(state = { pets: [],
}, action) {
  switch(action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, { pets: state.pets.concat(action.pet) });
    default:
      return state;
  }
};
