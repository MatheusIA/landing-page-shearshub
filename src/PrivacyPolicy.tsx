import { useEffect } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import "./PrivacyPolicy.css";
import logo from "./assets/logo.png";

function PrivacyPolicy() {
   useEffect(() => {
      const previousTitle = document.title;
      document.title = "Política de Privacidade | Marcae Admin";

      return () => {
         document.title = previousTitle;
      };
   }, []);

   return (
      <div className="privacy-page">
         <header className="privacy-header">
            <div className="privacy-container">
               <a className="privacy-brand" href="/" aria-label="Marcae Admin - início">
                  <img src={logo} alt="Marcae Admin" />
               </a>
               <h1>Política de Privacidade</h1>
               <p>Esta política explica como o Marcae Admin coleta, utiliza, armazena, compartilha e protege dados pessoais.</p>
            </div>
         </header>

         <main className="privacy-main privacy-container">
            <a className="privacy-back-link" href="/">
               <ArrowLeft size={18} /> Voltar para o início
            </a>

            <article className="privacy-card">
               <div className="privacy-meta">
                  <span><strong>Última atualização:</strong> 23 de julho de 2026</span>
                  <span><strong>Aplicativo:</strong> Marcae Admin</span>
               </div>

               <p>A sua privacidade é importante para nós. Esta Política de Privacidade descreve as práticas adotadas pelo <strong>Marcae Admin</strong>, aplicativo destinado a proprietários e funcionários de estabelecimentos e profissionais autônomos para gerenciamento de clientes, serviços, agenda, pagamentos e informações administrativas.</p>

               <div className="privacy-notice">Ao utilizar o Marcae Admin, o usuário declara estar ciente das práticas descritas nesta política. Quando necessário, solicitaremos consentimento específico antes de realizar determinado tratamento de dados.</div>

               <h2>1. Quem é responsável pelo tratamento dos dados</h2>
               <p>O Marcae Admin é operado por <strong>Gustavo Rosa</strong>, responsável pelas decisões relacionadas ao tratamento dos dados pessoais descritos nesta política.</p>
               <p>Para dúvidas ou solicitações sobre privacidade, utilize o e-mail: <a href="mailto:marcaecontato@gmail.com">marcaecontato@gmail.com</a>.</p>

               <h2>2. Dados que podemos coletar</h2>
               <h3>2.1. Dados de cadastro e identificação</h3>
               <ul>
                  <li>Nome;</li><li>Endereço de e-mail;</li><li>Número de telefone, quando informado;</li><li>Senha, armazenada de forma protegida e não acessível em texto puro;</li><li>Tipo de usuário, função e vínculo com o estabelecimento;</li><li>Informações do estabelecimento ou atividade profissional.</li>
               </ul>
               <h3>2.2. Dados inseridos no gerenciamento do negócio</h3>
               <ul>
                  <li>Dados de clientes cadastrados pelo proprietário ou funcionário;</li><li>Agendamentos, horários, serviços e observações relacionadas;</li><li>Informações sobre pagamentos e status de recebimento;</li><li>Valores de serviços, custos e dados utilizados em relatórios financeiros;</li><li>Histórico de atendimentos e movimentações realizadas no aplicativo.</li>
               </ul>
               <p>O usuário responsável pelo estabelecimento deve possuir base legal adequada para inserir no Marcae Admin dados pessoais de seus clientes e deve informá-los, quando aplicável, sobre esse tratamento.</p>
               <h3>2.3. Dados técnicos e de uso</h3>
               <ul>
                  <li>Identificadores técnicos do aplicativo e do dispositivo;</li><li>Sistema operacional, versão do aplicativo e informações de diagnóstico;</li><li>Endereço IP, data e horário de acesso;</li><li>Registros de erros, falhas e eventos necessários à segurança e manutenção;</li><li>Token do dispositivo para envio de notificações push, quando autorizado.</li>
               </ul>

               <h2>3. Como utilizamos os dados</h2>
               <p>Os dados podem ser utilizados para:</p>
               <ul>
                  <li>Criar, autenticar e administrar contas de usuário;</li><li>Disponibilizar as funcionalidades de agenda e gestão do estabelecimento;</li><li>Registrar clientes, serviços, agendamentos e pagamentos;</li><li>Gerar indicadores e relatórios administrativos e financeiros;</li><li>Enviar lembretes, avisos operacionais e notificações relacionadas ao serviço;</li><li>Prestar suporte e responder a solicitações;</li><li>Prevenir fraudes, acessos indevidos e incidentes de segurança;</li><li>Identificar erros, melhorar desempenho e aperfeiçoar o aplicativo;</li><li>Cumprir obrigações legais, regulatórias ou ordens de autoridades competentes.</li>
               </ul>

               <h2>4. Bases legais</h2>
               <p>O tratamento de dados pessoais poderá ocorrer, conforme o caso, com fundamento na execução de contrato ou de procedimentos preliminares, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse e consentimento, nos termos da Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).</p>

               <h2>5. Compartilhamento de dados</h2>
               <p>Não vendemos dados pessoais. Poderemos compartilhar informações somente quando necessário para operar o serviço, incluindo:</p>
               <ul>
                  <li>Provedores de hospedagem, banco de dados e infraestrutura em nuvem;</li><li>Serviços de envio e processamento de notificações, como Firebase Cloud Messaging e serviços da Expo;</li><li>Fornecedores de monitoramento, diagnóstico, segurança e suporte técnico;</li><li>Autoridades públicas, quando houver obrigação legal, ordem judicial ou solicitação válida;</li><li>Terceiros envolvidos em reorganização societária, aquisição, fusão ou transferência do serviço, observadas as garantias legais aplicáveis.</li>
               </ul>
               <p>Os fornecedores recebem apenas os dados necessários à execução de suas atividades e devem tratá-los de acordo com obrigações de segurança e confidencialidade.</p>

               <h2>6. Armazenamento e transferências internacionais</h2>
               <p>Os dados poderão ser armazenados ou processados em servidores localizados no Brasil ou em outros países, de acordo com a infraestrutura dos fornecedores utilizados. Quando houver transferência internacional, adotaremos medidas compatíveis com a LGPD para proteger os dados.</p>

               <h2>7. Segurança das informações</h2>
               <p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda, alteração, divulgação ou destruição. Essas medidas podem incluir comunicação criptografada, autenticação, controle de acesso, armazenamento protegido de credenciais, registros de segurança e restrição de acesso conforme a função do usuário.</p>
               <p>Apesar dos esforços empregados, nenhum sistema conectado à internet é totalmente imune a incidentes. Caso seja identificado um incidente relevante, serão adotadas as providências previstas na legislação aplicável.</p>

               <h2>8. Retenção e exclusão dos dados</h2>
               <p>Os dados serão mantidos pelo período necessário para disponibilizar o serviço, cumprir obrigações legais, prevenir fraudes, resolver disputas e exercer direitos. Após o término da finalidade, os dados poderão ser excluídos, anonimizados ou conservados quando permitido ou exigido por lei.</p>
               <p>A exclusão da conta poderá ser solicitada pelo canal de contato indicado nesta política. A solicitação poderá exigir confirmação de identidade e poderá não abranger dados que devam ser conservados por obrigação legal ou para exercício regular de direitos.</p>

               <h2>9. Notificações e permissões do dispositivo</h2>
               <p>O aplicativo poderá solicitar autorização para enviar notificações sobre agendamentos, lembretes e eventos operacionais. O usuário pode desativá-las a qualquer momento nas configurações do dispositivo.</p>
               <p>Caso novas permissões sejam solicitadas em versões futuras, a finalidade será informada no aplicativo e o acesso dependerá da autorização do usuário, quando exigido.</p>

               <h2>10. Dados de terceiros cadastrados no aplicativo</h2>
               <p>Proprietários e funcionários podem cadastrar informações de seus próprios clientes. Nessa situação, o estabelecimento ou profissional que insere os dados é responsável por assegurar que possui autorização ou outra base legal adequada para utilizá-los.</p>
               <p>O Marcae Admin processa essas informações para disponibilizar as funcionalidades contratadas e não deve ser utilizado para inserir dados excessivos, desnecessários ou incompatíveis com a gestão de atendimentos.</p>

               <h2>11. Direitos dos titulares</h2>
               <p>Nos termos da LGPD, o titular poderá solicitar, quando aplicável:</p>
               <ul>
                  <li>Confirmação da existência de tratamento;</li><li>Acesso aos dados pessoais;</li><li>Correção de dados incompletos, inexatos ou desatualizados;</li><li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li><li>Portabilidade, observados os requisitos legais e técnicos;</li><li>Informações sobre compartilhamentos;</li><li>Revogação do consentimento e informações sobre suas consequências;</li><li>Revisão de decisões tomadas unicamente com base em tratamento automatizado, quando aplicável;</li><li>Eliminação de dados tratados com base no consentimento, ressalvadas as hipóteses legais de conservação.</li>
               </ul>

               <h2>12. Crianças e adolescentes</h2>
               <p>O Marcae Admin é destinado à administração de atividades profissionais e não é direcionado a crianças. Não buscamos coletar intencionalmente dados diretamente de crianças por meio de contas próprias no aplicativo.</p>

               <h2>13. Serviços e links de terceiros</h2>
               <p>O aplicativo poderá utilizar ou direcionar para serviços de terceiros. Esses serviços possuem políticas próprias e não são controlados por nós. Recomendamos que o usuário consulte os respectivos documentos de privacidade.</p>

               <h2>14. Alterações nesta política</h2>
               <p>Esta política poderá ser atualizada para refletir mudanças no aplicativo, nos fornecedores, nas práticas de tratamento ou na legislação. A versão vigente será publicada nesta página com a data da última atualização. Quando a alteração for relevante, poderemos apresentar aviso no aplicativo ou utilizar outro meio apropriado de comunicação.</p>

               <h2>15. Contato</h2>
               <div className="privacy-contact">
                  <p>Para exercer direitos, solicitar exclusão da conta ou esclarecer dúvidas relacionadas a esta Política de Privacidade, entre em contato:</p>
                  <p><strong>Responsável:</strong> Gustavo Rosa<br /><strong>Nome comercial:</strong> Marcae / CoreForge<br /><strong>E-mail:</strong> <a href="mailto:marcaecontato@gmail.com">marcaecontato@gmail.com</a><br /><strong>Cidade/UF:</strong> Alfenas - MG</p>
               </div>
            </article>
         </main>

         <footer className="privacy-footer">
            <div className="privacy-container">
               <span>© 2026 Marcae. Todos os direitos reservados.</span>
               <a href="mailto:marcaecontato@gmail.com"><Mail size={16} /> marcaecontato@gmail.com</a>
            </div>
         </footer>
      </div>
   );
}

export default PrivacyPolicy;
