import { VANTAGENS } from '../../data/content';
import Icon from '../Icon/Icon';
import './style.css';

export default function Vantagens() {
  return (
    <section className="section vantagens" id="vantagens">
      <div className="section-inner">
        <div className="section-header center">
          <div className="section-tag" style={{justifyContent:'center'}}>Benefícios</div>
          <div className="gold-sep" style={{margin:'16px auto'}} />
          <h2 className="section-title">Vantagens de Ser Membro</h2>
          <p className="section-desc">Ao integrar a OEA, beneficia de um conjunto de serviços, reconhecimento e oportunidades exclusivas para o seu desenvolvimento profissional.</p>
        </div>
        <div className="vantagens-grid">
          {VANTAGENS.map((v, i) => (
            <div className="vantagem-card reveal" key={v.title} style={{transitionDelay:`${i * 0.05}s`}}>
              <span className="vantagem-icon"><Icon name={v.icon} size={28} /></span>
              <div className="vantagem-title">{v.title}</div>
              <div className="vantagem-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
