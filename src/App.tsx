import { useState } from "react";
import "./App.css";
import imagem from "./assets/demonstracao.png"

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         {/* <!-- Navegação --> */}
         <nav className="navbar">
            <div className="nav-container">
               <div className="nav-logo">
                  <h2>Marcae</h2>
               </div>
               <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                  <li>
                     <a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a>
                  </li>
                  <li>
                     <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
                  </li>
                  <li>
                     <a href="#demonstracao" onClick={() => setIsMenuOpen(false)}>Demonstração</a>
                  </li>
                  {/* <li>
                     <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                  </li> */}
                  <li>
                     <a href="#contato" className="nav-cta" onClick={() => setIsMenuOpen(false)}>
                        Contato
                     </a>
                  </li>
               </ul>
               <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
               </div>
            </div>
         </nav>

         {/* <!-- Hero Section --> */}
         <section id="inicio" className="hero">
            <div className="hero-container">
               <div className="hero-content">
                  <h1 className="hero-title">
                     Transforme a rotina do seu{" "}
                     <span className="highlight">Estabelecimento</span>
                  </h1>
                  <p className="hero-subtitle">
                     Gerencie agendamentos, clientes e sua equipe de forma
                     simples, organizada e integrada.
                  </p>
                  <div className="hero-buttons">
                     <button className="btn-primary" onClick={() => window.location.href = 'https://wa.me/5535984295765'}>
                        Entrar em Contato
                     </button>
                  </div>
               </div>
               <div className="hero-visual">
                  <div className="floating-card card-1" style={{ top: '50px', left: '50px' }}>
                     <div className="card-icon">📅</div>
                     <div className="card-text">
                        <h4>Agendamento Online</h4>
                        <p>24/7 disponível</p>
                     </div>
                  </div>
                  <div className="floating-card card-2" style={{ top: '200px', right: '30px' }}>
                     <div className="card-icon">💰</div>
                     <div className="card-text">
                        <h4>Controle Financeiro</h4>
                        <p>Receitas em tempo real</p>
                     </div>
                  </div>
                  <div className="floating-card card-3" style={{ bottom: '100px', left: '20px' }}>
                     <div className="card-icon">👥</div>
                     <div className="card-text">
                        <h4>Gestão de Clientes</h4>
                        <p>Histórico completo</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Seção de Benefícios --> */}
         <section id="beneficios" className="benefits">
            <div className="container">
               <div className="section-header">
                  <h2>Por que escolher o Marcae?</h2>
                  <p>Soluções completas para otimizar seu negócio</p>
               </div>
               <div className="benefits-grid">
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                           />
                           <line x1="16" y1="2" x2="16" y2="6" />
                           <line x1="8" y1="2" x2="8" y2="6" />
                           <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                     </div>
                     <h3>Agendamento Inteligente</h3>
                     <p>
                        Sistema automatizado que evita conflitos de horários e
                        otimiza sua agenda para máxima eficiência.
                     </p>
                  </div>
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path d="M12 2L2 7l10 5 10-5-10-5z" />
                           <path d="M2 17l10 5 10-5" />
                           <path d="M2 12l10 5 10-5" />
                        </svg>
                     </div>
                     <h3>Gestão Completa</h3>
                     <p>
                        Controle total sobre clientes, serviços, profissionais e
                        finanças em uma única plataforma.
                     </p>
                  </div>
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                           <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
                           <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                     </div>
                     <h3>Relatórios Avançados</h3>
                     <p>
                        Analytics detalhados para tomar decisões estratégicas
                        baseadas em dados reais do seu negócio.
                     </p>
                  </div>
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path d="M9 12l2 2 4-4" />
                           <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                           <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                           <path d="M13 12h3" />
                           <path d="M8 12H5" />
                        </svg>
                     </div>
                     <h3>Notificações Automáticas</h3>
                     <p>
                        Lembretes por WhatsApp e SMS para reduzir faltas e
                        manter seus clientes sempre informados.
                     </p>
                  </div>
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                           />
                           <line x1="8" y1="21" x2="16" y2="21" />
                           <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                     </div>
                     <h3>Multi-Dispositivo</h3>
                     <p>
                        Acesse de qualquer lugar: computador, tablet ou celular.
                        Sempre sincronizado e atualizado.
                     </p>
                  </div>
                  <div className="benefit-card">
                     <div className="benefit-icon">
                        <svg
                           width="28"
                           height="28"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                           <path d="M9 12l2 2 4-4" />
                        </svg>
                     </div>
                     <h3>Segurança Total</h3>
                     <p>
                        Seus dados protegidos com criptografia de ponta e
                        backups automáticos na nuvem.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Demonstração do Sistema --> */}
         <section id="demonstracao" className="demo">
            <div className="container">
               <div className="section-header">
                  <h2>
                     Conheça o <span className="highlight">Marcae</span>
                  </h2>
                  <p>Interface moderna e intuitiva para você e seus clientes</p>
               </div>
               <div className="demo-content">
                  <div className="demo-showcase">
                     <img src={imagem} alt="Demonstração Marcae" />
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Chamada para Ação --> */}
         <section className="cta">
            <div className="container">
               <div className="cta-content">
                  <h2>Pronto para dar o próximo passo no seu negócio?</h2>
                  <p>
                     O Marcae foi desenvolvido com carinho e atenção às reais
                     necessidades de salões, barbearias e clínicas de estética.
                  </p>

                  <div className="cta-stats">
                     <div className="stat">
                        <h3>100%</h3>
                        <p>Cloud Based</p>
                     </div>
                     <div className="stat">
                        <h3>24/7</h3>
                        <p>Disponível</p>
                     </div>
                     <div className="stat">
                        <h3>+40%</h3>
                        <p>Produtividade</p>
                     </div>
                  </div>

                  <div className="cta-buttons">
                     <button className="btn-primary" onClick={() => window.location.href = 'https://wa.me/5535984295765'}>
                        Falar com Especialista
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Rodapé --> */}
         <footer id="contato" className="footer">
            <div className="container">
               <div className="footer-content">
                  <div className="footer-section">
                     <h3>Marcae</h3>
                     <p>
                        A solução completa para gestão de agendamentos em
                        estabelecimentos de estética.
                     </p>
                     <div className="social-links">
                        <a href="#" aria-label="Facebook">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                           </svg>
                        </a>
                        <a href="https://www.instagram.com/marcae.app/" aria-label="Instagram">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                           </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="footer-section">
                     <h4>Contato</h4>
                     <ul>
                        <li>📧 marcaecontato@gmail.com.br</li>
                        <li>📱 (35) 98429-5765</li>
                     </ul>
                  </div>
               </div>
               <div className="footer-bottom">
                  <p>&copy; 2025 Marcae. Todos os direitos reservados.</p>
               </div>
            </div>
         </footer>
      </>
   );
}

export default App;
