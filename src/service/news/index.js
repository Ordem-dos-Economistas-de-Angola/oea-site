import api from '../../services/api';

export async function list(params) {
  const res = await api.get('/admin/news', { params });
  return res.data;
}

export async function create(data) {
  const res = await api.post('/admin/news', data);
  return res.data;
}

export async function update(id, data) {
  const res = await api.put(`/admin/news/${id}`, data);
  return res.data;
}

export async function remove(id) {
  await api.delete(`/admin/news/${id}`);
}

export async function getById(id) {
  const res = await api.get(`/admin/news/${id}`);
  return res.data;
}
