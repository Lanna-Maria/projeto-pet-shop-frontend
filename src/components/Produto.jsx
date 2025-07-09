import React from 'react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify'; 
import './Produto.css';

function Produto({ produto }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(produto);
    
    toast.success(`"${produto.titulo}" foi adicionado ao carrinho!`);
  };

  return (
    <div className="produto-card">
      <img src={produto.imagem} alt={produto.titulo} className="produto-imagem" />
      <h3 className="produto-titulo">{produto.titulo}</h3>
      <p className="produto-preco">Preço: R$ {produto.preco.toFixed(2).replace('.', ',')}</p>
      <p className="produto-descricao">{produto.descricao}</p>
      <button onClick={handleAddToCart} className="produto-botao-carrinho">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default Produto;