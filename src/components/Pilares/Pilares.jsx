import { PILARES } from '../../data/content';
import Icon from '../Icon/Icon';
import './style.css';

export default function Pilares() {
  return (
    <section className="section pilares" id="plano">
      <div className="section-inner">
        <div className="section-header center">
          <div className="section-tag">Plano 2026–2030</div>
          <div className="gold-sep" style={{margin:'16px auto'}} />
          <h2 className="section-title">Três Eixos Estratégicos</h2>
          <p className="section-desc">O Plano de Acção Estratégico assenta em três pilares fundamentais que guiam todas as iniciativas do mandato 2026–2030.</p>
        </div>
        <div className="pilares-grid">
          {PILARES.map((p, i) => (
            <div className="pilar-card reveal" key={p.num} style={{transitionDelay:`${0.1 + i * 0.1}s`}}>
              <div className="pilar-number">{p.num}</div>
              <div className="pilar-icon-wrap"><Icon name={p.icon} size={36} /></div>
              <div className="pilar-card-title">{p.title}</div>
              <div className="pilar-card-desc">{p.desc}</div>
              <div className="pilar-card-metas">
                {p.metas.map((m) => (
                  <div className="pilar-meta" key={m}><span className="pilar-meta-dot" />{m}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
