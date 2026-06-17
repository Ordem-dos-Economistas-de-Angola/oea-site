const INDICADORES_MACRO = [
  { id: 'ipc', label: 'IPC', value: '26,30%', change: '+0,45%', status: 'Alta', icon: 'chart', desc: 'Índice de Preços ao Consumidor — inflação acumulada 12 meses' },
  { id: 'bna', label: 'Taxa BNA', value: '19,50%', change: '0,00%', status: 'Estável', icon: 'bank', desc: 'Taxa de juro de referência do Banco Nacional de Angola' },
  { id: 'pib', label: 'PIB', value: '2,80%', change: '+0,10%', status: 'Alta', icon: 'trophy', desc: 'Variação do PIB — taxa acumulada em 4 trimestres' },
  { id: 'desemprego', label: 'Desemprego', value: '31,90%', change: '-0,30%', status: 'Queda', icon: 'users', desc: 'Taxa de desemprego — PNAD Contínua' },
];

const INDICADORES_CAMBIO = [
  { id: 'usd', label: 'Dólar (USD/AOA)', value: '865,00 Kz', change: '+1,20%', status: 'Alta', icon: 'globe', desc: 'Dólar americano — cotação de compra' },
  { id: 'eur', label: 'Euro (EUR/AOA)', value: '940,00 Kz', change: '+0,80%', status: 'Alta', icon: 'globe', desc: 'Euro — cotação de compra' },
];

const INDICADORES_COMMODITIES = [
  { id: 'petroleo', label: 'Petróleo (Brent)', value: '81,10 USD', change: '-2,57%', status: 'Queda', icon: 'chart', desc: 'Petróleo Brent — barril em dólares' },
  { id: 'diamantes', label: 'Diamantes', value: '165,00 USD', change: '+0,50%', status: 'Alta', icon: 'trophy', desc: 'Diamante — quilate em dólares' },
];

export const CATEGORIAS = [
  { id: 'macro', label: 'Macroeconomia', indicadores: INDICADORES_MACRO },
  { id: 'cambio', label: 'Câmbio', indicadores: INDICADORES_CAMBIO },
  { id: 'commodities', label: 'Commodities', indicadores: INDICADORES_COMMODITIES },
];

export const INDICADORES_PRINCIPAIS = [...INDICADORES_MACRO, ...INDICADORES_CAMBIO, ...INDICADORES_COMMODITIES];

export function useIndicadoresState() {
  return { INDICADORES_PRINCIPAIS, CATEGORIAS };
}
