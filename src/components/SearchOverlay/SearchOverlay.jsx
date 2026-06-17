import { useSearchOverlayState } from './state';
import './style.css';

export default function SearchOverlay({ open, onClose }) {
  useSearchOverlayState({ open, onClose });

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
