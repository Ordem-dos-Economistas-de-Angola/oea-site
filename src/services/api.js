import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const auth = localStorage.getItem('oea_admin_auth');
  if (auth) {
    const parsed = JSON.parse(auth);
    if (parsed.access_token) {
      config.headers.Authorization = `Bearer ${parsed.access_token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('oea_admin_auth');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
