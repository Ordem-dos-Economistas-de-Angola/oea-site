import AdminLayout from '../AdminLayout/AdminLayout';
import Icon from '../../../components/Icon/Icon';
import { getMembros, getQuotas, getQuotasByMembro, pagarQuota } from '../adminData';
import { useAdminQuotasState } from './state';

const MESES = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default function AdminQuotas() {
  const { membros, quotas, search, setSearch, ano, setAno, selectedMembro, setSelectedMembro, handlePagar, openMembroQuotas } = useAdminQuotasState();

  const filteredMembros = membros.filter(m =>
    m.nome.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: quotas.length,
    pagas: quotas.filter(q => q.estado === 'pago').length,
    pendentes: quotas.filter(q => q.estado === 'pendente').length,
  };

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h2>Gestão de Quotas</h2>
            <p>Controlo de pagamentos de quotas dos membros</p>
          </div>
        </div>

        <div className="admin-stats-grid admin-stats-sm">
          <div className="admin-stat-card">
            <div className="admin-stat-info">
              <span className="admin-stat-value">{stats.total}</span>
              <span className="admin-stat-label">Total Quotas ({ano})</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-info">
              <span className="admin-stat-value" style={{color:'var(--red)'}}>{stats.pagas}</span>
              <span className="admin-stat-label">Pagas</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-info">
              <span className="admin-stat-value" style={{color:'var(--gold)'}}>{stats.pendentes}</span>
              <span className="admin-stat-label">Pendentes</span>
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-table-toolbar">
            <input
              className="admin-search-input"
              placeholder="Pesquisar membro..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select className="admin-form-input" style={{width:'auto',maxWidth:120}} value={ano} onChange={e => setAno(Number(e.target.value))}>
              <option value={2025}>2025</option>
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
            </select>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Membro</th>
                  <th>Email</th>
                  <th>Total de Meses</th>
                  <th>Pagas</th>
                  <th>Pendentes</th>
                  <th style={{width:100}}>Acções</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembros.map(m => {
                  const mQuotas = quotas.filter(q => q.membroId === m.id && q.ano === ano);
                  const pagas = mQuotas.filter(q => q.estado === 'pago').length;
                  const pendentes = mQuotas.filter(q => q.estado === 'pendente').length;
                  return (
                    <tr key={m.id}>
                      <td><span className="admin-table-title">{m.nome}</span></td>
                      <td className="admin-table-muted">{m.email}</td>
                      <td>{mQuotas.length}</td>
                      <td><span className="admin-status admin-status-success">{pagas}</span></td>
                      <td><span className={`admin-status ${pendentes > 0 ? 'admin-status-warning' : 'admin-status-muted'}`}>{pendentes}</span></td>
                      <td>
                        <button className="admin-btn-sm" title="Ver quotas" onClick={() => openMembroQuotas(m)}>
                          <Icon name="eye" size={15} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedMembro && (
        <div className="admin-modal-overlay" onClick={() => setSelectedMembro(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>Quotas � {selectedMembro.nome}</h3>
              <button className="admin-btn-close" onClick={() => setSelectedMembro(null)}><Icon name="close" size={20} /></button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-quota-grid">
                {selectedMembro.quotas.length === 0 && (
                  <p style={{color:'var(--mid)',textAlign:'center',padding:32}}>Nenhuma quota encontrada para {ano}.</p>
                )}
                {MESES.map(mes => {
                  const quota = selectedMembro.quotas.find(q => q.mes === mes);
                  if (!quota) return null;
                  return (
                    <div key={quota.id} className={`admin-quota-card ${quota.estado}`}>
                      <div className="admin-quota-mes">{mes}</div>
                      <div className="admin-quota-valor">{quota.valor.toLocaleString()} Kz</div>
                      <div className="admin-quota-status">
                        {quota.estado === 'pago' ? (
                          <span className="admin-status admin-status-success">
                            <Icon name="check" size={12} /> Pago
                          </span>
                        ) : (
                          <span className="admin-status admin-status-warning">Pendente</span>
                        )}
                      </div>
                      {quota.dataPagamento && (
                        <div className="admin-quota-data">{quota.dataPagamento}</div>
                      )}
                      {quota.estado === 'pendente' && (
                        <button className="admin-btn-sm admin-btn-success" onClick={() => handlePagar(quota.id)}>
                          <Icon name="check" size={14} /> Pagar
                        </button>
                      )}
                    </div>
                   );
                 })}
              </div>
            </div>
            <div className="admin-modal-footer">
              <button className="admin-btn admin-btn-outline" onClick={() => setSelectedMembro(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
