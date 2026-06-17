import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../service';

export function useLoginState() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [remember, setRemember] = useState(false);
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
      const data = await auth.member.login({
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

  return { form, setForm, remember, setRemember, error, loading, handleChange, handleSubmit };
}
