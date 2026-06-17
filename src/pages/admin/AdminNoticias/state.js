import { useState } from 'react';
import { getNoticias, addNoticia, updateNoticia, deleteNoticia } from '../adminData';

const emptyForm = {
  tag: 'Institucional', tagColor: 'var(--red)', date: '', category: '', title: '',
  excerpt: '', content: '', image: null, icon: 'newspaper',
  views: 0, likes: 0, dislikes: 0, comments: 0, featured: false,
};

export function useAdminNoticiasState() {
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

  return { noticias, modal, form, search, handleChange, openNew, openEdit, handleSave, handleDelete, setModal, setSearch };
}
