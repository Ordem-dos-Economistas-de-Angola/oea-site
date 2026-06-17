import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';
import './Admin.css';

const navItems = [
  { path: '/admin', label: 'Dashboard', icon: 'chart' },
  { path: '/admin/noticias', label: 'Notícias', icon: 'newspaper' },
  { path: '/admin/eventos', label: 'Eventos', icon: 'clock' },
  { path: '/admin/membros', label: 'Membros', icon: 'users' },
  { path: '/admin/quotas', label: 'Quotas', icon: 'wallet' },
];

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('oea_admin_auth');
    navigate('/login');
  };

  return (
    <div className="admin-root">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <img src="/logo_oea.png" alt="OEA" />
            <span>Admin OEA</span>
          </div>
        </div>
        <nav className="admin-sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <Icon name={item.icon} size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <button className="admin-nav-item" onClick={handleLogout}>
            <Icon name="lock" size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <button className="admin-hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span /><span /><span />
          </button>
          <div className="admin-topbar-title">Painel de Administração</div>
          <div className="admin-topbar-right">
            <div className="admin-user-dropdown">
              <button className="admin-user-btn" onClick={() => setUserMenu(!userMenu)}>
                <div className="admin-user-avatar">A</div>
                <span>Administrador</span>
              </button>
              {userMenu && (
                <div className="admin-user-menu">
                  <button onClick={handleLogout}>
                    <Icon name="lock" size={16} /> Terminar Sessão
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="admin-content">
          {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}
          {children}
        </main>
      </div>
    </div>
  );
}
