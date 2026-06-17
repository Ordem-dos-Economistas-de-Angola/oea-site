import { useState, useEffect, useCallback, useRef } from 'react';

const POLL_INTERVAL = 30000;

const FALLBACK_PRINCIPAIS = [
  { id: 'ipc', label: 'IPC', value: '26,30%', change: '+0,45%', status: 'Alta', icon: 'chart', desc: 'Índice de Preços ao Consumidor — inflação acumulada 12 meses' },
  { id: 'bna', label: 'Taxa BNA', value: '19,50%', change: '0,00%', status: 'Estável', icon: 'bank', desc: 'Taxa de juro de referência do Banco Nacional de Angola' },
  { id: 'pib', label: 'PIB', value: '2,80%', change: '+0,10%', status: 'Alta', icon: 'trophy', desc: 'Variação do PIB — taxa acumulada em 4 trimestres' },
  { id: 'desemprego', label: 'Desemprego', value: '31,90%', change: '-0,30%', status: 'Queda', icon: 'users', desc: 'Taxa de desemprego — PNAD Contínua' },
  { id: 'usd', label: 'Dólar (USD/AOA)', value: '865,00 Kz', change: '+1,20%', status: 'Alta', icon: 'globe', desc: 'Dólar americano — cotação de compra' },
  { id: 'eur', label: 'Euro (EUR/AOA)', value: '940,00 Kz', change: '+0,80%', status: 'Alta', icon: 'globe', desc: 'Euro — cotação de compra' },
  { id: 'petroleo', label: 'Petróleo (Brent)', value: '81,10 USD', change: '-2,57%', status: 'Queda', icon: 'chart', desc: 'Petróleo Brent — barril em dólares' },
  { id: 'diamantes', label: 'Diamantes', value: '165,00 USD', change: '+0,50%', status: 'Alta', icon: 'trophy', desc: 'Diamante — quilate em dólares' },
];

const FALLBACK_CATEGORIAS = [
  { id: 'macro', label: 'Macroeconomia', indicadores: FALLBACK_PRINCIPAIS.slice(0, 4) },
  { id: 'cambio', label: 'Câmbio', indicadores: FALLBACK_PRINCIPAIS.slice(4, 6) },
  { id: 'commodities', label: 'Commodities', indicadores: FALLBACK_PRINCIPAIS.slice(6, 8) },
];

let prevUsdRate = 0;
let prevEurRate = 0;

function formatRate(rate, prevRate) {
  const change = prevRate ? ((rate - prevRate) / prevRate) * 100 : 0;
  return {
    value: `${rate.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Kz`,
    change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
    status: change > 0.1 ? 'Alta' : change < -0.1 ? 'Queda' : 'Estável',
  };
}

async function fetchLiveRates() {
  const res = await fetch(
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json',
  );
  if (!res.ok) return null;
  const data = await res.json();
  const aoa = data?.usd?.aoa;
  const eurUsd = data?.usd?.eur;
  if (!aoa || !eurUsd) return null;

  const usdRate = aoa;
  const eurRate = aoa / eurUsd;

  const usd = formatRate(usdRate, prevUsdRate);
  const eur = formatRate(eurRate, prevEurRate);

  prevUsdRate = usdRate;
  prevEurRate = eurRate;

  return { usd, eur };
}

function mergeLiveRates(indicadores, rates) {
  if (!rates) return indicadores;
  return indicadores.map((ind) => {
    if (ind.id === 'usd') return { ...ind, ...rates.usd };
    if (ind.id === 'eur') return { ...ind, ...rates.eur };
    return ind;
  });
}

export function useIndicadoresState() {
  const [indicadores, setIndicadores] = useState(FALLBACK_PRINCIPAIS);
  const [categorias, setCategorias] = useState(FALLBACK_CATEGORIAS);
  const isMounted = useRef(false);

  const fetchIndicators = useCallback(async () => {
    try {
      const rates = await fetchLiveRates();
      if (!rates) return;
      setIndicadores((prev) => mergeLiveRates(prev, rates));
      setCategorias((prev) =>
        prev.map((cat) => ({
          ...cat,
          indicadores: mergeLiveRates(cat.indicadores, rates),
        })),
      );
    } catch {
      // keep current data on error
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    fetchIndicators();

    const interval = setInterval(fetchIndicators, POLL_INTERVAL);
    return () => {
      isMounted.current = false;
      clearInterval(interval);
    };
  }, [fetchIndicators]);

  return { INDICADORES_PRINCIPAIS: indicadores, CATEGORIAS: categorias };
}

export { FALLBACK_PRINCIPAIS as INDICADORES_PRINCIPAIS, FALLBACK_CATEGORIAS as CATEGORIAS };
