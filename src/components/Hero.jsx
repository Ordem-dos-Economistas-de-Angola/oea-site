import { Link } from 'react-router-dom';
import Icon from './Icon';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden'}}>
        <img
          src="/img/img_hero.png"
          alt="Profissional economista em traje formal"
          style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',opacity:0.18,filter:'grayscale(30%)'}}
          loading="eager"
        />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.88) 45%, rgba(10,10,10,0.55) 100%)'}} />
      </div>
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Mandato 2026–2030
          </div>
          <h1 className="hero-title">
            A Voz dos<br />
            <em>Economistas</em><br />
            de Angola
          </h1>
          <p className="hero-desc">
            A Ordem dos Economistas de Angola é a instituição de utilidade pública que regula, valoriza e representa os profissionais de economia em todo o território nacional.
          </p>
          <div className="hero-actions">
            <Link to="/admissao" className="btn btn-primary">Tornar-me Membro</Link>
            <a href="#sobre" className="btn btn-ghost">Conhecer a OEA</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-label">Membros</div>
              <div className="hero-stat-value" data-count="1921">1.921<span>+</span></div>
            </div>
            <div>
              <div className="hero-stat-label">Delegações</div>
              <div className="hero-stat-value" data-count="4">4<span></span></div>
            </div>
            <div>
              <div className="hero-stat-label">Anos de Actividade</div>
              <div className="hero-stat-value" data-count="15">15<span>+</span></div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src="/img/img_hero.png"
              alt="Economista profissional angolano"
              className="hero-photo-img"
              loading="eager"
              onError={(e) => { e.target.style.display='none'; e.target.parentElement.querySelector('.hero-photo-fallback').style.display='flex'; }}
            />
            <div className="hero-photo-fallback" style={{display:'none'}}>
              <div style={{fontSize:80,opacity:0.3}}><Icon name="suit" size={60} /></div>
              <div style={{color:'rgba(255,255,255,0.4)',fontSize:14}}>Economista Profissional</div>
            </div>
            <div className="hero-photo-border" />
            <div className="hero-photo-corner-tl" />
            <div className="hero-photo-corner-br" />
            <div className="hero-photo-caption">
              <div className="hero-photo-caption-inner">
                <div style={{fontSize:11,color:'var(--gold)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:4}}>Economistas de Angola</div>
                <div style={{fontSize:14,color:'white',fontWeight:500,lineHeight:1.4}}>Profissionais que movem<br/>a economia nacional</div>
              </div>
              <div className="hero-photo-caption-badge">
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:22,fontWeight:900,color:'white',lineHeight:1}}>1.921</div>
                <div style={{fontSize:10,color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.08em'}}>membros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
