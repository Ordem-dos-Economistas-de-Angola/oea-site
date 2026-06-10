import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
import './AdmissaoPages.css';

export default function AdmissaoEstrangeirosPage() {
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
            <div className="section-tag">Admissões</div>
            <div className="gold-sep" />
            <h2 className="section-title">Inscrição de Estrangeiros</h2>
            <p className="section-desc">Cidadãos estrangeiros podem inscrever-se na OEA para o exercício da profissão de economista em Angola.</p>
          </div>

          <div className="admissao-sub-nav">
            <Link to="/admissao-como-inscrever"><Icon name="edit" size={16} /> Como Inscrever-se</Link>
            <Link to="/admissao-requisitos"><Icon name="clipboard" size={16} /> Requisitos</Link>
            <Link to="/admissao-estrangeiros" className="active"><Icon name="globe" size={16} /> Inscrição Estrangeiros</Link>
            <Link to="/admissao-taxas"><Icon name="wallet" size={16} /> Taxas e Quotas</Link>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Inscrição de Cidadãos Estrangeiros</h3>
                <p>
                  Nos termos dos Estatutos da Ordem dos Economistas de Angola, os cidadãos estrangeiros 
                  podem inscrever-se na OEA para efeitos do exercício, na República de Angola, da profissão 
                  de economista, desde que sejam titulares das habilitações profissionais requeridas legalmente 
                  para o exercício desta profissão no respectivo país de origem e que equivalham às exigidas 
                  para os nacionais angolanos.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <div className="estrangeiro-status" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                  <div className="estrangeiro-status-icon" style={{ color: 'var(--red)' }}>
                    <Icon name="globe" size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 600, color: 'var(--black)', marginBottom: 6 }}>Direito de Inscrição</h4>
                    <p style={{ fontSize: 14, color: 'var(--gray)', lineHeight: 1.65 }}>
                      Os cidadãos estrangeiros com habilitações equivalentes às exigidas para os nacionais 
                      angolanos têm direito à inscrição na OEA, nos mesmos termos e condições, garantindo-se 
                      a igualdade de tratamento e a não discriminação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <h4>Requisitos Específicos</h4>
                <div className="requisito-card">
                  <div className="requisito-card-icon"><Icon name="scroll" size={20} /></div>
                  <div className="requisito-card-content">
                    <h4>Equivalência de Habilitações</h4>
                    <p>Apresentar comprovativo de equivalência das habilitações académicas emitido pela instituição competente em Angola.</p>
                  </div>
                </div>
                <div className="requisito-card">
                  <div className="requisito-card-icon"><Icon name="clipboard" size={20} /></div>
                  <div className="requisito-card-content">
                    <h4>Documentação Específica</h4>
                    <p>Declaração de idoneidade profissional emitida pela entidade reguladora da profissão no país de origem e documentos de identificação válidos.</p>
                  </div>
                </div>
                <div className="requisito-card">
                  <div className="requisito-card-icon"><Icon name="bank" size={20} /></div>
                  <div className="requisito-card-content">
                    <h4>Autorização de Residência</h4>
                    <p>Comprovativo de autorização de residência em Angola ou de visto de trabalho que permita o exercício profissional no país.</p>
                  </div>
                </div>
                <div className="requisito-card">
                  <div className="requisito-card-icon"><Icon name="globe" size={20} /></div>
                  <div className="requisito-card-content">
                    <h4>Países Lusófonos e SADC</h4>
                    <p>Profissionais oriundos de países membros da CPLP e SADC beneficiam de regimes especiais de reconhecimento de qualificações, nos termos dos acordos internacionais vigentes.</p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 32, padding: 20, background: 'var(--light)', borderRadius: 12 }}>
                <h4 style={{ marginTop: 0 }}>Documentos Adicionais para Estrangeiros</h4>
                <ul className="info-list" style={{ marginTop: 12 }}>
                  <li style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>Declaração de idoneidade profissional (país de origem)</li>
                  <li style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>Comprovativo de equivalência de habilitações</li>
                  <li style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>Visto de trabalho ou autorização de residência</li>
                  <li style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>Passaporte válido (original para verificação)</li>
                  <li style={{ fontSize: 14, color: 'var(--mid)', display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>Curriculum Vitae detalhado</li>
                </ul>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="clipboard" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/admissao-como-inscrever">Como Inscrever-se</Link></li>
                  <li><Link to="/admissao-requisitos">Requisitos</Link></li>
                  <li><Link to="/admissao-estrangeiros" className="active">Inscrição de Estrangeiros</Link></li>
                  <li><Link to="/admissao-taxas">Taxas e Quotas</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                <h4 style={{ color: 'var(--red)' }}><Icon name="phone" size={18} /> Apoio</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  A Secretaria da OEA presta apoio personalizado aos candidatos estrangeiros durante todo o processo de inscrição.
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
