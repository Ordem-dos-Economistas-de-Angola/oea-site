import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useDelegacaoSulPageState } from './state';
import '../OrdemPages.css';
import '../DelegacoesPages.css';

const PROVINCIAS = ['Huíla', 'Namibe', 'Cunene', 'Cuando Cubango'];

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

export default function DelegacaoSulPage() {
  useDelegacaoSulPageState();

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
            <h2 className="section-title">Delegação Regional Sul</h2>
            <p className="section-desc">Abrange 4 províncias da região sul de Angola, com grande potencial turístico, agro-pecuário e mineiro.</p>
          </div>

          <div className="delegacao-regions-nav">
            <Link to="/delegacao-norte"><Icon name="city" size={16} /> Norte</Link>
            <Link to="/delegacao-centro"><Icon name="mountain" size={16} /> Centro</Link>
            <Link to="/delegacao-leste"><Icon name="sunrise" size={16} /> Leste</Link>
            <Link to="/delegacao-sul" className="active"><Icon name="wave" size={16} /> Sul</Link>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <div className="delegacao-header">
                  <h3><Icon name="wave" size={24} /> Região Sul</h3>
                  <p>A Delegação Regional Sul tem a sua sede em Luanda e abrange as províncias de Huíla, Namibe, Cunene e Cuando Cubango, cobrindo a vasta região sul de Angola.</p>
                </div>

                <div className="map-container reveal">
                  <iframe
                    title="Mapa Região Sul"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=11.0%2C-17.0%2C18.0%2C-13.0&amp;layer=mapnik"
                    loading="lazy"
                  />
                  <div className="map-overlay"><Icon name="pin" size={14} /> Região Sul de Angola</div>
                </div>

                <div className="reveal">
                  <h4>Províncias Abrangidas</h4>
                  <div className="province-grid">
                    {PROVINCIAS.map((p) => (
                      <div key={p} className="province-chip">
                        <span className="chip-dot" style={{ background: 'var(--gold)' }} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="delegacao-stats reveal">
                  <div className="delegacao-stat">
                    <div className="stat-val">4</div>
                    <div className="stat-lbl">Províncias</div>
                  </div>
                  <div className="delegacao-stat">
                    <div className="stat-val">Luanda</div>
                    <div className="stat-lbl">Sede Regional</div>
                  </div>
                  <div className="delegacao-stat">
                    <div className="stat-val">Sul</div>
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
                  <li><Link to="/delegacao-norte">Região Norte</Link></li>
                  <li><Link to="/delegacao-centro">Região Centro</Link></li>
                  <li><Link to="/delegacao-leste">Região Leste</Link></li>
                  <li><Link to="/delegacao-sul" className="active">Região Sul</Link></li>
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
                <h4><Icon name="sunrise" size={18} /> Potencial Turístico</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  A região sul inclui o deserto do Namibe, a Serra da Leba, as quedas de Ruacaná e o Parque Nacional do Iona, com enorme potencial para o desenvolvimento do turismo económico.
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
