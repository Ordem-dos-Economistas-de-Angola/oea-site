import Icon from './Icon';
import './Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span className="topbar-icon"><Icon name="pin" size={14} /> Rua Gastão de Sousa Dias, Nº 14-14A, Bairro Alvalade, Luanda</span>
          <div className="topbar-divider" />
          <span className="topbar-icon"><Icon name="clock" size={14} /> Seg–Sex: 09h00–17h00</span>
        </div>
        <div className="topbar-right">
          <a href="tel:+244922274854"><Icon name="phone" size={14} /> (+244) 922 274 854</a>
          <div className="topbar-divider" />
          <a href="mailto:secretaria.geral@ordemeconomistas.ao"><Icon name="email" size={14} /> secretaria.geral@ordemeconomistas.ao</a>
          <div className="topbar-divider" />
          <a href="#" title="Facebook">fb</a>
          <a href="#" title="LinkedIn">in</a>
        </div>
      </div>
    </div>
  );
}
