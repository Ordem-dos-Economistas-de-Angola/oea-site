import { Link } from 'react-router-dom';
import { NOTICIAS, NOTICIAS_SIDEBAR } from '../../data/content';
import Icon from '../Icon/Icon';
import NewsEngagement from '../NewsEngagement/NewsEngagement';
import './style.css';

export default function Noticias() {
  const [featured, ...rest] = NOTICIAS;
  return (
    <section className="section noticias" id="noticias">
      <div className="section-inner">
        <div className="section-header" style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:16}}>
          <div>
            <div className="section-tag">Últimas Notícias</div>
            <div className="gold-sep" />
            <h2 className="section-title" style={{marginBottom:0}}>Informação e Actualidade</h2>
          </div>
          <Link to="/noticias" className="btn btn-outline">Ver todas as notícias →</Link>
        </div>
        <div className="news-grid">
          <div style={{display:'flex',flexDirection:'column',gap:24}}>
              <Link className="news-card news-card-featured reveal" to={`/noticia/${featured.id}`} style={{transitionDelay:'0.1s'}}>
              <div className="news-img">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}} />
                ) : (
                  <>
                    <div className="news-img-pattern" style={{background:'linear-gradient(135deg, rgba(192,24,26,0.08), rgba(201,168,76,0.06))'}} />
                    <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',fontSize:80,opacity:0.15}}><Icon name="chart" size={64} /></div>
                  </>
                )}
                <div className="news-tag-pill">{featured.tag}</div>
              </div>
              <div className="news-body">
                <div className="news-meta"><span>{featured.date}</span><span className="news-meta-dot"/><span>{featured.category}</span></div>
                <h3 className="news-card-title">{featured.title}</h3>
                <p className="news-excerpt">{featured.excerpt}</p>
                <NewsEngagement item={featured} />
                <div className="news-read-more">Ler mais →</div>
              </div>
            </Link>

            <div className="news-card news-card-video reveal" style={{transitionDelay:'0.2s'}}>
              <div className="news-video-wrapper">
                <iframe src="https://www.youtube.com/embed/RPsrVMIOQYM" title="Entrevista Wilson Neves" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <div className="news-body">
                <div className="news-meta"><span>8 Jun 2026</span><span className="news-meta-dot"/><span>Entrevista</span></div>
                <h3 className="news-card-title" style={{fontSize:16}}>"Os modelos económicos devem ser desenhados de sociedade para sociedade" — Wilson Neves, Economista</h3>
              </div>
            </div>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:24}}>
            {rest.slice(0, 3).map((n, i) => (
              <Link className="news-card news-card-sm reveal" to={`/noticia/${n.id}`} key={n.id} style={{transitionDelay:`${0.3 + i * 0.1}s`}}>
                <div className="news-img">
                  {n.image ? (
                    <img src={n.image} alt={n.title} style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}} />
                  ) : null}
                  <div className="news-tag-pill" style={{background:n.tagColor}}>{n.tag}</div>
                </div>
                <div className="news-body">
                  <div className="news-meta"><span>{n.date}</span><span className="news-meta-dot"/><span>{n.category}</span></div>
                  <h3 className="news-card-title">{n.title}</h3>
                  <NewsEngagement item={n} />
                  <div className="news-read-more">Ler mais →</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="news-sidebar">
            {NOTICIAS_SIDEBAR.map((item, i) => (
              <div className="news-list-item reveal" key={i} style={{transitionDelay:`${0.45 + i * 0.05}s`}}>
                <div className="news-list-img"><Icon name={item.icon} size={24} /></div>
                <div>
                  <div className="news-list-title">{item.title}</div>
                  <div className="news-list-date">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
