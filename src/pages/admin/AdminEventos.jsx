import { useState } from 'react';
import AdminLayout from './AdminLayout';
import Icon from '../../components/Icon';
import { getEventos, addEvento, updateEvento, deleteEvento } from './adminData';

const emptyForm = {
  day: '', month: '', type: 'Webinar', category: '', title: '',
  time: '', local: '', vagas: '', status: 'Inscrições abertas', cta: 'Inscrever-me →',
  headerBg: 'var(--red)', formadora: '', image: null,
  excerpt: '', content: '',
};

const headerColors = [
  { label: 'Vermelho', value: 'var(--red)' },
  { label: 'Vermelho Escuro', value: 'var(--red-dark)' },
  { label: 'Dourado', value: 'var(--gold)' },
  { label: 'Castanho', value: '#6B3C00' },
];

export default function AdminEventos() {
  const [eventos, setEventos] = useState(() => getEventos());
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const openNew = () => {
    setForm(emptyForm);
    setModal('new');
  };

  const openEdit = (ev) => {
    setForm({ ...ev });
    setModal('edit');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (modal === 'new') {
      const saved = addEvento(form);
      setEventos(prev => [saved, ...prev]);
    } else {
      const saved = updateEvento(form.id, form);
      setEventos(prev => prev.map(ev => ev.id === saved.id ? saved : ev));
    }
    setModal(null);
  };

  const handleDelete = (id) => {
    deleteEvento(id);
    setEventos(prev => prev.filter(ev => ev.id !== id));
  };

  const filtered = eventos.filter(ev =>
    ev.title.toLowerCase().includes(search.toLowerCase()) ||
    ev.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h2>Eventos</h2>
            <p>Gerir eventos e formações ({eventos.length} eventos)</p>
          </div>
          <button className="admin-btn admin-btn-primary" onClick={openNew}>
            <Icon name="edit" size={16} /> Novo Evento
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-table-toolbar">
            <input
              className="admin-search-input"
              placeholder="Pesquisar eventos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Estado</th>
                  <th style={{width:120}}>Acções</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(ev => (
                  <tr key={ev.id}>
                    <td><span className="admin-table-title">{ev.title}</span></td>
                    <td><span className="admin-badge" style={{background: ev.headerBg}}>{ev.type}</span></td>
                    <td className="admin-table-muted">{ev.day} {ev.month}</td>
                    <td>
                      <span className={`admin-status admin-status-${ev.status.toLowerCase().includes('abertas') ? 'success' : ev.status.toLowerCase().includes('brevemente') ? 'warning' : 'muted'}`}>
                        {ev.status}
                      </span>
                    </td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-btn-sm" title="Editar" onClick={() => openEdit(ev)}>
                          <Icon name="edit" size={15} />
                        </button>
                        <button className="admin-btn-sm admin-btn-danger" title="Eliminar" onClick={() => handleDelete(ev.id)}>
                          <Icon name="close" size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} style={{textAlign:'center',padding:32,color:'var(--mid)'}}>Nenhum evento encontrado</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {modal && (
        <div className="admin-modal-overlay" onClick={() => setModal(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{modal === 'new' ? 'Novo Evento' : 'Editar Evento'}</h3>
              <button className="admin-btn-close" onClick={() => setModal(null)}><Icon name="close" size={20} /></button>
            </div>
            <form onSubmit={handleSave}>
              <div className="admin-modal-body">
                <div className="admin-form-group">
                  <label className="admin-form-label">Título</label>
                  <input className="admin-form-input" name="title" value={form.title} onChange={handleChange} required />
                </div>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Dia</label>
                    <input className="admin-form-input" name="day" value={form.day} onChange={handleChange} placeholder="30" />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Mês</label>
                    <input className="admin-form-input" name="month" value={form.month} onChange={handleChange} placeholder="Junho 2026" />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Tipo</label>
                    <select className="admin-form-input" name="type" value={form.type} onChange={handleChange}>
                      <option>Webinar</option>
                      <option>Congresso</option>
                      <option>Workshop</option>
                      <option>Conferência</option>
                      <option>Seminário</option>
                      <option>Palestra</option>
                      <option>Mentoria</option>
                      <option>Formação</option>
                    </select>
                  </div>
                </div>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Categoria</label>
                    <input className="admin-form-input" name="category" value={form.category} onChange={handleChange} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Cor do Header</label>
                    <select className="admin-form-input" name="headerBg" value={form.headerBg} onChange={handleChange}>
                      {headerColors.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>
                  </div>
                </div>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Horário</label>
                    <input className="admin-form-input" name="time" value={form.time} onChange={handleChange} placeholder="15:00 – 17:00" />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Local</label>
                    <input className="admin-form-input" name="local" value={form.local} onChange={handleChange} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Vagas</label>
                    <input className="admin-form-input" name="vagas" value={form.vagas} onChange={handleChange} />
                  </div>
                </div>
                <div className="admin-form-row">
                  <div className="admin-form-group">
                    <label className="admin-form-label">Estado</label>
                    <input className="admin-form-input" name="status" value={form.status} onChange={handleChange} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">CTA</label>
                    <input className="admin-form-input" name="cta" value={form.cta} onChange={handleChange} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Formadora</label>
                    <input className="admin-form-input" name="formadora" value={form.formadora} onChange={handleChange} />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Resumo</label>
                  <textarea className="admin-form-input admin-form-textarea" name="excerpt" value={form.excerpt} onChange={handleChange} rows={2} />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Descrição Completa</label>
                  <textarea className="admin-form-input admin-form-textarea" name="content" value={form.content} onChange={handleChange} rows={6} />
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setModal(null)}>Cancelar</button>
                <button type="submit" className="admin-btn admin-btn-primary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
