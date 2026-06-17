import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../service';

export function useAdminLoginPageState() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await auth.admin.login({
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('oea_admin_auth', JSON.stringify({ ...data, email: form.email }));
      navigate('/admin');
    } catch (err) {
      const msg = err.response?.data?.message || 'Credenciais inválidas. Tente novamente.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return { form, error, loading, handleChange, handleSubmit };
}
