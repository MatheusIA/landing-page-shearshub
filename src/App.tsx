import { useState } from "react";
import {
   ArrowRight,
   Bell,
   BriefcaseBusiness,
   CalendarDays,
   Check,
   ChevronRight,
   CircleDollarSign,
   Download,
   Instagram,
   LayoutDashboard,
   Mail,
   Menu,
   Monitor,
   PieChart,
   Smartphone,
   Sparkles,
   Users,
   X,
} from "lucide-react";
import "./App.css";
import "./feature-cards.css";
import logo from "./assets/logo.png";
import dashboardImage from "./assets/demonstracao_new.png";
import scheduleImage from "./assets/demonstracao.png";
import financeImage from "./assets/demonstracao_2.png";

const whatsappUrl = "https://wa.me/5535984295765";
const windowsDownloadUrl =
   "https://github.com/guhdsrosa/marcae-desktop-releases/releases/download/v1.0.3/Marcae-Administrador-Setup-1.0.3.exe";
const features = [
   {
      icon: CalendarDays,
      title: "Agenda organizada",
      text: "Visualize compromissos, horários e profissionais em uma rotina simples de acompanhar.",
   },
   {
      icon: Users,
      title: "Clientes em um só lugar",
      text: "Cadastre seus clientes e mantenha as informações importantes sempre acessíveis.",
   },
   {
      icon: BriefcaseBusiness,
      title: "Equipe e serviços",
      text: "Organize funcionários, serviços oferecidos e a operação do seu estabelecimento.",
   },
   {
      icon: CircleDollarSign,
      title: "Controle financeiro",
      text: "Acompanhe receitas, custos e lucro para entender a saúde do seu negócio.",
   },
   { icon: PieChart, title: "Relatórios claros", text: "Consulte indicadores financeiros e tome decisões com mais segurança." },
   {
      icon: Bell,
      title: "Notificações importantes",
      text: "Fique por dentro do que precisa da sua atenção, sem perder informações relevantes.",
   },
];
const businesses = ["Barbearias", "Salões de beleza", "Clínicas de estética", "Consultórios", "Estúdios", "Profissionais autônomos"];
const businessDescriptions: Record<string, string> = {
   "Barbearias": "Organize horários, barbeiros, serviços e o movimento financeiro do dia.",
   "Salões de beleza": "Centralize a agenda da equipe e acompanhe todos os atendimentos do salão.",
   "Clínicas de estética": "Gerencie procedimentos, profissionais e informações importantes dos clientes.",
   "Consultórios": "Mantenha compromissos e cadastros organizados em uma rotina mais eficiente.",
   "Estúdios": "Controle reservas, serviços e disponibilidade com clareza e praticidade.",
   "Profissionais autônomos": "Cuide da agenda, dos clientes e das finanças mesmo trabalhando sozinho.",
};

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const closeMenu = () => setIsMenuOpen(false);
   return (
      <div className="site-shell">
         <nav className="navbar" aria-label="Navegação principal">
            <div className="nav-container">
               <a className="brand nav-brand" href="#inicio" onClick={closeMenu} aria-label="Marcae Admin - início">
                  <img src={logo} alt="Marcae Admin" />
               </a>
               <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                  <a href="#recursos" onClick={closeMenu}>
                     Recursos
                  </a>
                  <a href="#para-quem" onClick={closeMenu}>
                     Para quem é
                  </a>
                  <a href="#aplicativo" onClick={closeMenu}>
                     O aplicativo
                  </a>
                  <a href="#download" className="nav-cta" onClick={closeMenu}>
                     Baixar agora
                  </a>
               </div>
               <button
                  className="menu-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={isMenuOpen}
               >
                  {isMenuOpen ? <X /> : <Menu />}
               </button>
            </div>
         </nav>
         <main>
            <section id="inicio" className="hero">
               <div className="hero-glow" />
               <div className="container hero-grid">
                  <div className="hero-copy">
                     <div className="eyebrow">
                        <Sparkles size={15} /> Gestão simples. Negócio organizado.
                     </div>
                     <h1>
                        Mais tempo para seus clientes. <span>Menos tempo com a gestão.</span>
                     </h1>
                     <p>Agendamentos, clientes, equipe e finanças reunidos em uma plataforma feita para quem presta serviços.</p>
                     <div className="hero-actions">
                        <a className="button button-light" href="#download">
                           Baixar o Marcae <Download size={19} />
                        </a>
                        <a className="text-link" href="#recursos">
                           Conhecer recursos <ArrowRight size={18} />
                        </a>
                     </div>
                     <div className="hero-proof">
                        <div className="proof-icons">
                           <span>
                              <CalendarDays />
                           </span>
                           <span>
                              <Users />
                           </span>
                           <span>
                              <PieChart />
                           </span>
                        </div>
                        <p>
                           <strong>Tudo conectado</strong>
                           <br />
                           Da agenda ao resultado financeiro
                        </p>
                     </div>
                  </div>
                  <div className="hero-product" aria-label="Prévia do aplicativo Marcae Admin">
                     <div className="product-frame">
                        <img src={dashboardImage} alt="Tela inicial do Marcae Admin" />
                     </div>
                     <div className="mini-card mini-card-top">
                        <span className="mini-icon">
                           <Check />
                        </span>
                        <div>
                           <strong>Rotina organizada</strong>
                           <small>Tenha tudo sob controle</small>
                        </div>
                     </div>
                     <div className="mini-card mini-card-bottom">
                        <span className="mini-icon">
                           <LayoutDashboard />
                        </span>
                        <div>
                           <strong>Visão completa</strong>
                           <small>Informações em um só lugar</small>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="trust-strip">
               <div className="container trust-content">
                  <span>Feito para a rotina de quem atende</span>
                  <div>
                     {businesses.slice(0, 4).map((item) => (
                        <span key={item}>{item}</span>
                     ))}
                  </div>
               </div>
            </section>
            <section id="recursos" className="section features-section">
               <div className="container">
                  <div className="section-heading split-heading">
                     <div>
                        <span className="kicker">CONTROLE DE PONTA A PONTA</span>
                        <h2>
                           Seu negócio inteiro,
                           <br />
                           <em>bem mais simples.</em>
                        </h2>
                     </div>
                     <p>
                        Centralize o que hoje está espalhado entre cadernos, planilhas e diferentes aplicativos. O Marcae ajuda você a
                        enxergar e organizar sua operação.
                     </p>
                  </div>
                  <div className="feature-grid">
                     {features.map(({ icon: Icon, title, text }, index) => (
                        <article className="feature-card" key={title}>
                           <span className="feature-number">0{index + 1}</span>
                           <div className="feature-icon">
                              <Icon />
                           </div>
                           <h3>{title}</h3>
                           <p>{text}</p>
                        </article>
                     ))}
                  </div>
               </div>
            </section>
            <section id="para-quem" className="section audience-section">
               <div className="container audience-grid">
                  <div className="audience-copy">
                     <span className="kicker light">PARA DIFERENTES NEGÓCIOS</span>
                     <h2>Feito para quem transforma tempo em atendimento.</h2>
                     <p>
                        Não importa se você trabalha sozinho ou lidera uma equipe. O Marcae se adapta à rotina de prestadores de serviços
                        que querem crescer com organização.
                     </p>
                     <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-light">
                        Quero conhecer <ArrowRight size={18} />
                     </a>
                  </div>
                  <div className="audience-list">
                     {businesses.map((item, index) => (
                        <div className="audience-item" key={item} tabIndex={0}>
                           <span>{String(index + 1).padStart(2, "0")}</span>
                           <div className="audience-item-content">
                              <strong>{item}</strong>
                              <p>{businessDescriptions[item]}</p>
                           </div>
                           <ChevronRight />
                        </div>
                     ))}
                  </div>
               </div>
            </section>
            <section id="aplicativo" className="section showcase-section">
               <div className="container">
                  <div className="section-heading centered">
                     <span className="kicker">SIMPLES DESDE O PRIMEIRO ACESSO</span>
                     <h2>
                        Informação clara para
                        <br />
                        <em>decidir melhor.</em>
                     </h2>
                     <p>Uma experiência rápida e intuitiva para acompanhar o dia a dia sem complicação.</p>
                  </div>
                  <div className="showcase-grid">
                     <article className="showcase-card">
                        <div className="showcase-copy">
                           <span>01 / AGENDA</span>
                           <h3>Seus próximos atendimentos à vista</h3>
                           <p>Organize horários e acompanhe a rotina da equipe com mais clareza.</p>
                        </div>
                        <img src={scheduleImage} alt="Agenda de atendimentos no Marcae Admin" />
                     </article>
                     <article className="showcase-card">
                        <div className="showcase-copy">
                           <span>02 / FINANCEIRO</span>
                           <h3>Resultados que você entende</h3>
                           <p>Visualize receitas, custos e lucro para conduzir o negócio com confiança.</p>
                        </div>
                        <img src={financeImage} alt="Controle financeiro no Marcae Admin" />
                     </article>
                  </div>
               </div>
            </section>
            <section id="download" className="section download-section">
               <div className="container download-panel">
                  <div className="download-copy">
                     <span className="kicker light">LEVE O MARCAE COM VOCÊ</span>
                     <h2>
                        Escolha onde
                        <br />
                        você quer usar.
                     </h2>
                     <p>Baixe agora para Windows. As versões para Android e iPhone estarão disponíveis em breve.</p>
                  </div>
                  <div className="platform-list">
                     <div className="platform-card disabled">
                        <span className="platform-icon">
                           <Smartphone />
                        </span>
                        <span>
                           <small>EM BREVE NA</small>
                           <strong>Google Play</strong>
                        </span>
                        <span className="soon">Em breve</span>
                     </div>
                     <div className="platform-card disabled">
                        <span className="platform-icon apple-icon">●</span>
                        <span>
                           <small>EM BREVE NA</small>
                           <strong>App Store</strong>
                        </span>
                        <span className="soon">Em breve</span>
                     </div>
                     <a className="platform-card available" href={windowsDownloadUrl}>
                        <span className="platform-icon">
                           <Monitor />
                        </span>
                        <span>
                           <small>DISPONÍVEL PARA</small>
                           <strong>Windows</strong>
                        </span>
                        <Download className="platform-action" />
                     </a>
                  </div>
               </div>
            </section>
            <section className="final-cta">
               <div className="container final-cta-inner">
                  <div>
                     <span>Pronto para organizar seu negócio?</span>
                     <h2>Comece com o Marcae Admin.</h2>
                  </div>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button button-dark">
                     Falar com a gente <ArrowRight size={18} />
                  </a>
               </div>
            </section>
         </main>
         <footer id="contato" className="footer">
            <div className="container">
               <div className="footer-main">
                  <div>
                     <a className="brand" href="#inicio">
                        <img src={logo} alt="" />
                        <span>marcae</span>
                     </a>
                     <p>Gestão simples para quem faz acontecer.</p>
                  </div>
                  <div className="footer-links">
                     <div>
                        <strong>Navegação</strong>
                        <a href="#recursos">Recursos</a>
                        <a href="#para-quem">Para quem é</a>
                        <a href="#download">Download</a>
                     </div>
                     <div>
                        <strong>Contato</strong>
                        <a href="mailto:marcaecontato@gmail.com">
                           <Mail size={16} /> E-mail
                        </a>
                        <a href="https://www.instagram.com/marcae.app/" target="_blank" rel="noreferrer">
                           <Instagram size={16} /> Instagram
                        </a>
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <span>© {new Date().getFullYear()} Marcae. Todos os direitos reservados.</span>
                  <span>Feito para simplificar.</span>
               </div>
            </div>
         </footer>
      </div>
   );
}
export default App;
