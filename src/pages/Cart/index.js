import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionsCart from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ products, removeFromCart, updateAmount }) {
  const productIncrement = product => {
    updateAmount(product.id, product.amount + 1);
  };

  const productDecrement = product => {
    updateAmount(product.id, product.amount - 1);
  };
  return (
    <Container>
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
                <span>{product.price}</span>
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
                <strong>R$ 258,90</strong>
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

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL </span>
          <strong>R$1920,20</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
