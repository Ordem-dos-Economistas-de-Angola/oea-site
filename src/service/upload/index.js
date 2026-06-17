import api from '../../services/api';

export async function uploadImage(file, onProgress) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await api.post('/upload/image', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: onProgress,
  });
  return res.data;
}

export async function uploadVideo(file, onProgress) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await api.post('/upload/video', fd, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: onProgress,
  });
  return res.data;
}
