import { TICKER_ITEMS } from '../data/content';
import './Ticker.css';

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-label">Em Destaque</div>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div className="ticker-item" key={i}>
            <span className="ticker-dot" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
