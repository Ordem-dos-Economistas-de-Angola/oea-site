import { useState } from 'react';
import { getMembros, updateMembro } from '../adminData';

export function useAdminMembrosState() {
  const [membros, setMembros] = useState(() => getMembros());
  const [search, setSearch] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('Todos');
  const [detail, setDetail] = useState(null);

  const handleStatusChange = (id, novoStatus) => {
    const saved = updateMembro(id, { status: novoStatus });
    setMembros(prev => prev.map(m => m.id === saved.id ? saved : m));
  };

  return { membros, search, setSearch, filtroStatus, setFiltroStatus, detail, setDetail, handleStatusChange };
}
