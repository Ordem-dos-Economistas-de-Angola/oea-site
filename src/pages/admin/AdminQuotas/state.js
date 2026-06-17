import { useState } from 'react';
import { getMembros, getQuotas, getQuotasByMembro, pagarQuota } from '../adminData';

export function useAdminQuotasState() {
  const [membros] = useState(() => getMembros());
  const [quotas, setQuotas] = useState(() => getQuotas());
  const [search, setSearch] = useState('');
  const [ano, setAno] = useState(2026);
  const [selectedMembro, setSelectedMembro] = useState(null);

  const handlePagar = (quotaId) => {
    const updated = pagarQuota(quotaId);
    setQuotas(prev => prev.map(q => q.id === updated.id ? updated : q));
    if (selectedMembro) {
      setSelectedMembro(prev => ({
        ...prev,
        quotas: prev.quotas.map(q => q.id === updated.id ? updated : q),
      }));
    }
  };

  const openMembroQuotas = (m) => {
    const membroQuotas = getQuotasByMembro(m.id).filter(q => q.ano === ano);
    setSelectedMembro({ ...m, quotas: membroQuotas });
  };

  return { membros, quotas, search, setSearch, ano, setAno, selectedMembro, setSelectedMembro, handlePagar, openMembroQuotas };
}
