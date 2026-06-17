import { useState } from 'react';
import { getEventos, addEvento, updateEvento, deleteEvento } from '../adminData';

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

export function useAdminEventosState() {
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

  return { eventos, modal, form, search, handleChange, openNew, openEdit, handleSave, handleDelete, setModal, setSearch };
}
