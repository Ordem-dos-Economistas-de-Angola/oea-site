import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAdminLayoutState() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('oea_admin_auth');
    navigate('/login');
  };

  return { sidebarOpen, setSidebarOpen, userMenu, setUserMenu, handleLogout };
}
