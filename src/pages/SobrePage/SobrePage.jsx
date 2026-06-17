import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useSobrePageState } from './state';
import '../OrdemPages.css';

export default function SobrePage() {
  useSobrePageState();

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
            <h2 className="section-title">Sobre a OEA</h2>
            <p className="section-desc">Conheça a Ordem dos Economistas de Angola, a sua missão institucional e o papel na regulação da profissão de economista em Angola.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Ordem dos Economistas de Angola</h3>
                <p>
                  A Ordem dos Economistas de Angola (OEA) é uma Instituição de Utilidade Pública, reguladora do exercício das actividades profissionais 
                  e dos princípios e normas deontológicas dos economistas, representativa dos interesses de classe e dos profissionais do ramo da economia em Angola.
                </p>
                <p>
                  Criada para defender a dignidade, o prestígio e o livre exercício da profissão de economista, a OEA tem como 
                  propósito fundamental promover a valorização dos economistas angolanos, afirmar a Ordem como referência técnica 
                  nacional e contribuir activamente para o desenvolvimento económico sustentável de Angola.
                </p>
              </div>

              <div className="stats-grid reveal">
                <div className="stat-card">
                  <div className="stat-num">1.921+</div>
                  <div className="stat-label">Membros Registados</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">26+</div>
                  <div className="stat-label">Protocolos Activos</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">4</div>
                  <div className="stat-label">Delegações Regionais</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num">5</div>
                  <div className="stat-label">Conselhos Regionais (meta 2030)</div>
                </div>
              </div>

              <div className="reveal">
                <h4>Atribuições da OEA</h4>
                <ul>
                  <li>Regular o exercício da profissão de economista em Angola</li>
                  <li>Definir e fiscalizar as normas deontológicas da classe</li>
                  <li>Emitir pareceres técnicos sobre questões económicas nacionais</li>
                  <li>Representar os economistas angolanos junto das entidades públicas e privadas</li>
                  <li>Promover a formação contínua e o desenvolvimento profissional</li>
                  <li>Estabelecer protocolos de cooperação nacional e internacional</li>
                  <li>Organizar eventos científicos e conferências técnicas</li>
                  <li>Publicar estudos, revistas e cadernos de economia</li>
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Âmbito de Actuação</h4>
                <p>
                  A OEA actua em todo o território nacional, através da sua Sede em Luanda e das Delegações Regionais 
                  (Norte, Centro, Leste e Sul), com planos de expansão para 5 Conselhos Regionais até 2030. 
                  A nível internacional, a Ordem mantém relações de cooperação com ordens e associações de economistas 
                  de países africanos lusófonos e da SADC.
                </p>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre" className="active">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao">Missão e Visão</Link></li>
                  <li><Link to="/estatutos">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                <h4 style={{ color: 'var(--red)' }}><Icon name="phone" size={18} /> Contactos</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>Rua Gastão de Sousa Dias, Nº 14-14-A, R/C, 1º e 2º Andar, Bairro Alvalade, Luanda</p>
                <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13, color: 'var(--dark)' }}>
                  <span><Icon name="phone" size={13} /> (+244) 922-274-854</span>
                  <span><Icon name="email" size={13} /> geral@oea.economistas.ao</span>
                  <span><Icon name="clock" size={13} /> Seg–Sex: 09h00–17h00</span>
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
