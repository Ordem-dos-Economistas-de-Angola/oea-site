import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
import './OrdemPages.css';

const LEGISLACAO = [
  { icon: 'scroll', title: 'Lei de Bases das Ordens Profissionais', desc: 'Lei que estabelece o regime jurídico das ordens profissionais em Angola, definindo os princípios gerais da sua constituição, organização e funcionamento.' },
  { icon: 'scroll', title: 'Estatutos da OEA', desc: 'Diploma que aprova os Estatutos da Ordem dos Economistas de Angola, definindo a sua natureza, fins, órgãos e regime disciplinar.' },
  { icon: 'scale', title: 'Código Deontológico', desc: 'Conjunto de normas e princípios éticos que regulam o exercício da profissão de economista, estabelecendo os deveres e as responsabilidades dos membros.' },
  { icon: 'briefcase', title: 'Regulamento de Inscrição', desc: 'Normas que disciplinam o processo de inscrição, as categorias de membros, os requisitos de admissão e o regime de estágio profissional.' },
  { icon: 'bank', title: 'Regulamento Eleitoral', desc: 'Diploma que estabelece as normas do processo eleitoral para eleição dos órgãos sociais da OEA, incluindo a composição das listas e o sufrágio.' },
  { icon: 'building', title: 'Regulamento das Delegações Regionais', desc: 'Normas de organização e funcionamento das delegações regionais da OEA, definindo as competências dos Conselhos Regionais.' },
  { icon: 'chart', title: 'Regulamento de Taxas e Emolumentos', desc: 'Tabela de taxas, emolumentos e quotas devidas à OEA pelos seus membros, incluindo jóias de inscrição e quotas periódicas.' },
  { icon: 'clipboard', title: 'Regulamento do Colégios de Especialidades', desc: 'Normas de constituição e funcionamento dos Colégios de Especialidades nas áreas de Macroeconomia, Economia de Empresas, Finanças, Planeamento e Estratégia.' },
  { icon: 'laptop', title: 'Regulamento do Centro de Estudos e Formação', desc: 'Diploma que cria e regulamenta o Centro de Estudos e Formação da OEA (CEF), definindo a sua estrutura, programas e regime de acesso.' },
  { icon: 'trophy', title: 'Regulamento do Prémio Anual do Economista', desc: 'Normas de atribuição do Prémio Anual do Economista Angolano, distinguindo o mérito, a excelência e a produção científica na área económica.' },
];

export default function LegislacaoPage() {
  const location = useLocation();
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, [location]);

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
            <div className="section-tag">Ordem</div>
            <div className="gold-sep" />
            <h2 className="section-title">Legislação</h2>
            <p className="section-desc">O enquadramento legal e regulamentar que rege a Ordem dos Economistas de Angola e o exercício da profissão de economista.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Enquadramento Legal</h3>
                <p>
                  A actividade da Ordem dos Economistas de Angola e o exercício da profissão de economista 
                  são regulados por um conjunto de diplomas legais e regulamentares que estabelecem os 
                  direitos, deveres e responsabilidades dos profissionais.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <ul className="legislacao-list">
                  {LEGISLACAO.map((l) => (
                    <li key={l.title}>
                      <span className="leg-icon"><Icon name={l.icon} size={18} /></span>
                      <div>
                        <div className="leg-title">{l.title}</div>
                        <div className="leg-desc">{l.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 32, padding: 20, background: 'var(--light)', borderRadius: 12 }}>
                <h4 style={{ marginTop: 0 }}>Legislação Externa</h4>
                <p style={{ fontSize: 14 }}>
                  Para além dos diplomas internos da OEA, a profissão de economista é igualmente regulada 
                  por legislação avulsa do Governo de Angola, designadamente do Ministério da Economia e 
                  Planeamento, disponível para consulta no portal oficial.
                </p>
                <a href="https://mep.gov.ao/ao/documentos/legislacao/" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: 12 }}>
                  <Icon name="globe" size={16} /> Legislação do MEP
                </a>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao">Missão e Visão</Link></li>
                  <li><Link to="/estatutos">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao" className="active">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                <h4 style={{ color: 'var(--red)' }}><Icon name="scale" size={18} /> Regulamentos</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  Os regulamentos internos da OEA são aprovados pelos órgãos competentes e vinculam todos 
                  os membros ao seu cumprimento, sob pena de responsabilidade disciplinar.
                </p>
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
