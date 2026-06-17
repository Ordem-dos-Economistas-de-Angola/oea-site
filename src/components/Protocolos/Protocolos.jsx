import { PROTOCOLOS } from '../../data/content';
import Icon from '../Icon/Icon';
import { useProtocolosState } from './state';
import './style.css';

const CATEGORIES = ['Governo', 'Bancos', 'Universidades', 'Empresas', 'ONGs'];
const CATEGORY_ICONS = {
  Governo: 'building',
  Bancos: 'bank',
  Universidades: 'graduation',
  Empresas: 'office',
  ONGs: 'globe',
};

export default function Protocolos() {
  const { activeTab, setActiveTab } = useProtocolosState();
  const items = PROTOCOLOS.filter(p => p.category === activeTab);

  return (
    <section className="section" id="protocolos" style={{background:'var(--light)'}}>
      <div className="section-inner">
        <div className="section-header" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16}}>
          <div>
            <div className="section-tag">Parcerias</div>
            <div className="gold-sep" />
            <h2 className="section-title" style={{marginBottom:0}}>Protocolos Institucionais</h2>
          </div>
          <a href="#" className="btn btn-outline">Ver todos →</a>
        </div>
        <div className="protocolo-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`protocolo-tab${activeTab === cat ? ' active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              <Icon name={CATEGORY_ICONS[cat]} size={18} /> {cat}
            </button>
          ))}
        </div>
        <div className="protocolos-grid">
          {items.map(p => (
            <div className="protocolo-card" key={p.name}>
              <div className="protocolo-logo">
                {p.image ? <img src={p.image} alt={p.name} className="protocolo-img" /> : null}
              </div>
              <div className="protocolo-name">{p.name}</div>
              <div className="protocolo-desc">{p.desc}</div>
              <span className="protocolo-type">{p.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
