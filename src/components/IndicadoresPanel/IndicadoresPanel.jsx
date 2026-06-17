import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { useIndicadoresState } from '../../pages/IndicadoresPage/state';
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

export default function IndicadoresPanel() {
  const { INDICADORES_PRINCIPAIS } = useIndicadoresState();
  return (
    <section className="section indicadores-panel">
      <div className="section-inner">
        <div className="section-header center">
          <div className="section-tag">Painel Económico OEA</div>
          <h2 className="section-title">Indicadores em Tempo Real</h2>
          <p className="section-desc">
            Principais indicadores da economia angolana actualizados em tempo real.
          </p>
        </div>
        <div className="indicadores-grid">
          {INDICADORES_PRINCIPAIS.map((ind) => (
            <div className="indicador-card reveal" key={ind.id}>
              <div className="indicador-card-header">
                <Icon name={ind.icon} size={20} />
                <span className="indicador-label">{ind.label}</span>
              </div>
              <div className="indicador-valor">{ind.value}</div>
              <div className="indicador-card-footer">
                <span
                  className="indicador-change"
                  style={{ color: statusColor[ind.status] }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {statusIcon[ind.status]}
                  </svg>
                  {ind.change}
                </span>
                <span className="indicador-status" style={{ background: statusColor[ind.status] }}>
                  {ind.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="indicadores-cta">
          <Link to="/indicadores" className="btn btn-primary">
            Ver painel completo de indicadores &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
