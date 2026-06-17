import { useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import NewsEngagement from '../../components/NewsEngagement/NewsEngagement';
import { useNoticiaPageState } from './state';
import '../NoticiasPages.css';

const TRUNCATE_LIMIT = 150;

function Comment({ c, onReply, repliesOpen, setRepliesOpen, replyText, setReplyText, submitReply }) {
  const [showFull, setShowFull] = useState(false);
  const truncated = c.text.length > TRUNCATE_LIMIT;
  const displayText = truncated && !showFull ? c.text.slice(0, TRUNCATE_LIMIT) + '⬦' : c.text;

  return (
    <div className="noticia-comment">
      <div className="noticia-comment-avatar">{c.avatar}</div>
      <div className="noticia-comment-body">
        <div className="noticia-comment-header">
          <span className="noticia-comment-author">{c.author}</span>
          {c.role && <span className="noticia-comment-role">{c.role}</span>}
          <span className="noticia-comment-date">{c.date}</span>
        </div>
        <p className="noticia-comment-text">
          {displayText}
          {truncated && (
            <button className="noticia-ver-mais" onClick={() => setShowFull(!showFull)}>
              {showFull ? ' Ver menos' : ' Ver mais'}
            </button>
          )}
        </p>
        <button className="noticia-reply-btn" onClick={() => setRepliesOpen(c.id === repliesOpen ? null : c.id)}>
          <Icon name="message" size={12} /> Responder
        </button>

        {repliesOpen === c.id && (
          <div className="noticia-reply-form">
            <textarea
              className="noticia-comment-input"
              placeholder="Escreva uma resposta..."
              rows={2}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button
              className="btn btn-primary"
              style={{fontSize:13,padding:'6px 16px',alignSelf:'flex-end'}}
              disabled={!replyText.trim()}
              onClick={() => submitReply(c.id)}
            >Responder</button>
          </div>
        )}

        {c.replies && c.replies.length > 0 && (
          <div className="noticia-replies">
            {c.replies.map((r) => (
              <div key={r.id} className="noticia-comment noticia-reply">
                <div className="noticia-comment-avatar" style={{width:32,height:32,fontSize:11}}>{r.avatar}</div>
                <div className="noticia-comment-body">
                  <div className="noticia-comment-header">
                    <span className="noticia-comment-author">{r.author}</span>
                    <span className="noticia-comment-date">{r.date}</span>
                  </div>
                  <p className="noticia-comment-text">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function NoticiaPage() {
  const {
    id, noticia, related, showComments, setShowComments, comments, newComment, setNewComment,
    replyText, setReplyText, repliesOpen, setRepliesOpen, showAllComments, setShowAllComments,
    visibleComments, COMMENTS_PER_PAGE, commentsRef, addComment, addReply
  } = useNoticiaPageState();

  if (!noticia) {
    return (
      <>
        <Topbar />
        <Navbar onSearchOpen={() => {}} />
        <section className="section">
          <div className="section-inner" style={{textAlign:'center',padding:'80px 32px'}}>
            <div style={{fontSize:64,marginBottom:24,color:'var(--red)',opacity:0.3}}><Icon name="newspaper" size={64} /></div>
            <h2 style={{fontFamily:'Playfair Display',fontSize:28,fontWeight:700,color:'var(--black)',marginBottom:16}}>Notícia não encontrada</h2>
            <p style={{color:'var(--mid)',marginBottom:32}}>A notícia que procura não existe ou foi removida.</p>
            <Link to="/noticias" className="btn btn-outline">� � Todas as Notícias</Link>
          </div>
        </section>
        <Footer />
        <ScrollTop />
      </>
    );
  }

  const paragraphs = noticia.content.split('\n\n').filter(Boolean);

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{marginBottom:16}}>
            <Link to="/noticias" style={{fontSize:13,color:'var(--mid)',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6}}>
              � � Todas as Notícias
            </Link>
          </div>

          <div className="noticia-article">
            <div className="noticia-article-header reveal">
              <div className="noticia-article-tags">
                <span className="noticia-article-tag" style={{background:noticia.tagColor}}>{noticia.tag}</span>
                <span className="noticia-article-category">{noticia.category}</span>
              </div>
              <h1 className="noticia-article-title">{noticia.title}</h1>
              <div className="noticia-article-meta">
                <Icon name="clock" size={14} />
                <span>{noticia.date}</span>
              </div>
              <NewsEngagement item={noticia} />
            </div>

            {noticia.image && (
              <div className="noticia-article-cover reveal" style={{transitionDelay:'0.15s'}}>
                <img src={noticia.image} alt={noticia.title} />
              </div>
            )}

            <div className="noticia-article-body reveal" style={{transitionDelay:'0.25s'}}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="noticia-article-actions reveal" style={{transitionDelay:'0.35s'}}>
              <button className="noticia-action-btn" onClick={() => {navigator.clipboard?.writeText(window.location.href); alert('Link copiado!');}}>
                <Icon name="link" size={18} /> Link
              </button>
              <button className="noticia-action-btn" onClick={() => setShowComments(!showComments)}>
                <Icon name="message" size={18} /> Comentários {comments.length > 0 && <span className="noticia-action-count">{comments.length}</span>}
              </button>
              <button className="noticia-action-btn noticia-action-follow">
                <Icon name="bell" size={18} /> Seguir
              </button>
              <div className="noticia-action-divider" />
              <button className="noticia-share-btn" onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')} title="Facebook"><Icon name="facebook" size={18} /></button>
              <button className="noticia-share-btn" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(noticia.title)}&url=${window.location.href}`, '_blank')} title="Twitter"><Icon name="twitter" size={18} /></button>
              <button className="noticia-share-btn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')} title="LinkedIn"><Icon name="linkedin" size={18} /></button>
            </div>
            </div>

            {showComments && (
              <div className="noticia-comments reveal" ref={commentsRef} style={{transitionDelay:'0.4s'}}>
                <h3 className="noticia-comments-title">Comentários ({comments.length})</h3>

                <div className="noticia-comment-form">
                  <div className="noticia-comment-avatar" style={{background:'var(--red)'}}>V</div>
                  <div className="noticia-comment-input-wrap">
                    <textarea
                      className="noticia-comment-input"
                      placeholder="Escreva um comentário..."
                      rows={2}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      style={{fontSize:13,padding:'8px 18px',alignSelf:'flex-end'}}
                      disabled={!newComment.trim()}
                      onClick={addComment}
                    >Comentar</button>
                  </div>
                </div>

                {visibleComments.map((c) => (
                  <Comment
                    key={c.id}
                    c={c}
                    repliesOpen={repliesOpen}
                    setRepliesOpen={setRepliesOpen}
                    replyText={replyText}
                    setReplyText={setReplyText}
                    submitReply={addReply}
                  />
                ))}

                {comments.length > COMMENTS_PER_PAGE && (
                  <div style={{textAlign:'center',marginTop:16}}>
                    <button
                      className="noticia-load-comments"
                      onClick={() => setShowAllComments(!showAllComments)}
                    >
                      {showAllComments
                        ? 'Mostrar menos comentários � '
                        : `Ver mais ${comments.length - COMMENTS_PER_PAGE} comentários � `}
                    </button>
                  </div>
                )}
              </div>
            )}

          {related.length > 0 && (
            <div className="noticia-related" style={{marginTop:64}}>
              <h3 className="noticia-related-title">Notícias Relacionadas</h3>
              <div className="noticias-all-grid" style={{gridTemplateColumns:'repeat(3, 1fr)'}}>
                {related.map((n, i) => (
                  <Link key={n.id} to={`/noticia/${n.id}`} className="noticia-card" style={{transitionDelay:`${i * 0.08}s`}}>
                    <div className="noticia-card-img">
                      {n.image ? <img src={n.image} alt={n.title} /> : null}
                      <div className="noticia-tag" style={{background:n.tagColor}}>{n.tag}</div>
                    </div>
                    <div className="noticia-card-body">
                      <div className="noticia-meta"><span>{n.date}</span></div>
                      <h3 className="noticia-card-title">{n.title}</h3>
                      <div className="noticia-read-more">Ler mais � </div>
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
