import { Link, useLocation } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { useNavbarState } from './state';
import './style.css';

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src="/logo_oea.png" alt="OEA" className="logo-img" />
      <div className="logo-text">
        <span className="logo-title">Ordem dos Economistas</span>
        <span className="logo-subtitle">de Angola</span>
      </div>
    </Link>
  );
}

export default function Navbar({ onSearchOpen }) {
  const { mobileOpen, isHome, toggleMobile, closeMobile, h } = useNavbarState();
  const location = useLocation();

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-inner">
          <Logo />
          <ul className="nav-menu">
            <li className="nav-item"><Link className="nav-link active" to="/">Início</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Ordem <span className="nav-arrow">▾</span></Link>
              <div className="dropdown">
                <Link to="/sobre">Sobre a OEA</Link>
                <Link to="/missao-visao">Missão e Visão</Link>
                <Link to="/estatutos">Estatutos</Link>
                <Link to="/conselho-directivo">Conselho Directivo</Link>
                <div className="dropdown-divider" />
                <Link to="/relatorios-contas">Relatórios e Contas</Link>
                <Link to="/planos-actividades">Planos de Actividades</Link>
                <Link to="/legislacao">Legislação</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delegacao-norte">Delegações <span className="nav-arrow">▾</span></Link>
              <div className="dropdown">
                <Link to="/delegacao-norte">Região Norte</Link>
                <Link to="/delegacao-centro">Região Centro</Link>
                <Link to="/delegacao-leste">Região Leste</Link>
                <Link to="/delegacao-sul">Região Sul</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admissao-como-inscrever">Admissões <span className="nav-arrow">▾</span></Link>
              <div className="dropdown">
                <Link to="/admissao-como-inscrever">Como Inscrever-se</Link>
                <Link to="/admissao-requisitos">Requisitos</Link>
                <Link to="/admissao-estrangeiros">Inscrição de Estrangeiros</Link>
                <Link to="/admissao-taxas">Taxas e Quotas</Link>
              </div>
            </li>
            <li className="nav-item"><a className="nav-link" href={h('#vantagens')}>Vantagens</a></li>
            {/* <li className="nav-item"><a className="nav-link" href={h('#protocolos')}>Protocolos</a></li> */}
            <li className="nav-item"><Link className="nav-link" to="/noticias">Notícias</Link></li>
            <li className="nav-item"><a className="nav-link" href={h('#eventos')}>Eventos</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn btn-outline" onClick={onSearchOpen}><Icon name="search" size={18} /></button>
            <Link to="/login" className="btn btn-outline">Entrar</Link>
            <Link to="/admissao" className="btn btn-primary">Inscrição</Link>
          </div>
          <button className="hamburger" onClick={toggleMobile} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav open">
          <button className="mobile-nav-close" onClick={closeMobile}><Icon name="close" size={20} /></button>
          <Link to="/" onClick={closeMobile}>Início</Link>
          <Link to="/sobre" onClick={closeMobile}>Sobre a OEA</Link>
          <Link to="/delegacao-norte" onClick={closeMobile}>Delegações</Link>
          <Link to="/admissao" onClick={closeMobile}>Admissões</Link>
          <a href={h('#vantagens')} onClick={closeMobile}>Vantagens</a>
          {/* <a href={h('#protocolos')} onClick={closeMobile}>Protocolos</a> */}
          <Link to="/noticias" onClick={closeMobile}>Notícias</Link>
          <a href={h('#eventos')} onClick={closeMobile}>Eventos</a>
          <div className="mobile-nav-actions">
            <Link to="/login" className="btn btn-outline">Entrar na Área de Membros</Link>
            <Link to="/admissao" className="btn btn-primary" onClick={closeMobile}>Inscrição na OEA</Link>
          </div>
        </div>
      )}
    </>
  );
}
