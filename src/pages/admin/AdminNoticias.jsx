import { useState } from 'react';
import AdminLayout from './AdminLayout';
import Icon from '../../components/Icon';
import { getNoticias, addNoticia, updateNoticia, deleteNoticia } from './adminData';

const emptyForm = {
  tag: 'Institucional', tagColor: 'var(--red)', date: '', category: '', title: '',
  excerpt: '', content: '', image: null, icon: 'newspaper',
  views: 0, likes: 0, dislikes: 0, comments: 0, featured: false,
};

export default function AdminNoticias() {
  const [noticias, setNoticias] = useState(() => getNoticias());
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const openNew = () => {
    setForm({ ...emptyForm, date: new Date().toLocaleDateString('pt-PT', { day: 'numeric', month: 'short', year: 'numeric' }) });
    setModal('new');
  };

  const openEdit = (n) => {
    setForm({ ...n });
    setModal('edit');
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (modal === 'new') {
      const saved = addNoticia(form);
      setNoticias(prev => [saved, ...prev]);
    } else {
      const saved = updateNoticia(form.id, form);
      setNoticias(prev => prev.map(n => n.id === saved.id ? saved : n));
    }
    setModal(null);
  };

  const handleDelete = (id) => {
    deleteNoticia(id);
    setNoticias(prev => prev.filter(n => n.id !== id));
  };

  const filtered = noticias.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h2>Notícias</h2>
            <p>Gerir publicações e comunicados ({noticias.length} notícias)</p>
          </div>
          <button className="admin-btn admin-btn-primary" onClick={openNew}>
            <Icon name="edit" size={16} /> Nova Notícia
          </button>
        </div>

        <div className="admin-card">
          <div className="admin-table-toolbar">
            <input
              className="admin-search-input"
              placeholder="Pesquisar notícias..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Tag</th>
                  <th>Data</th>
                  <th>Views</th>
                  <th style={{width:120}}>Acções</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(n => (
                  <tr key={n.id}>
                    <td><span className="admin-table-title">{n.title}</span></td>
                    <td><span className="admin-badge" style={{background: n.tagColor}}>{n.tag}</span></td>
                    <td className="admin-table-muted">{n.date}</td>
                    <td>{n.views}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button className="admin-btn-sm" title="Editar" onClick={() => openEdit(n)}>
                          <Icon name="edit" size={15} />
                        </button>
                        <button className="admin-btn-sm admin-btn-danger" title="Eliminar" onClick={() => handleDelete(n.id)}>
                          <Icon name="close" size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={5} style={{textAlign:'center',padding:32,color:'var(--mid)'}}>Nenhuma notícia encontrada</td></tr>
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
              <h3>{modal === 'new' ? 'Nova Notícia' : 'Editar Notícia'}</h3>
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
                    <label className="admin-form-label">Tag</label>
                    <select className="admin-form-input" name="tag" value={form.tag} onChange={handleChange}>
                      <option>Institucional</option>
                      <option>Estratégia</option>
                      <option>Protocolos</option>
                      <option>Parecer Técnico</option>
                      <option>Formação</option>
                      <option>Internacional</option>
                      <option>Actualização</option>
                    </select>
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Categoria</label>
                    <input className="admin-form-input" name="category" value={form.category} onChange={handleChange} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-form-label">Data</label>
                    <input className="admin-form-input" name="date" value={form.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Resumo</label>
                  <textarea className="admin-form-input admin-form-textarea" name="excerpt" value={form.excerpt} onChange={handleChange} rows={2} />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Conteúdo</label>
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
