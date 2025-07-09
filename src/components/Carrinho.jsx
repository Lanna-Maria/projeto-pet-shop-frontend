
import React from 'react';
import { useCart } from '../context/CartContext';
import './Carrinho.css'; 

const Carrinho = () => {
  
  const { cartItems, removeFromCart } = useCart();

  
  const total = cartItems.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  
  if (cartItems.length === 0) {
    return (
      <div className="carrinho-container">
        <h2>Seu carrinho de compras</h2>
        <p className="carrinho-vazio">Seu carrinho está vazio.</p>
      </div>
    );
  }

  
  return (
    <div className="carrinho-container">
      <h2>Seu carrinho de compras 🛒</h2>
      <ul className="carrinho-lista">
        {cartItems.map((item) => (
          <li key={item.id} className="carrinho-item">
            <img src={item.imagem} alt={item.titulo} className="item-imagem" />
            <div className="item-info">
              <span className="item-titulo">{item.titulo}</span>
              <span className="item-preco">
                {item.quantity} x R$ {item.preco.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="item-remover">
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="carrinho-total">
        <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
        <button className="finalizar-compra">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Carrinho;