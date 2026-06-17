import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useEventoPageState } from './state';
import '../EventosPages.css';

export default function EventoPage() {
  const { evento, relacionados, form, submitted, handleChange, handleSubmit, resetForm } = useEventoPageState();

  if (!evento) {
    return (
      <>
        <Topbar />
        <Navbar onSearchOpen={() => {}} />
        <section className="section">
          <div className="section-inner" style={{textAlign:'center',padding:'80px 32px'}}>
            <div style={{fontSize:64,marginBottom:24,color:'var(--red)',opacity:0.3}}><Icon name="clock" size={64} /></div>
            <h2 style={{fontFamily:'Playfair Display',fontSize:28,fontWeight:700,color:'var(--black)',marginBottom:16}}>Evento não encontrado</h2>
            <p style={{color:'var(--mid)',marginBottom:32}}>O evento que procura não existe ou foi removido.</p>
            <Link to="/eventos" className="btn btn-outline">� � Todos os Eventos</Link>
          </div>
        </section>
        <Footer />
        <ScrollTop />
      </>
    );
  }

  const paragraphs = evento.content.split('\n\n').filter(Boolean);

  const podeInscrever = evento.status.toLowerCase().includes('inscrições abertas') ||
                        evento.status.toLowerCase().includes('candidaturas abertas');

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{marginBottom:16}}>
            <Link to="/eventos" style={{fontSize:13,color:'var(--mid)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6}}>
              � � Todos os Eventos
            </Link>
          </div>

          <div className="evento-article">
            <div className="evento-article-header reveal">
              <div className="evento-article-tags">
                <span className="evento-article-tag" style={{background:evento.headerBg}}>{evento.type}</span>
                <span className="evento-article-category">{evento.category}</span>
              </div>
              <h1 className="evento-article-title">{evento.title}</h1>
              <div className="evento-article-date-box" style={{background: evento.headerBg}}>
                <div className="evento-article-date-day">{evento.day}</div>
                <div className="evento-article-date-month">{evento.month}</div>
              </div>
            </div>

            <div className="evento-article-info reveal" style={{transitionDelay:'0.15s'}}>
              <div className="evento-article-info-item">
                <Icon name="clock" size={18} />
                <div>
                  <strong>Horário</strong>
                  <span>{evento.time}</span>
                </div>
              </div>
              <div className="evento-article-info-item">
                <Icon name="pin" size={18} />
                <div>
                  <strong>Local</strong>
                  <span>{evento.local}</span>
                </div>
              </div>
              <div className="evento-article-info-item">
                <Icon name="user" size={18} />
                <div>
                  <strong>Vagas</strong>
                  <span>{evento.vagas}</span>
                </div>
              </div>
              {evento.formadora && (
                <div className="evento-article-info-item">
                  <Icon name="graduation" size={18} />
                  <div>
                    <strong>Formadora</strong>
                    <span>{evento.formadora}</span>
                  </div>
                </div>
              )}
              <div className="evento-article-info-item">
                <Icon name="clipboard" size={18} />
                <div>
                  <strong>Estado</strong>
                  <span style={{color:'var(--red)',fontWeight:600}}>{evento.status}</span>
                </div>
              </div>
            </div>

            <div className="evento-article-body reveal" style={{transitionDelay:'0.25s'}}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="evento-article-actions reveal" style={{transitionDelay:'0.35s'}}>
              <button className="noticia-action-btn" onClick={() => {navigator.clipboard?.writeText(window.location.href); alert('Link copiado!');}}>
                <Icon name="link" size={18} /> Link
              </button>
              <button className="noticia-share-btn" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} title="Facebook"><Icon name="facebook" size={18} /></button>
              <button className="noticia-share-btn" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(evento.title)}&url=${window.location.href}`, '_blank')} title="Twitter"><Icon name="twitter" size={18} /></button>
              <button className="noticia-share-btn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')} title="LinkedIn"><Icon name="linkedin" size={18} /></button>
            </div>
          </div>

          {podeInscrever && (
            <div className="evento-inscricao reveal" style={{transitionDelay:'0.45s'}}>
              <h3 className="evento-inscricao-title">
                {evento.status.toLowerCase().includes('candidaturas')
                  ? 'Candidatura'
                  : 'Inscrição'}
              </h3>
              {submitted ? (
                <div className="evento-inscricao-success">
                  <Icon name="check" size={48} />
                  <h4>{evento.status.toLowerCase().includes('candidaturas') ? 'Candidatura submetida' : 'Inscrição confirmada'}</h4>
                  <p>Recebemos a sua {evento.status.toLowerCase().includes('candidaturas') ? 'candidatura' : 'inscrição'}. Entraremos em contacto brevemente com mais informações.</p>
                  <button className="btn btn-outline" onClick={resetForm}>
                    Nova {evento.status.toLowerCase().includes('candidaturas') ? 'candidatura' : 'inscrição'}
                  </button>
                </div>
              ) : (
                <form className="evento-inscricao-form" onSubmit={handleSubmit}>
                  <div className="evento-inscricao-grid">
                    <div className="form-group">
                      <label className="form-label">Nome completo *</label>
                      <input
                        type="text"
                        name="nome"
                        className="form-input"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        placeholder="O seu nome"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Telefone</label>
                      <input
                        type="tel"
                        name="telefone"
                        className="form-input"
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="+244 900 000 000"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mensagem (opcional)</label>
                      <textarea
                        name="mensagem"
                        className="form-input form-textarea"
                        value={form.mensagem}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Alguma questão ou observação?"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{marginTop:20,alignSelf:'flex-start'}}>
                    {evento.status.toLowerCase().includes('candidaturas')
                      ? 'Submeter Candidatura'
                      : 'Confirmar Inscrição'}
                  </button>
                </form>
              )}
            </div>
          )}

          {relacionados.length > 0 && (
            <div className="evento-related" style={{marginTop:64}}>
              <h3 className="evento-related-title">Outros Eventos</h3>
              <div className="eventos-all-grid" style={{gridTemplateColumns:'repeat(3, 1fr)'}}>
                {relacionados.map((ev, i) => (
                  <Link key={ev.id} to={`/evento/${ev.id}`} className="evento-all-card" style={{transitionDelay:`${i * 0.08}s`}}>
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
            </div>
          )}
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
