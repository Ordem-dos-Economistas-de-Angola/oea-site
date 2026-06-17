import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { EVENTOS } from '../../data/content';
import { useEventosPageState } from './state';
import '../EventosPages.css';

const ITEMS_PER_PAGE = 6;

export default function EventosPage() {
  const { page, setPage } = useEventosPageState();

  const totalPages = Math.ceil(EVENTOS.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = EVENTOS.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Agenda Institucional</div>
            <div className="gold-sep" style={{ margin: '16px auto' }} />
            <h2 className="section-title">Próximos Eventos</h2>
            <p className="section-desc">Acompanhe todos os eventos, formações e iniciativas promovidas pela Ordem dos Economistas de Angola.</p>
          </div>

          <div className="eventos-all-grid">
            {paginated.map((ev, i) => (
              <Link key={ev.id} to={`/evento/${ev.id}`} className="evento-all-card reveal" style={{transitionDelay:`${i * 0.08}s`}}>
                <div className="evento-all-header" style={{background: ev.headerBg}}>
                  <div className="evento-all-date">
                    <div className="evento-all-date-day">{ev.day}</div>
                    <div className="evento-all-date-month">{ev.month}</div>
                  </div>
                  <div className="evento-all-type-badge">{ev.type}</div>
                </div>
                <div className="evento-all-body">
                  <div className="evento-all-category">{ev.category}</div>
                  <h3 className="evento-all-title">{ev.title}</h3>
                  <p className="evento-all-excerpt">{ev.excerpt}</p>
                  <div className="evento-all-meta">
                    <span><Icon name="clock" size={14} /> {ev.time}</span>
                    <span><Icon name="pin" size={14} /> {ev.local}</span>
                  </div>
                </div>
                <div className="evento-all-footer">
                  <span className="evento-all-footer-label">{ev.status}</span>
                  <span className="evento-all-cta">Detalhes � </span>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="eventos-pagination">
              <button
                className="eventos-page-btn"
                disabled={page <= 1}
                onClick={() => setPage(p => Math.max(1, p - 1))}
              >
                � � Anterior
              </button>
              <div className="eventos-page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    className={`eventos-page-num ${p === page ? 'active' : ''}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                className="eventos-page-btn"
                disabled={page >= totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Seguinte � 
              </button>
            </div>
          )}

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
