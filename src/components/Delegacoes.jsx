import { DELEGACOES } from '../data/content';
import Icon from './Icon';
import './Delegacoes.css';

export default function Delegacoes() {
  return (
    <section className="section" id="delegacoes">
      <div className="section-inner">
        <div className="section-header" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16}}>
          <div>
            <div className="section-tag">Território Nacional</div>
            <div className="gold-sep" />
            <h2 className="section-title" style={{marginBottom:0}}>Delegações Regionais</h2>
          </div>
          <div style={{fontSize:14,color:'var(--mid)'}}>5 Conselhos Regionais previstos até 2030</div>
        </div>
        <div className="delegacoes-grid">
          {DELEGACOES.map((d, i) => (
            <div className="delegacao-card reveal" key={d.title} style={{transitionDelay:`${0.1 + i * 0.05}s`}}>
              <div className="delegacao-icon"><Icon name={d.icon} size={32} /></div>
              <div>
                <div className="delegacao-title">{d.title}</div>
                <div className="delegacao-provinces">{d.provinces}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
