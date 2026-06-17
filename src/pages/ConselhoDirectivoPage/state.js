import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';

export function useConselhoDirectivoPageState() {
  const location = useLocation();
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
}
