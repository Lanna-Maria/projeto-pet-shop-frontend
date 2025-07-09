import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// NOSSAS PÁGINAS E COMPONENTES
import Header from './components/Header';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Agendamento from './components/Agendamento';
import Produtos from './components/Produtos';
import Carrinho from './components/Carrinho';
import Servicos from './components/Servicos';
import Contatos from './components/Contatos';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Produto from './components/Produto';

// IMPORTAÇÕES GLOBAIS
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext'; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <CartProvider>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/serviços" element={<Servicos />} />
          <Route path="/contato" element={<Contatos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="#" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider> {/* <-- PASSO 3: FECHE O PROVEDOR AQUI */}
    </Router>
  );
}

export default App;