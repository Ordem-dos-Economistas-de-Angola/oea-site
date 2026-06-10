import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
import './OrdemPages.css';

const RELATORIOS = [
  { year: '2026', title: 'Relatório de Actividades 2026', desc: 'Relatório das actividades realizadas no primeiro ano do mandato 2026–2030.', size: '1.8 MB' },
  { year: '2025', title: 'Relatório de Actividades 2025', desc: 'Relatório anual de actividades e balanço do mandato anterior.', size: '2.1 MB' },
  { year: '2024', title: 'Relatório de Actividades 2024', desc: 'Relatório anual de actividades e demonstrações financeiras.', size: '1.6 MB' },
  { year: '2023', title: 'Relatório de Actividades 2023', desc: 'Relatório anual de actividades e contas do exercício.', size: '1.9 MB' },
];

const CONTAS = [
  { year: '2026', title: 'Contas do Exercício 2026', desc: 'Balanço, demonstração de resultados e anexos às contas anuais.', size: '1.2 MB' },
  { year: '2025', title: 'Contas do Exercício 2025', desc: 'Demonstrações financeiras e parecer do Conselho Fiscal.', size: '1.4 MB' },
  { year: '2024', title: 'Contas do Exercício 2024', desc: 'Balanço e demonstração de resultados do exercício.', size: '1.1 MB' },
  { year: '2023', title: 'Contas do Exercício 2023', desc: 'Contas anuais e relatório de execução orçamental.', size: '1.3 MB' },
];

export default function RelatoriosContasPage() {
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
            <h2 className="section-title">Relatórios e Contas</h2>
            <p className="section-desc">A transparência na gestão é um compromisso fundamental da OEA. Consulte os relatórios de actividades e as demonstrações financeiras.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Relatórios de Actividades</h3>
                <p>
                  A Ordem dos Economistas de Angola publica anualmente os seus relatórios de actividades, 
                  dando a conhecer aos membros e à sociedade em geral as acções realizadas, os resultados 
                  alcançados e as contas do exercício.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <ul className="doc-list">
                  {RELATORIOS.map((r) => (
                    <li key={r.year + r.title}>
                      <span className="doc-icon"><Icon name="scroll" size={18} /></span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--dark)' }}>{r.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--mid)', marginTop: 2 }}>{r.desc}</div>
                      </div>
                      <span className="doc-size">{r.size}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 40 }}>
                <h3>Contas Anuais</h3>
                <p>
                  As demonstrações financeiras da OEA são elaboradas em conformidade com os princípios 
                  contabilísticos geralmente aceites e sujeitas à fiscalização do Conselho Fiscal e 
                  de auditoria externa independente.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <ul className="doc-list">
                  {CONTAS.map((c) => (
                    <li key={c.year + c.title}>
                      <span className="doc-icon"><Icon name="clipboard" size={18} /></span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--dark)' }}>{c.title}</div>
                        <div style={{ fontSize: 12, color: 'var(--mid)', marginTop: 2 }}>{c.desc}</div>
                      </div>
                      <span className="doc-size">{c.size}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 32, padding: 20, background: 'var(--light)', borderRadius: 12 }}>
                <h4 style={{ marginTop: 0 }}>Compromisso com a Transparência</h4>
                <p style={{ fontSize: 14 }}>
                  A OEA reafirma o seu compromisso com a prestação regular de contas, a transparência na gestão 
                  dos recursos e a responsabilidade perante os seus membros. A execução financeira das actividades 
                  observa critérios de eficiência, racionalidade e controlo interno.
                </p>
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
                  <li><Link to="/relatorios-contas" className="active">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="scale" size={18} /> Fiscalização</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  O Conselho Fiscal é o órgão responsável pela verificação da regularidade das contas 
                  e da gestão orçamental da OEA, garantindo a conformidade com as normas legais e estatutárias.
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
