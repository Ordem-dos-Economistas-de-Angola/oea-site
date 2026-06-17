import { Link } from 'react-router-dom';
import { useAdminLoginPageState } from './state';
import './style.css';

export default function AdminLoginPage() {
  const { form, error, loading, handleChange, handleSubmit } = useAdminLoginPageState();

  return (
    <div className="admin-login-root">
      <div className="admin-login-card">
        <div className="admin-login-left">
          <div className="admin-login-brand">
            <img src="/logo_oea.png" alt="OEA" />
            <h2>Admin OEA</h2>
          </div>
          <p className="admin-login-welcome">Bem-vindo ao painel de administração</p>
          <p className="admin-login-desc">
            Aceda ao sistema de gestão da Ordem dos Engenheiros de Angola.
          </p>
        </div>
        <div className="admin-login-right">
          <form className="admin-login-form" onSubmit={handleSubmit}>
            <h3>Iniciar Sessão</h3>
            {error && <div className="admin-login-error">{error}</div>}
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="admin-email">Email</label>
              <input
                id="admin-email"
                name="email"
                type="email"
                className="admin-form-input"
                value={form.email}
                onChange={handleChange}
                placeholder="admin@oea.ao"
                required
              />
            </div>
            <div className="admin-form-group">
              <label className="admin-form-label" htmlFor="admin-password">Senha</label>
              <input
                id="admin-password"
                name="password"
                type="password"
                className="admin-form-input"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="admin-btn admin-btn-primary admin-login-submit" disabled={loading}>
              {loading ? 'A entrar...' : 'Entrar'}
            </button>
            <Link to="/login" className="admin-login-link">
              Área de Membros
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
