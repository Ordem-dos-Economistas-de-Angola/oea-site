import Icon from '../Icon/Icon';
import './style.css';

export default function Sobre() {
  const pillars = [
    { icon: 'scale', title: 'Regulação', desc: 'Zelar pelo cumprimento das normas deontológicas e do exercício ético da profissão.' },
    { icon: 'graduation', title: 'Formação', desc: 'Centro de Estudos e Formação com ≥ 6 cursos por ano para membros e público.' },
    { icon: 'handshake', title: 'Representação', desc: 'Defender os interesses da classe nos fóruns nacionais, regionais e internacionais.' },
    { icon: 'lightbulb', title: 'Inovação', desc: 'Digitalização de 100% dos serviços e presença em 5 Conselhos Regionais até 2030.' },
  ];
  return (
    <section className="section" id="sobre">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-visual reveal-left">
            <div className="about-img-wrap">
              <div className="about-img-pattern" />
              <div className="about-emblem-large">
                <span className="about-emblem-letters">OEA</span>
              </div>
            </div>
            <div className="about-float-card about-float-1">
              <div className="about-float-label">Membros Activos</div>
              <div className="about-float-val">1.921 <span>registados</span></div>
            </div>
            <div className="about-float-card about-float-2">
              <div className="about-float-label">Fundada em</div>
              <div className="about-float-val">2010 <span>Angola</span></div>
            </div>
          </div>
          <div className="about-content reveal-right">
            <div className="section-tag">Sobre a OEA</div>
            <div className="gold-sep" />
            <h2 className="section-title">Regulamos, Representamos<br />e Valorizamos</h2>
            <p className="about-lead">
              A Ordem dos Economistas de Angola é uma Instituição de Utilidade Pública que defende o rigor, a ética e a excelência na prática da ciência económica em Angola.
            </p>
            <p className="about-body">
              Fundada para garantir os mais elevados padrões de competência e deontologia profissional, a OEA representa os interesses de todos os economistas angolanos, promovendo a sua valorização e afirmação como actores centrais no desenvolvimento do país.<br /><br />
              No âmbito do mandato 2026–2030, a OEA compromete-se a modernizar-se digitalmente, descentralizar a sua presença pelo território nacional e reforçar a sua influência no debate económico nacional e internacional.
            </p>
            <div className="about-pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.title}>
                  <div className="pillar-icon"><Icon name={p.icon} size={28} /></div>
                  <div className="pillar-title">{p.title}</div>
                  <div className="pillar-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
