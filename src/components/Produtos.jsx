import React, { useState, useMemo } from 'react';
import Produto from './Produto';
import './Produtos.css';

function Produtos() {
  const todosOsProdutos = [
    {
      id: 1,
      titulo: 'Golden Special',
      preco: 126.0,
      descricao:
        'Ração completa para cães adultos de todas as raças. Sabor frango e carne.',
      imagem:
        'https://www.petz.com.br/blog/wp-content/uploads/2019/06/racao-canina.jpg',
    },
    // Adicione mais produtos aqui se desejar
  ];

  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [ordenacao, setOrdenacao] = useState('nenhum');

  const produtosExibidos = useMemo(() => {
    let produtosFiltrados = todosOsProdutos.filter(
      (produto) =>
        produto.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(termoPesquisa.toLowerCase()),
    );

    switch (ordenacao) {
      case 'mais-barato':
        produtosFiltrados.sort((a, b) => a.preco - b.preco);
        break;
      case 'mais-caro':
        produtosFiltrados.sort((a, b) => b.preco - a.preco);
        break;
      default:
        break;
    }
    return produtosFiltrados;
  }, [todosOsProdutos, termoPesquisa, ordenacao]);

  return (
    <div className="app-container">
      <section className="sectionprodutos">
        <h2 align="center" className="h2produtos">
          🐾 Nossos Produtos
        </h2>

        <div className="filtros-container">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="barra-pesquisa"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />

          <select
            className="dropdown-ordenacao"
            value={ordenacao}
            onChange={(e) => setOrdenacao(e.target.value)}
          >
            <option value="nenhum">Relevância (Padrão)</option>
            <option value="mais-barato">Preço: Do mais barato</option>
            <option value="mais-caro">Preço: Do mais caro</option>
          </select>
        </div>

        <div className="produtos-lista">
          {produtosExibidos.length > 0 ? (
            produtosExibidos.map(produto => (
              <Produto
                key={produto.id}
                produto={produto}
              />
            ))
          ) : (
            <p className="nenhum-produto-encontrado">
              Nenhum produto encontrado com a pesquisa ou filtros aplicados.
            </p>
          )}
        </div>
      </section>

      {/* A SEÇÃO DO CARRINHO ESTÁTICO FOI REMOVIDA DAQUI */}

    </div>
  );
}

export default Produtos;