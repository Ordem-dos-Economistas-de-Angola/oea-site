import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import NewsEngagement from '../../components/NewsEngagement/NewsEngagement';
import { NOTICIAS } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import '../NoticiasPages.css';

export default function NoticiasPage() {
  useReveal();
  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Informação e Actualidade</div>
            <div className="gold-sep" style={{ margin: '16px auto' }} />
            <h2 className="section-title">Todas as Notícias</h2>
            <p className="section-desc">Acompanhe as últimas novidades, comunicados oficiais e eventos da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="noticias-all-grid">
            {NOTICIAS.map((n, i) => (
              <Link key={n.id} to={`/noticia/${n.id}`} className="noticia-card reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <div className="noticia-card-img">
                  {n.image ? (
                    <img src={n.image} alt={n.title} />
                  ) : (
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',opacity:0.15}}>
                      <Icon name={n.icon} size={48} />
                    </div>
                  )}
                  <div className="noticia-tag" style={{background:n.tagColor}}>{n.tag}</div>
                </div>
                <div className="noticia-card-body">
                  <div className="noticia-meta">
                    <span>{n.date}</span>
                    <span className="noticia-meta-dot" />
                    <span>{n.category}</span>
                  </div>
                  <h3 className="noticia-card-title">{n.title}</h3>
                  <p className="noticia-card-excerpt">{n.excerpt}</p>
                  <NewsEngagement item={n} />
                  <div className="noticia-read-more">Ler notícia completa � </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{textAlign:'center',marginTop:48}}>
            <Link to="/" className="btn btn-outline">� � Voltar ao Início</Link>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
