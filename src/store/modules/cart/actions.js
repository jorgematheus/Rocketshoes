import ACTIONS from '../../actions';

export function addToCart(product) {
  return {
    type: ACTIONS.ADD_TO_CART,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: ACTIONS.REMOVE_FROM_CART,
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: ACTIONS.UPDATE_AMOUNT,
    id,
    amount,
  };
}
