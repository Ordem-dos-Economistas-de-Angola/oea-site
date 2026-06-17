import { useState } from 'react';
import { useReveal } from '../../hooks/useReveal';

export function useEventosPageState() {
  const [page, setPage] = useState(1);
  useReveal();
  return { page, setPage };
}
