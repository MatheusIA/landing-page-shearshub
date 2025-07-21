import React from 'react';
import './landing.css';
import Carousel from '../components/Carousel';

export default function Landing() {

  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero-section">
        <div className="container">
          <h1>Transforme a rotina do seu estabelecimento</h1>
          <p>Gerencie agendamentos, clientes e sua equipe de forma simples, organizada e integrada.</p>
          <button className="primary-button" onClick={() => window.location.href = 'https://wa.me/5535984295765'}>
            Testar agora
          </button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section benefits-section">
        <div className="container">
          <h2>Por que usar o ShearsHub?</h2>
          <div className="grid">
            <div className="card">
              <h3>📅 Agenda sem conflitos</h3>
              <p>Controle total de horários com agendamento inteligente.</p>
            </div>
            <div className="card">
              <h3>💬 Comunicação integrada</h3>
              <p>Envie mensagens personalizadas para clientes e funcionários via WhatsApp.</p>
            </div>
            <div className="card">
              <h3>📈 Relatórios completos</h3>
              <p>Acompanhe o desempenho da equipe, serviços prestados e faturamento.</p>
            </div>
            <div className="card">
              <h3>🤝 Agendamentos flexíveis</h3>
              <p>Você agenda para seus clientes ou permite que eles escolham os horários.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demonstração do sistema */}
      <section className="section showcase-section">
        <div className="container">
          <h2>Veja como funciona</h2>
          <p>A plataforma é simples, moderna e adaptável a qualquer tipo de serviço.</p>
          <Carousel />
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section testimonials-section">
        <div className="container">
          <h2>Quem já usa recomenda</h2>
          <div className="grid">
            <div className="testimonial">
              <p>“O ShearsHub revolucionou a rotina do meu salão. Hoje tudo é mais fácil.”</p>
              <span>- Ana, Salão Bela Forma</span>
            </div>
            <div className="testimonial">
              <p>“Meus clientes elogiam muito a praticidade. E eu tenho mais controle de tudo.”</p>
              <span>- João, Barber King</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-section">
        <div className="container">
          <h2>Pronto para começar?</h2>
          <p>Entre em contato agora mesmo e descubra como o ShearsHub pode ajudar seu negócio.</p>
          <button className="primary-button" onClick={() => window.location.href = 'https://wa.me/5535984295765'}>
            Falar com um especialista
          </button>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} ShearsHub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
