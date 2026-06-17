import api from '../../../services/api.js';

export async function login({ email, password }) {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
}