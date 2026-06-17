import { Link } from 'react-router-dom';
import Icon from '../../components/Icon/Icon';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import { useReveal, useScrollTop } from '../../hooks/useReveal';
import { CATEGORIAS } from './state';
import './style.css';

const statusIcon = {
  Alta: <><polyline points="18 15 12 9 6 15" /></>,
  Queda: <><polyline points="6 9 12 15 18 9" /></>,
  Estável: <><line x1="5" y1="12" x2="19" y2="12" /></>,
};

const statusColor = {
  Alta: 'var(--red)',
  Queda: 'var(--mid)',
  Estável: 'var(--gold)',
};

export default function IndicadoresPage() {
  useReveal();
  useScrollTop();

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="indicadores-page">
        <div className="section-inner">
          <div className="indicadores-breadcrumb">
            <Link to="/">Início</Link> &rsaquo; Indicadores
          </div>
          <div className="section-header center">
            <div className="section-tag">Painel Económico OEA</div>
            <h1 className="section-title">Indicadores Económicos</h1>
            <p className="section-desc">
              Painel com os principais indicadores da economia angolana.
            </p>
          </div>

          {CATEGORIAS.map((cat) => (
            <div className="indicadores-categoria" key={cat.id}>
              <div className="indicadores-categoria-header">
                <div className="indicadores-categoria-tag">{cat.label}</div>
              </div>
              <div className="indicadores-categoria-grid">
                {cat.indicadores.map((ind) => (
                  <div className="indicador-full-card reveal" key={ind.id}>
                    <div className="indicador-full-icon">
                      <Icon name={ind.icon} size={24} />
                    </div>
                    <div className="indicador-full-body">
                      <div className="indicador-full-label">{ind.label}</div>
                      <div className="indicador-full-valor">{ind.value}</div>
                      <div className="indicador-full-desc">{ind.desc}</div>
                      <div className="indicador-full-footer">
                        <span className="indicador-full-change" style={{ color: statusColor[ind.status] }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            {statusIcon[ind.status]}
                          </svg>
                          {ind.change}
                        </span>
                        <span className="indicador-full-status" style={{ background: statusColor[ind.status] }}>
                          {ind.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
