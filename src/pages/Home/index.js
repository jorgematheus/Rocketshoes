import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';

import * as ActionsCart from '../../store/modules/cart/actions';

import api from '../../services/api';

import { ProductList, Loading } from './styles';

import Spinner from '../../components/Spinner/index';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
    loading: false,
    loadingAddToCart: false,
    indexProduct: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await api.get(`/products`);

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    if (response.data) {
      this.setState({ products: data, loading: false });
    }
  }

  handleAddProduct = (id, index) => {
    this.setState({ loadingAddToCart: true, indexProduct: index });
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { products, loading, loadingAddToCart, indexProduct } = this.state;
    const { amount } = this.props;
    return (
      <>
        <ProductList>
          {products.map((product, index) => (
            <li key={String(product.id)}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                onClick={() => this.handleAddProduct(product.id, index)}
              >
                <div>
                  {loadingAddToCart &&
                  products.findIndex(p => p.id === product.id) ===
                    indexProduct ? (
                    <Spinner fontSize={20} />
                  ) : (
                    <MdAddShoppingCart size={20} color="#fff" />
                  )}
                  {amount[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
        {loading ? (
          <Loading>
            <Spinner fontSize={40} />

            <span>Carregando...</span>
          </Loading>
        ) : (
          ''
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCart, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
