import { NOTICIAS as INITIAL_NOTICIAS, EVENTOS as INITIAL_EVENTOS } from '../../data/content';

const ADMIN_STORAGE_KEY = 'oea_admin_data';

const MEMBROS_MOCK = [
  { id: 1, nome: 'João Mendes', email: 'joao.mendes@email.com', telefone: '+244 923 456 789', bi: '000123LA045', provincia: 'Luanda', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-01-15', quota: 'em_dia' },
  { id: 2, nome: 'Maria Santos', email: 'maria.santos@email.com', telefone: '+244 933 456 789', bi: '000456LA045', provincia: 'Luanda', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-03-20', quota: 'em_dia' },
  { id: 3, nome: 'Ana Ferreira', email: 'ana.ferreira@email.com', telefone: '+244 943 456 789', bi: '000789HU045', provincia: 'Huambo', delegacao: 'Centro', status: 'Activo', dataAdesao: '2024-05-10', quota: 'pendente' },
  { id: 4, nome: 'Carlos Silva', email: 'carlos.silva@email.com', telefone: '+244 953 456 789', bi: '000012BG045', provincia: 'Benguela', delegacao: 'Centro', status: 'Pendente', dataAdesao: '2025-01-08', quota: 'pendente' },
  { id: 5, nome: 'Pedro Costa', email: 'pedro.costa@email.com', telefone: '+244 963 456 789', bi: '000345LN045', provincia: 'Lunda Norte', delegacao: 'Leste', status: 'Activo', dataAdesao: '2024-08-22', quota: 'em_dia' },
  { id: 6, nome: 'Sofia Martins', email: 'sofia.martins@email.com', telefone: '+244 973 456 789', bi: '000678HL045', provincia: 'Huíla', delegacao: 'Sul', status: 'Activo', dataAdesao: '2024-11-05', quota: 'atrasado' },
  { id: 7, nome: 'Lucas Pereira', email: 'lucas.pereira@email.com', telefone: '+244 983 456 789', bi: '000901LA045', provincia: 'Luanda', delegacao: 'Norte', status: 'Suspenso', dataAdesao: '2023-06-12', quota: 'atrasado' },
  { id: 8, nome: 'Isabel Gomes', email: 'isabel.gomes@email.com', telefone: '+244 993 456 789', bi: '000234CN045', provincia: 'Cabinda', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-02-28', quota: 'em_dia' },
  { id: 9, nome: 'Rui Almeida', email: 'rui.almeida@email.com', telefone: '+244 911 456 789', bi: '000567KS045', provincia: 'Kwanza Sul', delegacao: 'Centro', status: 'Activo', dataAdesao: '2024-07-14', quota: 'em_dia' },
  { id: 10, nome: 'Tânia Rodrigues', email: 'tania.rodrigues@email.com', telefone: '+244 922 456 789', bi: '000890MX045', provincia: 'Moxico', delegacao: 'Leste', status: 'Pendente', dataAdesao: '2025-02-01', quota: 'pendente' },
  { id: 11, nome: 'Fernando Lopes', email: 'fernando.lopes@email.com', telefone: '+244 934 456 789', bi: '000123NA045', provincia: 'Namibe', delegacao: 'Sul', status: 'Activo', dataAdesao: '2024-04-18', quota: 'em_dia' },
  { id: 12, nome: 'Catarina Dias', email: 'catarina.dias@email.com', telefone: '+244 945 456 789', bi: '000456UI045', provincia: 'Uíge', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-09-30', quota: 'pendente' },
  { id: 13, nome: 'António Carvalho', email: 'antonio.carvalho@email.com', telefone: '+244 956 456 789', bi: '000789BO045', provincia: 'Bengo', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-12-01', quota: 'em_dia' },
  { id: 14, nome: 'Mariana Santos', email: 'mariana.santos@email.com', telefone: '+244 967 456 789', bi: '000012BI045', provincia: 'Bié', delegacao: 'Centro', status: 'Suspenso', dataAdesao: '2023-10-25', quota: 'atrasado' },
  { id: 15, nome: 'Paulo Oliveira', email: 'paulo.oliveira@email.com', telefone: '+244 978 456 789', bi: '000345LN045', provincia: 'Lunda Sul', delegacao: 'Leste', status: 'Activo', dataAdesao: '2024-06-19', quota: 'em_dia' },
  { id: 16, nome: 'Rita Fonseca', email: 'rita.fonseca@email.com', telefone: '+244 989 456 789', bi: '000678CN045', provincia: 'Cunene', delegacao: 'Sul', status: 'Pendente', dataAdesao: '2025-03-12', quota: 'pendente' },
  { id: 17, nome: 'Bruno Teixeira', email: 'bruno.teixeira@email.com', telefone: '+244 912 456 789', bi: '000901MK045', provincia: 'Malange', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-10-08', quota: 'em_dia' },
  { id: 18, nome: 'Inês Ribeiro', email: 'ines.ribeiro@email.com', telefone: '+244 924 456 789', bi: '000234KK045', provincia: 'Kuando Kubango', delegacao: 'Sul', status: 'Activo', dataAdesao: '2024-11-20', quota: 'pendente' },
  { id: 19, nome: 'Hugo Machado', email: 'hugo.machado@email.com', telefone: '+244 935 456 789', bi: '000567LA045', provincia: 'Luanda', delegacao: 'Norte', status: 'Activo', dataAdesao: '2024-03-05', quota: 'em_dia' },
  { id: 20, nome: 'Daniela Nunes', email: 'daniela.nunes@email.com', telefone: '+244 946 456 789', bi: '000890HU045', provincia: 'Huambo', delegacao: 'Centro', status: 'Activo', dataAdesao: '2024-05-25', quota: 'atrasado' },
];

const QUOTAS_MOCK = [
  { id: 1, membroId: 1, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: '2026-01-10', estado: 'pago' },
  { id: 2, membroId: 1, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: '2026-02-08', estado: 'pago' },
  { id: 3, membroId: 1, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: '2026-03-12', estado: 'pago' },
  { id: 4, membroId: 1, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: '2026-04-09', estado: 'pago' },
  { id: 5, membroId: 1, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: '2026-05-11', estado: 'pago' },
  { id: 6, membroId: 1, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 7, membroId: 2, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: '2026-01-15', estado: 'pago' },
  { id: 8, membroId: 2, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: '2026-02-14', estado: 'pago' },
  { id: 9, membroId: 2, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: '2026-03-13', estado: 'pago' },
  { id: 10, membroId: 2, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: '2026-04-16', estado: 'pago' },
  { id: 11, membroId: 2, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: '2026-05-10', estado: 'pago' },
  { id: 12, membroId: 2, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 13, membroId: 3, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: '2026-01-20', estado: 'pago' },
  { id: 14, membroId: 3, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: '2026-02-18', estado: 'pago' },
  { id: 15, membroId: 3, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: '2026-03-22', estado: 'pago' },
  { id: 16, membroId: 3, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 17, membroId: 3, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 18, membroId: 3, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 19, membroId: 6, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: '2026-01-25', estado: 'pago' },
  { id: 20, membroId: 6, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 21, membroId: 6, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 22, membroId: 6, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 23, membroId: 6, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 24, membroId: 6, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 25, membroId: 7, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 26, membroId: 7, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 27, membroId: 7, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 28, membroId: 7, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 29, membroId: 7, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 30, membroId: 7, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 31, membroId: 14, ano: 2026, mes: 'Janeiro', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 32, membroId: 14, ano: 2026, mes: 'Fevereiro', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 33, membroId: 14, ano: 2026, mes: 'Março', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 34, membroId: 14, ano: 2026, mes: 'Abril', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 35, membroId: 14, ano: 2026, mes: 'Maio', valor: 5000, dataPagamento: null, estado: 'pendente' },
  { id: 36, membroId: 14, ano: 2026, mes: 'Junho', valor: 5000, dataPagamento: null, estado: 'pendente' },
];

function generateId(items) {
  return items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
}

export function loadAdminData() {
  const stored = localStorage.getItem(ADMIN_STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  const initial = {
    noticias: [],
    eventos: [],
    membros: MEMBROS_MOCK,
    quotas: QUOTAS_MOCK,
  };
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

export function saveAdminData(data) {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

export function getNoticias() {
  const data = loadAdminData();
  if (data.noticias.length === 0) {
    data.noticias = INITIAL_NOTICIAS.map(n => ({ ...n }));
    saveAdminData(data);
  }
  return data.noticias;
}

export function addNoticia(noticia) {
  const data = loadAdminData();
  const nova = { ...noticia, id: generateId(data.noticias) };
  data.noticias.unshift(nova);
  saveAdminData(data);
  return nova;
}

export function updateNoticia(id, fields) {
  const data = loadAdminData();
  const idx = data.noticias.findIndex(n => n.id === id);
  if (idx === -1) return null;
  data.noticias[idx] = { ...data.noticias[idx], ...fields };
  saveAdminData(data);
  return data.noticias[idx];
}

export function deleteNoticia(id) {
  const data = loadAdminData();
  data.noticias = data.noticias.filter(n => n.id !== id);
  saveAdminData(data);
}

export function getEventos() {
  const data = loadAdminData();
  if (data.eventos.length === 0) {
    data.eventos = INITIAL_EVENTOS.map(e => ({ ...e }));
    saveAdminData(data);
  }
  return data.eventos;
}

export function addEvento(evento) {
  const data = loadAdminData();
  const novo = { ...evento, id: generateId(data.eventos) };
  data.eventos.unshift(novo);
  saveAdminData(data);
  return novo;
}

export function updateEvento(id, fields) {
  const data = loadAdminData();
  const idx = data.eventos.findIndex(e => e.id === id);
  if (idx === -1) return null;
  data.eventos[idx] = { ...data.eventos[idx], ...fields };
  saveAdminData(data);
  return data.eventos[idx];
}

export function deleteEvento(id) {
  const data = loadAdminData();
  data.eventos = data.eventos.filter(e => e.id !== id);
  saveAdminData(data);
}

export function getMembros() {
  return loadAdminData().membros;
}

export function addMembro(membro) {
  const data = loadAdminData();
  const novo = { ...membro, id: generateId(data.membros) };
  data.membros.push(novo);
  saveAdminData(data);
  return novo;
}

export function updateMembro(id, fields) {
  const data = loadAdminData();
  const idx = data.membros.findIndex(m => m.id === id);
  if (idx === -1) return null;
  data.membros[idx] = { ...data.membros[idx], ...fields };
  saveAdminData(data);
  return data.membros[idx];
}

export function deleteMembro(id) {
  const data = loadAdminData();
  data.membros = data.membros.filter(m => m.id !== id);
  saveAdminData(data);
}

export function getQuotas() {
  return loadAdminData().quotas;
}

export function getQuotasByMembro(membroId) {
  return loadAdminData().quotas.filter(q => q.membroId === membroId);
}

export function updateQuota(id, fields) {
  const data = loadAdminData();
  const idx = data.quotas.findIndex(q => q.id === id);
  if (idx === -1) return null;
  data.quotas[idx] = { ...data.quotas[idx], ...fields };
  saveAdminData(data);
  return data.quotas[idx];
}

export function pagarQuota(id) {
  const hoje = new Date().toISOString().split('T')[0];
  return updateQuota(id, { estado: 'pago', dataPagamento: hoje });
}

export function getStats() {
  const data = loadAdminData();
  const totalMembros = data.membros.length;
  const activos = data.membros.filter(m => m.status === 'Activo').length;
  const totalQuotas = data.quotas.length;
  const pagas = data.quotas.filter(q => q.estado === 'pago').length;
  const totalNoticias = data.noticias.length;
  const totalEventos = data.eventos.length;
  const receitaEsperada = totalQuotas * 5000;
  const receitaRecebida = pagas * 5000;

  return {
    totalMembros,
    activos,
    pendentesAprovacao: data.membros.filter(m => m.status === 'Pendente').length,
    suspensos: data.membros.filter(m => m.status === 'Suspenso').length,
    totalNoticias,
    totalEventos,
    totalQuotas,
    quotasPagas: pagas,
    quotasPendentes: totalQuotas - pagas,
    receitaEsperada,
    receitaRecebida,
    receitaPendente: receitaEsperada - receitaRecebida,
  };
}

export function getMonthlyRevenue() {
  const data = loadAdminData();
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  return meses.map((mes, i) => {
    const mesNum = i + 1;
    const quotasMes = data.quotas.filter(q => {
      const qMes = [
        'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
        'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
      ].indexOf(q.mes) + 1;
      return qMes === mesNum && q.ano === 2026;
    });
    const pago = quotasMes.filter(q => q.estado === 'pago').length * 5000;
    const pendente = quotasMes.filter(q => q.estado === 'pendente').length * 5000;
    return { mes, receita: pago, pendente, total: pago + pendente };
  });
}

export function getMonthlyMembers() {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
  return meses.map((mes, i) => {
    const base = 10 + i * 2;
    const activos = Math.round(base + Math.random() * 3);
    const pendentes = Math.round(2 + Math.random() * 2);
    return { mes, activos, pendentes, suspensos: 1 };
  });
}
