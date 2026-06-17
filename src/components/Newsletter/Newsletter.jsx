import Icon from '../Icon/Icon';
import { useNewsletterState } from './state';
import './style.css';

export default function Newsletter() {
  const { email, submitted, setEmail, handleSubmit } = useNewsletterState();

  return (
    <div className="newsletter">
      <div className="newsletter-inner">
        <h2 className="newsletter-title">Fique Sempre Informado</h2>
        <p className="newsletter-desc">Subscreva a newsletter da OEA e receba as últimas notícias, eventos e publicações directamente na sua caixa de correio.</p>
        <div className="newsletter-form">
          <input
            type="email"
            className="newsletter-input"
            placeholder="O seu endereço de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={`newsletter-btn ${submitted ? 'subscribed' : ''}`} onClick={handleSubmit}>
            {submitted ? <><Icon name="check" size={16} /> Subscrito!</> : 'Subscrever'}
          </button>
        </div>
      </div>
    </div>
  );
}
