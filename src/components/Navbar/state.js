import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarState() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleMobile = () => {
    setMobileOpen((v) => !v);
    document.body.style.overflow = !mobileOpen ? 'hidden' : '';
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  const h = (hash) => isHome ? hash : '/' + hash;

  return { mobileOpen, isHome, toggleMobile, closeMobile, h };
}
