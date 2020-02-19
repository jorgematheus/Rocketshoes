import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="http://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_zoom1.jpg"
          alt="tenis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={20} color="#fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
