import { useEffect } from 'react';
import './SearchOverlay.css';

export default function SearchOverlay({ open, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="search-overlay open" onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <input type="text" className="search-input" placeholder="Pesquisar na OEA..." autoFocus />
        <div style={{marginTop:16,fontSize:13,color:'var(--mid)'}}>Pesquise notícias, eventos, membros, protocolos e mais…</div>
      </div>
    </div>
  );
}
