import { useState } from 'react';
import Icon from './Icon';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

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
