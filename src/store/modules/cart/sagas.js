/* eslint-disable consistent-return */
import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import { formatPrice } from '../../../util/format';

import ACTIONS from '../../actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.', {
      draggable: true,
      closeOnClick: true,
      position: 'bottom-right',
    });

    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    toast.error('Quantidade não pode ser menor que 1.', {
      draggable: true,
      closeOnClick: true,
      position: 'bottom-right',
    });
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque.', {
      draggable: true,
      closeOnClick: true,
      position: 'bottom-right',
    });
    // eslint-disable-next-line no-useless-return
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest(ACTIONS.ADD_TO_CART_REQUEST, addToCart),
  takeLatest(ACTIONS.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
