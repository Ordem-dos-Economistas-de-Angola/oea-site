import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useEstatutosPageState } from './state';
import '../OrdemPages.css';

export default function EstatutosPage() {
  useEstatutosPageState();

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{ marginBottom: 16 }}>
            <Link to="/" style={{ fontSize: 13, color: 'var(--mid)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              � � Voltar ao site
            </Link>
          </div>
          <div className="section-header">
            <div className="section-tag">Ordem</div>
            <div className="gold-sep" />
            <h2 className="section-title">Estatutos</h2>
            <p className="section-desc">Os Estatutos da Ordem dos Economistas de Angola definem as normas fundamentais de organização, funcionamento e disciplina da instituição.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Estatutos da OEA</h3>
                <p>
                  Os Estatutos da Ordem dos Economistas de Angola constituem o documento normativo fundamental que 
                  estabelece os princípios, a organização e o funcionamento da instituição, bem como os direitos 
                  e deveres dos seus membros.
                </p>
                <p>
                  Aprovados nos termos da legislação angolana, os Estatutos definem o quadro jurídico-institucional 
                  que rege a actividade da Ordem e o exercício da profissão de economista em Angola.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Estrutura dos Estatutos</h4>
                <ul>
                  <li><strong>Capítulo I</strong> � Denominação, Natureza, Sede e Fins</li>
                  <li><strong>Capítulo II</strong> � Dos Membros (categorias, direitos, deveres)</li>
                  <li><strong>Capítulo III</strong> � Dos �rgãos da Ordem (Assembleia Geral, Conselho Directivo, Conselho Fiscal, Conselho Jurisdicional)</li>
                  <li><strong>Capítulo IV</strong> � Das Delegações Regionais</li>
                  <li><strong>Capítulo V</strong> � Do Exercício da Profissão</li>
                  <li><strong>Capítulo VI</strong> � Do Regime Disciplinar</li>
                  <li><strong>Capítulo VII</strong> � Do Património e Receitas</li>
                  <li><strong>Capítulo VIII</strong> � Disposições Finais e Transitórias</li>
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Documentos para Download</h4>
                <ul className="doc-list">
                  <li>
                    <span className="doc-icon"><Icon name="scroll" size={18} /></span>
                    <span>Estatutos da OEA (PDF)</span>
                    <span className="doc-size">2.4 MB</span>
                  </li>
                </ul>
                <p style={{ fontSize: 13, color: 'var(--mid)', marginTop: 8 }}>
                  Clique no documento acima para fazer o download. O ficheiro está em formato PDF.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Categorias de Membros</h4>
                <div className="member-types">
                  <div className="member-type-card">
                    <div style={{ fontSize: 28, color: 'var(--red)' }}><Icon name="user" size={28} /></div>
                    <h4>Membros Efectivos</h4>
                    <p>Licenciados, mestres ou doutores em Economia ou áreas afins, com inscrição definitiva na Ordem.</p>
                  </div>
                  <div className="member-type-card">
                    <div style={{ fontSize: 28, color: 'var(--gold)' }}><Icon name="user" size={28} /></div>
                    <h4>Membros Estagiários</h4>
                    <p>Profissionais em início de carreira, inscritos para realização do estágio profissional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao">Missão e Visão</Link></li>
                  <li><Link to="/estatutos" className="active">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <h4 style={{ color: 'var(--gold)' }}><Icon name="scroll" size={18} /> Sabia que?</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  O artigo 28.º dos Estatutos estabelece as normas para a convocação da Assembleia Geral, 
                  incluindo os prazos, a forma de convocação e as matérias da sua competência exclusiva.
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
