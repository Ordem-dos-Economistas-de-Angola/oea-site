import AdminLayout from '../AdminLayout/AdminLayout';
import Icon from '../../../components/Icon/Icon';
import { getMembros, updateMembro } from '../adminData';
import { useAdminMembrosState } from './state';

export default function AdminMembros() {
  const { membros, search, setSearch, filtroStatus, setFiltroStatus, detail, setDetail, handleStatusChange } = useAdminMembrosState();

  const filtered = membros.filter(m => {
    const matchSearch = m.nome.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.bi.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filtroStatus === 'Todos' || m.status === filtroStatus;
    return matchSearch && matchStatus;
  });

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h2>Membros</h2>
            <p>Gestão de membros da OEA ({membros.length} registados)</p>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-table-toolbar">
            <input
              className="admin-search-input"
              placeholder="Pesquisar por nome, email ou BI..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className="admin-filter-group">
              {['Todos', 'Activo', 'Pendente', 'Suspenso'].map(s => (
                <button
                  key={s}
                  className={`admin-filter-btn ${filtroStatus === s ? 'active' : ''}`}
                  onClick={() => setFiltroStatus(s)}
                >{s}</button>
              ))}
            </div>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>BI</th>
                  <th>Delegação</th>
                  <th>Status</th>
                  <th>Quota</th>
                  <th style={{width:140}}>Acções</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(m => (
                  <tr key={m.id}>
                    <td><span className="admin-table-title">{m.nome}</span></td>
                    <td className="admin-table-muted">{m.email}</td>
                    <td className="admin-table-muted">{m.bi}</td>
                    <td>{m.delegacao}</td>
                    <td>
                      <span className={`admin-status admin-status-${m.status === 'Activo' ? 'success' : m.status === 'Pendente' ? 'warning' : 'muted'}`}>
                        {m.status}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-status admin-status-${m.quota === 'em_dia' ? 'success' : m.quota === 'pendente' ? 'warning' : 'danger'}`}>
                        {m.quota === 'em_dia' ? 'Em dia' : m.quota === 'pendente' ? 'Pendente' : 'Atrasado'}
                      </span>
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-btn-sm" title="Detalhes" onClick={() => setDetail(m)}>
                          <Icon name="eye" size={15} />
                        </button>
                        {m.status === 'Pendente' && (
                          <button className="admin-btn-sm admin-btn-success" title="Aprovar" onClick={() => handleStatusChange(m.id, 'Activo')}>
                            <Icon name="check" size={15} />
                          </button>
                        )}
                        {(m.status === 'Activo' || m.status === 'Suspenso') && (
                          <button className="admin-btn-sm admin-btn-warning" title={m.status === 'Activo' ? 'Suspender' : 'Reativar'} onClick={() => handleStatusChange(m.id, m.status === 'Activo' ? 'Suspenso' : 'Activo')}>
                            <Icon name={m.status === 'Activo' ? 'close' : 'check'} size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={7} style={{textAlign:'center',padding:32,color:'var(--mid)'}}>Nenhum membro encontrado</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {detail && (
        <div className="admin-modal-overlay" onClick={() => setDetail(null)}>
          <div className="admin-modal admin-modal-sm" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Detalhes do Membro</h3>
              <button className="admin-btn-close" onClick={() => setDetail(null)}><Icon name="close" size={20} /></button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-detail-grid">
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Nome</span>
                  <span className="admin-detail-value">{detail.nome}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Email</span>
                  <span className="admin-detail-value">{detail.email}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Telefone</span>
                  <span className="admin-detail-value">{detail.telefone}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">BI</span>
                  <span className="admin-detail-value">{detail.bi}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Província</span>
                  <span className="admin-detail-value">{detail.provincia}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Delegação</span>
                  <span className="admin-detail-value">{detail.delegacao}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Status</span>
                  <span className={`admin-status admin-status-${detail.status === 'Activo' ? 'success' : detail.status === 'Pendente' ? 'warning' : 'muted'}`}>{detail.status}</span>
                </div>
                <div className="admin-detail-item">
                  <span className="admin-detail-label">Data de Adesão</span>
                  <span className="admin-detail-value">{detail.dataAdesao}</span>
                </div>
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn admin-btn-outline" onClick={() => setDetail(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
