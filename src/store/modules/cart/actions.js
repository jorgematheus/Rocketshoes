import ACTIONS from '../../actions';

export function addToCartRequest(id) {
  return {
    type: ACTIONS.ADD_TO_CART_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: ACTIONS.ADD_TO_CART_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: ACTIONS.REMOVE_FROM_CART,
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: ACTIONS.UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: ACTIONS.UPDATE_AMOUNT_SUCCESS,
    id,
    amount,
  };
}
