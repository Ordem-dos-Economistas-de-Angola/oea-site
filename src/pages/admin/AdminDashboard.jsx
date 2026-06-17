import { useState } from 'react';
import AdminLayout from './AdminLayout';
import Icon from '../../components/Icon';
import { getStats } from './adminData';

export default function AdminDashboard() {
  const [stats] = useState(() => getStats());

  const cards = [
    { label: 'Membros', value: stats.totalMembros, sub: `${stats.activos} activos`, icon: 'users', color: 'var(--red)' },
    { label: 'Notícias', value: stats.totalNoticias, sub: 'publicações', icon: 'newspaper', color: 'var(--gold)' },
    { label: 'Eventos', value: stats.totalEventos, sub: 'agendados', icon: 'clock', color: '#6B3C00' },
    { label: 'Quotas Pagas', value: stats.quotasPagas, sub: `${stats.quotasPendentes} pendentes`, icon: 'wallet', color: 'var(--red-dark)' },
    { label: 'Receita', value: `${(stats.receitaRecebida / 1000).toFixed(0)}k`, sub: `${(stats.receitaPendente / 1000).toFixed(0)}k pendente`, icon: 'chart', color: 'var(--gold)' },
  ];

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <h2>Dashboard</h2>
          <p>Visão geral do sistema de gestão da OEA</p>
        </div>

        <div className="admin-stats-grid">
          {cards.map((card, i) => (
            <div key={i} className="admin-stat-card">
              <div className="admin-stat-icon" style={{ background: `${card.color}15`, color: card.color }}>
                <Icon name={card.icon} size={24} />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-value">{card.value}</span>
                <span className="admin-stat-label">{card.label}</span>
                <span className="admin-stat-sub">{card.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="admin-charts-row">
          <div className="admin-card">
            <div className="admin-card-header">
              <h3>Resumo de Receitas</h3>
            </div>
            <div className="admin-card-body">
              <div className="admin-progress-list">
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Receita Recebida</span>
                    <span className="admin-progress-value">{stats.receitaRecebida.toLocaleString()} Kz</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.receitaEsperada > 0 ? (stats.receitaRecebida / stats.receitaEsperada) * 100 : 0}%`, background: 'var(--red)' }} />
                  </div>
                </div>
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Receita Pendente</span>
                    <span className="admin-progress-value">{stats.receitaPendente.toLocaleString()} Kz</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.receitaEsperada > 0 ? (stats.receitaPendente / stats.receitaEsperada) * 100 : 0}%`, background: 'var(--gold)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h3>Membros por Status</h3>
            </div>
            <div className="admin-card-body">
              <div className="admin-progress-list">
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Activos</span>
                    <span className="admin-progress-value">{stats.activos}</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.totalMembros > 0 ? (stats.activos / stats.totalMembros) * 100 : 0}%`, background: 'var(--red)' }} />
                  </div>
                </div>
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Pendentes</span>
                    <span className="admin-progress-value">{stats.pendentesAprovacao}</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.totalMembros > 0 ? (stats.pendentesAprovacao / stats.totalMembros) * 100 : 0}%`, background: 'var(--gold)' }} />
                  </div>
                </div>
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Suspensos</span>
                    <span className="admin-progress-value">{stats.suspensos}</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.totalMembros > 0 ? (stats.suspensos / stats.totalMembros) * 100 : 0}%`, background: 'var(--gray)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <div className="admin-card-header">
              <h3>Quotas</h3>
            </div>
            <div className="admin-card-body">
              <div className="admin-progress-list">
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Pagas</span>
                    <span className="admin-progress-value">{stats.quotasPagas}</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.totalQuotas > 0 ? (stats.quotasPagas / stats.totalQuotas) * 100 : 0}%`, background: 'var(--red)' }} />
                  </div>
                </div>
                <div className="admin-progress-item">
                  <div className="admin-progress-label">
                    <span>Pendentes</span>
                    <span className="admin-progress-value">{stats.quotasPendentes}</span>
                  </div>
                  <div className="admin-progress-track">
                    <div className="admin-progress-fill" style={{ width: `${stats.totalQuotas > 0 ? (stats.quotasPendentes / stats.totalQuotas) * 100 : 0}%`, background: 'var(--gold)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
