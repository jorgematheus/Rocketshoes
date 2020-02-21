import ACTIONS from '../../actions';

export default function cart(state = [], action) {
  console.log(state);
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      return [...state, action.product];
    }
    default:
      return state;
  }
}
