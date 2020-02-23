import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import * as ActionsCart from '../../store/modules/cart/actions';

import emptyCart from '../../assets/images/emptycart.png';

import { Container, ProductTable, Total, CartEmpty } from './styles';

function Cart({ products, total, removeFromCart, updateAmountRequest }) {
  const productIncrement = product => {
    updateAmountRequest(product.id, product.amount + 1);
  };

  const productDecrement = product => {
    updateAmountRequest(product.id, product.amount - 1);
  };
  return (
    <Container>
      {products.length > 0 ? (
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{formatPrice(product.price)}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      onClick={() => productDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} color="#7159c1" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button
                      type="button"
                      onClick={() => productIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} color="#7159c1" />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button type="button">
                    <MdDelete
                      size={20}
                      color="#7159c1"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      ) : (
        ''
      )}

      {products.length === 0 ? (
        <CartEmpty>
          <img src={emptyCart} />

          <span>O seu carrinho está vazio!</span>
        </CartEmpty>
      ) : (
        ''
      )}

      {products.length > 0 ? (
        <footer>
          <button type="button">Finalizar pedido</button>

          <Total>
            <span>TOTAL </span>
            <strong>{total}</strong>
          </Total>
        </footer>
      ) : (
        ''
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.amount * product.price),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
