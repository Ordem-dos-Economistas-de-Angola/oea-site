import { EVENTOS } from '../data/content';
import Icon from './Icon';
import './Eventos.css';

export default function Eventos() {
  return (
    <section className="section" id="eventos">
      <div className="section-inner">
        <div className="section-header" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16}}>
          <div>
            <div className="section-tag">Agenda</div>
            <div className="gold-sep" />
            <h2 className="section-title" style={{marginBottom:0}}>Próximos Eventos</h2>
          </div>
          <a href="/eventos" className="btn btn-outline">Ver agenda completa →</a>
        </div>
        <div className="eventos-grid">
          {EVENTOS.slice(0, 3).map((ev, i) => (
            <div className="evento-card reveal" key={i} style={{transitionDelay:`${0.1 + i * 0.1}s`}}>
              <div className="evento-header" style={{background: ev.headerBg}}>
                <div className="evento-date">
                  <div className="evento-date-day">{ev.day}</div>
                  <div className="evento-date-month">{ev.month}</div>
                </div>
                <div className="evento-type-badge">{ev.type}</div>
              </div>
              <div className="evento-body">
                <div className="evento-title">{ev.title}</div>
                <div className="evento-meta"><Icon name="clock" size={16} /> {ev.time}</div>
                <div className="evento-meta"><Icon name="pin" size={16} /> {ev.local}</div>
                <div className="evento-meta"><Icon name="user" size={16} /> {ev.vagas}</div>
              </div>
              <div className="evento-footer">
                <span className="evento-footer-label">{ev.status}</span>
                <span className="evento-cta">{ev.cta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
