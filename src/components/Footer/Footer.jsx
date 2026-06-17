import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-gold-bar" />
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Link to="/" className="logo footer-logo">
              <img
                src="/logo_oea.png"
                alt="OEA"
                className="logo-img"
                height="44"
              />
              <div className="logo-text" style={{ marginLeft: 12 }}>
                <span
                  className="logo-title"
                  style={{ color: "white", fontSize: 15 }}
                >
                  Ordem dos Economistas
                </span>
                <span
                  className="logo-subtitle"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  de Angola
                </span>
              </div>
            </Link>
            <p className="footer-brand-desc">
              Instituição de Utilidade Pública que regula, representa e valoriza
              os economistas angolanos. Valorizar o Economista · Afirmar a Ordem
              · Fortalecer Angola.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" title="Facebook">
                <Icon name="facebook" size={16} />
              </a>
              <a href="#" className="social-btn" title="Instagram">
                <Icon name="instagram" size={16} />
              </a>
              <a href="#" className="social-btn" title="LinkedIn">
                <Icon name="linkedin" size={16} />
              </a>
              <a href="#" className="social-btn" title="TikTok">
                <Icon name="tiktok" size={16} />
              </a>
              <a href="#" className="social-btn" title="Twitter">
                <Icon name="twitter" size={16} />
              </a>
              <a href="#" className="social-btn" title="YouTube">
                <Icon name="youtube" size={16} />
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Links Rápidos</div>
            <ul className="footer-links">
              <li key="Sobre a OEA">
                <a href="/#sobre">
                  <Icon name="building" size={12} /> Sobre a OEA
                </a>
              </li>
              <li key="Como Aderir">
                <Link to="/admissao">
                  <Icon name="handshake" size={12} /> Como Aderir
                </Link>
              </li>
              <li key="Vantagens de Membro">
                <a href="/#vantagens">
                  <Icon name="trophy" size={12} /> Vantagens de Membro
                </a>
              </li>
              <li key="Eventos">
                <a href="/#eventos">
                  <Icon name="announcement" size={12} /> Eventos
                </a>
              </li>
              <li key="Notícias">
                <a href="/#noticias">
                  <Icon name="newspaper" size={12} /> Notícias
                </a>
              </li>
              <li key="Protocolos">
                <a href="/#protocolos">
                  <Icon name="scroll" size={12} /> Protocolos
                </a>
              </li>
              <li key="Estatutos">
                <a href="#">
                  <Icon name="clipboard" size={12} /> Estatutos
                </a>
              </li>
              <li key="Área de Membros">
                <a href="#">
                  <Icon name="users" size={12} /> Área de Membros
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Instituição</div>
            <ul className="footer-links">
              <li key="Missão e Visão">
                <a href="#">
                  <Icon name="lightbulb" size={12} /> Missão e Visão
                </a>
              </li>
              <li key="Conselho Directivo">
                <a href="#">
                  <Icon name="users" size={12} /> Conselho Directivo
                </a>
              </li>
              <li key="Delegações Regionais">
                <a href="/#delegacoes">
                  <Icon name="globe" size={12} /> Delegações Regionais
                </a>
              </li>
              <li key="Plano Estratégico">
                <a href="#">
                  <Icon name="chart" size={12} /> Plano Estratégico
                </a>
              </li>
              <li key="Relatórios e Contas">
                <a href="#">
                  <Icon name="clipboard" size={12} /> Relatórios e Contas
                </a>
              </li>
              <li key="Legislação">
                <a href="#">
                  <Icon name="scale" size={12} /> Legislação
                </a>
              </li>
              <li key="Código Deontológico">
                <a href="#">
                  <Icon name="suit" size={12} /> Código Deontológico
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Contactos</div>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon name="pin" size={16} />
                </span>
                <span className="footer-contact-text">
                  Rua Gastão de Sousa Dias, Nº 14-14A, R/C, 1º e 2º Andar,
                  Bairro Alvalade, Maianga, Luanda
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon name="phone" size={16} />
                </span>
                <span className="footer-contact-text">(+244) 937 668 854</span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon name="email" size={16} />
                </span>
                <span className="footer-contact-text">
                  secretaria.geral@ordemeconomistas.ao
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon">
                  <Icon name="clock" size={16} />
                </span>
                <span className="footer-contact-text">
                  Seg–Sex: 09h00–17h00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-inner">
        <div className="footer-bottom">
          <span>
            © 2026 Ordem dos Economistas de Angola — Todos os direitos
            reservados.
          </span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Mapa do Site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
