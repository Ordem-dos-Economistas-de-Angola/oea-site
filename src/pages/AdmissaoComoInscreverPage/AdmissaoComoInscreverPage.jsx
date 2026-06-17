import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useAdmissaoComoInscreverPageState } from './state';
import '../../components/Admissao/style.css';
import '../AdmissaoPages.css';

const STEPS = [
  { n: 1, title: 'Verifique os Requisitos', desc: 'Licenciatura, mestrado ou doutoramento em Economia, Gestão, Finanças, Planeamento ou áreas afins, obtido em Angola ou no estrangeiro.' },
  { n: 2, title: 'Reúna a Documentação', desc: 'Certidão de habilitações, bilhete de identidade/passaporte, fotografia actualizada, curriculum vitae e comprovativo de pagamento da jóia.' },
  { n: 3, title: 'Submeta a Candidatura', desc: 'Preencha o formulário online ou entregue o processo completo na sede da OEA.' },
  { n: 4, title: 'Aguarde Aprovação', desc: 'A Comissão de Admissões analisa o processo e, após aprovação, emite a cédula profissional e número de membro.' },
  { n: 5, title: 'Bem-vindo à OEA!', desc: 'Aceda a todos os benefícios: formação, eventos, mentoria, representação e a rede de economistas angolanos.' },
];

export default function AdmissaoComoInscreverPage() {
  useAdmissaoComoInscreverPageState();

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{ marginBottom: 16 }}>
            <Link to="/" style={{ fontSize: 13, color: 'var(--mid)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              ← Voltar ao site
            </Link>
          </div>
          <div className="section-header">
            <div className="section-tag">Admissões</div>
            <div className="gold-sep" />
            <h2 className="section-title">Como Inscrever-se</h2>
            <p className="section-desc">Conheça o passo-a-passo para se tornar membro da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="admissao-sub-nav">
            <Link to="/admissao-como-inscrever" className="active"><Icon name="edit" size={16} /> Como Inscrever-se</Link>
            <Link to="/admissao-requisitos"><Icon name="clipboard" size={16} /> Requisitos</Link>
            <Link to="/admissao-estrangeiros"><Icon name="globe" size={16} /> Inscrição Estrangeiros</Link>
            <Link to="/admissao-taxas"><Icon name="wallet" size={16} /> Taxas e Quotas</Link>
          </div>

          <div className="admissao-steps-row reveal">
            {STEPS.map((s) => (
              <div className="step-mini" key={s.n}>
                <div className="step-mini-num">{s.n}</div>
                <div className="step-mini-title">{s.title}</div>
              </div>
            ))}
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Processo de Admissão</h3>
                <p>O processo de admissão como membro da Ordem dos Economistas de Angola é simples e transparente. Siga os passos abaixo para completar a sua candidatura.</p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <div className="admissao-steps-full">
                  {STEPS.map((s) => (
                    <div className="step" key={s.n}>
                      <div className="step-num">{s.n}</div>
                      <div className="step-content">
                        <div className="step-title">{s.title}</div>
                        <div className="step-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <div className="admissao-cta-card" style={{ marginBottom: 0 }}>
                  <div className="admissao-cta-icon"><Icon name="edit" size={40} /></div>
                  <h3 className="admissao-cta-title">Pronto para se candidatar?</h3>
                  <p className="admissao-cta-desc">
                    Preencha o formulário de inscrição online. O processo é simples e rápido.
                  </p>
                  {/* <Link to="/admissao" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>
                    Formulário de Inscrição →
                  </Link> */}
                  <p className="admissao-cta-note">
                    Alternativamente, entregue o processo completo na sede da OEA em Luanda.
                  </p>
                </div>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="clipboard" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/admissao-como-inscrever" className="active">Como Inscrever-se</Link></li>
                  <li><Link to="/admissao-requisitos">Requisitos</Link></li>
                  <li><Link to="/admissao-estrangeiros">Inscrição de Estrangeiros</Link></li>
                  <li><Link to="/admissao-taxas">Taxas e Quotas</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="phone" size={18} /> Dúvidas?</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  Contacte a Secretaria da OEA para mais informações sobre o processo de admissão.
                </p>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--dark)' }}>
                  <span><Icon name="phone" size={13} /> (+244) 922-274-854</span>
                  <span><Icon name="email" size={13} /> geral@oea.economistas.ao</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
