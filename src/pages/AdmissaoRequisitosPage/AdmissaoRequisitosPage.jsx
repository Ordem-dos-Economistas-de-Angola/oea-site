import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useAdmissaoRequisitosPageState } from './state';
import '../AdmissaoPages.css';

const REQUISITOS = [
  { icon: 'graduation', title: 'Formação Académica', desc: 'Ser titular de licenciatura, mestrado ou doutoramento em Economia, Gestão, Finanças, Planeamento, Estratégia, Macroeconomia, Microeconomia, Econometria, Economia de Empresas ou outras ciências afins.' },
  { icon: 'globe', title: 'Nacionalidade', desc: 'Angolano ou estrangeiro com habilitações equivalentes reconhecidas legalmente em Angola para o exercício da profissão de economista.' },
  { icon: 'scroll', title: 'Idoneidade Profissional', desc: 'Não ter sido condenado por crime doloso, não estar inibido do exercício profissional e possuir conduta ética compatível com o exercício da profissão.' },
  { icon: 'building', title: 'Inscrição na Ordem', desc: 'Efectuar o pagamento da jóia de inscrição e submeter toda a documentação exigida nos Estatutos da OEA.' },
  { icon: 'briefcase', title: 'Estágio Profissional (se aplicável)', desc: 'Para membros estagiários, realização de estágio profissional supervisionado por um membro efectivo da OEA.' },
  { icon: 'bank', title: 'Regime Legal', desc: 'Cumprimento das disposições legais e regulamentares aplicáveis ao exercício da profissão de economista em Angola.' },
];

const DOCS = [
  'Certidão de Habilitações Literárias (original ou cópia autenticada)',
  'Bilhete de Identidade ou Passaporte válido',
  '2 Fotografias tipo passe actuais',
  'Curriculum Vitae detalhado',
  'Comprovativo de Pagamento da Jóia de Inscrição',
  'Declaração de idoneidade profissional (para estrangeiros)',
];

export default function AdmissaoRequisitosPage() {
  useAdmissaoRequisitosPageState();

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
            <h2 className="section-title">Requisitos de Admissão</h2>
            <p className="section-desc">Conheça os requisitos necessários para se tornar membro da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="admissao-sub-nav">
            <Link to="/admissao-como-inscrever"><Icon name="edit" size={16} /> Como Inscrever-se</Link>
            <Link to="/admissao-requisitos" className="active"><Icon name="clipboard" size={16} /> Requisitos</Link>
            <Link to="/admissao-estrangeiros"><Icon name="globe" size={16} /> Inscrição Estrangeiros</Link>
            <Link to="/admissao-taxas"><Icon name="wallet" size={16} /> Taxas e Quotas</Link>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Condições de Admissão</h3>
                <p>Podem inscrever-se na Ordem dos Economistas de Angola os profissionais que reúnam as seguintes condições:</p>
              </div>

              <div className="reveal" style={{ marginTop: 20 }}>
                {REQUISITOS.map((r) => (
                  <div key={r.title} className="requisito-card">
                    <div className="requisito-card-icon"><Icon name={r.icon} size={20} /></div>
                    <div className="requisito-card-content">
                      <h4>{r.title}</h4>
                      <p>{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Documentos Necessários</h4>
                <ul className="info-list">
                  {DOCS.map((d) => <li key={d} style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>{d}</li>)}
                </ul>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="clipboard" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/admissao-como-inscrever">Como Inscrever-se</Link></li>
                  <li><Link to="/admissao-requisitos" className="active">Requisitos</Link></li>
                  <li><Link to="/admissao-estrangeiros">Inscrição de Estrangeiros</Link></li>
                  <li><Link to="/admissao-taxas">Taxas e Quotas</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <h4 style={{ color: 'var(--gold)' }}><Icon name="graduation" size={18} /> Áreas Aceites</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {['Economia', 'Gestão', 'Finanças', 'Planeamento', 'Contabilidade', 'Administração Pública', 'Relações Internacionais', 'Estatística', 'Matemática Aplicada'].map((a) => (
                    <div key={a} style={{ fontSize: 13, color: 'var(--mid)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--gold)', fontSize: 10 }}>★</span> {a}
                    </div>
                  ))}
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
