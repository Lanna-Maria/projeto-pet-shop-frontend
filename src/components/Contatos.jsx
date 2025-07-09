import React from 'react';
import './Contatos.css'; 
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

function Contatos() {
  return (
    <section id="main" className="contato-section">
      <div className="container">
        <article className="box post">
          <header>
            <h2>Nos encontre através de:</h2>
          </header>

          <div className="social-icons">
            <a href="#" className="icon">
              <FaFacebookF />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="icon">
              <FaWhatsapp />
            </a>
          </div>

          <ul className="contact">
            <li>
              <h3>Endereço</h3>
              <p>
                Rua da sorte 002, 00102-003
                <br />
                Bairro Papicu <br />
                Fortaleza - CE
              </p>
            </li>
            <li>
              <h3>Email</h3>
              <p>
                <a href="mailto:contato@pet.com.br">contato@pet.com.br</a>
              </p>
            </li>
            <li>
              <h3>Contato</h3>
              <p>(85) 3200-0001 / (85) 3100-0002</p>
            </li>
          </ul>

          <h3>Nossa História</h3>
          <p>
            Desde a sua fundação em 2025, a pet sempre teve seus valores bem
            definidos: amor pelos animais, qualidade dos produtos e excelência
            no atendimento. Idealizada por amigos, a empresa nasceu com a missão
            de ser mais do que um pet shop online – um parceiro de confiança
            para todos os tutores. Acreditamos que cada pet é único e merece o
            melhor cuidado, por isso, dedicamos tempo e atenção na seleção de
            cada item do nosso catálogo. Nossa história é construída sobre a
            confiança dos nossos clientes e o nosso compromisso contínuo em
            superar suas expectativas. Olhamos para o futuro com a mesma paixão
            do início, buscando sempre novas formas de fortalecer o vínculo
            entre humanos e animais e de contribuir para um mundo pet mais feliz
            e saudável.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Contatos;
