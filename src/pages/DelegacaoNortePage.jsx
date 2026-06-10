import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
import './OrdemPages.css';
import './DelegacoesPages.css';

const PROVINCIAS = [
  'Luanda', 'Bengo', 'Uíge', 'Zaire', 'Cabinda', 'Malanje', 'Cuanza Norte',
];

const MESA = [
  { cargo: 'Presidente', nome: 'Rui Fernando da Silva Rio' },
  { cargo: 'Secretário', nome: 'Ana Maria Oliveira de Abreu' },
  { cargo: 'Secretário', nome: 'Alfredo Alexandre Osório de Almeida e Sousa' },
];

const DIRECCAO = [
  { cargo: 'Presidente', nome: 'António Manuel Pereira Rodrigues Cunha' },
  { cargo: 'Vogal Efectivo', nome: 'Manuel José Lemos Ribeiro' },
  { cargo: 'Vogal Efectivo', nome: 'Paulo Messias Alves Lobo' },
  { cargo: 'Vogal Suplente', nome: 'Nelson da Cruz Vergas' },
  { cargo: 'Vogal Suplente', nome: 'Rui André Albuquerque Neiva da Costa Saraiva' },
];

export default function DelegacaoNortePage() {
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
            <div className="section-tag">Delegações Regionais</div>
            <div className="gold-sep" />
            <h2 className="section-title">Delegação Regional Norte</h2>
            <p className="section-desc">Sede em Luanda, abrangendo 7 províncias da região norte de Angola.</p>
          </div>

          <div className="delegacao-regions-nav">
            <Link to="/delegacao-norte" className="active"><Icon name="city" size={16} /> Norte</Link>
            <Link to="/delegacao-centro"><Icon name="mountain" size={16} /> Centro</Link>
            <Link to="/delegacao-leste"><Icon name="sunrise" size={16} /> Leste</Link>
            <Link to="/delegacao-sul"><Icon name="wave" size={16} /> Sul</Link>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <div className="delegacao-header">
                  <h3><Icon name="city" size={24} /> Região Norte</h3>
                  <p>A Delegação Regional Norte tem a sua sede em Luanda e abrange as províncias de Luanda, Bengo, Uíge, Zaire, Cabinda, Malanje e Cuanza-Norte, cobrindo a faixa norte do território angolano.</p>
                </div>

                <div className="map-container reveal">
                  <iframe
                    title="Mapa Região Norte"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0%2C-10.0%2C14.0%2C-5.0&amp;layer=mapnik"
                    loading="lazy"
                  />
                  <div className="map-overlay"><Icon name="pin" size={14} /> Região Norte de Angola</div>
                </div>

                <div className="reveal">
                  <h4>Províncias Abrangidas</h4>
                  <div className="province-grid">
                    {PROVINCIAS.map((p) => (
                      <div key={p} className="province-chip">
                        <span className="chip-dot" style={{ background: 'var(--red)' }} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="delegacao-stats reveal">
                  <div className="delegacao-stat">
                    <div className="stat-val">7</div>
                    <div className="stat-lbl">Províncias</div>
                  </div>
                  <div className="delegacao-stat">
                    <div className="stat-val">Luanda</div>
                    <div className="stat-lbl">Sede Regional</div>
                  </div>
                  <div className="delegacao-stat">
                    <div className="stat-val">Norte</div>
                    <div className="stat-lbl">Região</div>
                  </div>
                </div>
              </div>

              <div className="leadership-grid reveal">
                <div className="leadership-card">
                  <h4><Icon name="users" size={18} /> Mesa da Assembleia Regional</h4>
                  <ul>
                    {MESA.map((m) => (
                      <li key={m.cargo + m.nome}><strong>{m.cargo}:</strong> {m.nome}</li>
                    ))}
                  </ul>
                </div>
                <div className="leadership-card">
                  <h4><Icon name="briefcase" size={18} /> Direcção Regional</h4>
                  <ul>
                    {DIRECCAO.map((d) => (
                      <li key={d.cargo + d.nome}><strong>{d.cargo}:</strong> {d.nome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Delegações</h4>
                <ul>
                  <li><Link to="/delegacao-norte" className="active">Região Norte</Link></li>
                  <li><Link to="/delegacao-centro">Região Centro</Link></li>
                  <li><Link to="/delegacao-leste">Região Leste</Link></li>
                  <li><Link to="/delegacao-sul">Região Sul</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                <h4 style={{ color: 'var(--red)' }}><Icon name="phone" size={18} /> Sede</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  Rua Gastão de Sousa Dias, Nº 14-14-A, R/C, 1º e 2º Andar, Bairro Alvalade, Luanda
                </p>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--dark)' }}>
                  <span><Icon name="phone" size={13} /> (+244) 922-274-854</span>
                  <span><Icon name="email" size={13} /> geral@oea.economistas.ao</span>
                </div>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="globe" size={18} /> Expansão</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  A OEA prevê a instalação de 5 Conselhos Regionais até 2030, no âmbito do Plano de Acção Estratégico 2026–2030, reforçando a descentralização e a proximidade com os membros.
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
