import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { news as newsApi } from '../../../service';
import { upload as uploadApi } from '../../../service';

const emptyForm = {
  title: '',
  summary: '',
  content: '',
  category: 'NEWS',
  tags: [],
  author: '',
  published: false,
  featured: false,
  featuredImage: null,
  video: null,
  imageGallery: [],
};

export function useAdminNoticiasState() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState('list');
  const [formTab, setFormTab] = useState('geral');
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const loadNoticias = useCallback(async () => {
    setLoading(true);
    try {
      const data = await newsApi.list({ search });
      setNoticias(Array.isArray(data) ? data : data.data || []);
    } catch {
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => { loadNoticias(); }, [loadNoticias]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCategoryChange = (option) => {
    setForm(f => ({ ...f, category: option.value }));
  };

  const handleSummaryChange = (html) => {
    setForm(f => ({ ...f, summary: html }));
  };

  const handleContentChange = (html) => {
    setForm(f => ({ ...f, content: html }));
  };

  const handleTagToggle = (tag) => {
    setForm(f => ({
      ...f,
      tags: f.tags.includes(tag) ? f.tags.filter(t => t !== tag) : [...f.tags, tag],
    }));
  };

  const openNew = () => {
    setForm(emptyForm);
    setEditingId(null);
    setTab('form');
    setFormTab('geral');
  };

  const openEdit = async (item) => {
    setForm({
      title: item.title || '',
      summary: item.summary || '',
      content: item.content || '',
      category: item.category || 'NEWS',
      tags: item.tags || [],
      author: item.author || '',
      published: item.published || false,
      featured: item.featured || false,
      featuredImage: item.featuredImage || null,
      video: item.video || null,
      imageGallery: item.imageGallery || [],
    });
    setEditingId(item.id);
    setTab('form');
    setFormTab('geral');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        title: form.title,
        summary: form.summary,
        content: form.content,
        category: form.category,
        tags: form.tags,
        author: form.author,
        published: form.published,
        featured: form.featured,
      };
      if (form.featuredImage) payload.featuredImage = form.featuredImage;
      if (form.video?.url) payload.video = form.video;
      if (form.imageGallery?.length) payload.imageGallery = form.imageGallery;

      if (editingId) {
        await newsApi.update(editingId, payload);
        toast.success('Notícia actualizada com sucesso');
      } else {
        await newsApi.create(payload);
        toast.success('Notícia criada com sucesso');
      }
      setTab('list');
      loadNoticias();
    } catch (err) {
      const msg = err.response?.data?.message || 'Erro ao salvar notícia';
      toast.error(msg);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja eliminar esta notícia?')) return;
    try {
      await newsApi.remove(id);
      toast.success('Notícia eliminada com sucesso');
      loadNoticias();
    } catch {
      toast.error('Erro ao eliminar notícia');
    }
  };

  const handleUploadImage = async (file) => {
    setUploadProgress({ type: 'image', progress: 0 });
    try {
      const result = await uploadApi.uploadImage(file, (e) => {
        setUploadProgress({ type: 'image', progress: Math.round((e.loaded / e.total) * 100) });
      });
      setForm(f => ({ ...f, featuredImage: { url: result.url, alt: f.title, caption: '' } }));
      toast.success('Imagem de destaque enviada com sucesso');
    } catch {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setUploadProgress(null);
    }
  };

  const handleUploadGalleryImage = async (file) => {
    setUploadProgress({ type: 'gallery', progress: 0 });
    try {
      const result = await uploadApi.uploadImage(file, (e) => {
        setUploadProgress({ type: 'gallery', progress: Math.round((e.loaded / e.total) * 100) });
      });
      setForm(f => ({ ...f, imageGallery: [...f.imageGallery, { url: result.url, alt: '', caption: '' }] }));
      toast.success('Imagem adicionada à galeria');
    } catch {
      toast.error('Erro ao fazer upload da imagem');
    } finally {
      setUploadProgress(null);
    }
  };

  const handleRemoveGalleryImage = (index) => {
    setForm(f => ({ ...f, imageGallery: f.imageGallery.filter((_, i) => i !== index) }));
  };

  const handleUploadVideo = async (file) => {
    setUploadProgress({ type: 'video', progress: 0 });
    try {
      const result = await uploadApi.uploadVideo(file, (e) => {
        setUploadProgress({ type: 'video', progress: Math.round((e.loaded / e.total) * 100) });
      });
      setForm(f => ({ ...f, video: { url: result.url, type: 'UPLOAD' } }));
      toast.success('Vídeo enviado com sucesso');
    } catch {
      toast.error('Erro ao fazer upload do vídeo');
    } finally {
      setUploadProgress(null);
    }
  };

  const handleVideoUrl = (url) => {
    const type = url.includes('youtube.com') || url.includes('youtu.be') ? 'YOUTUBE'
      : url.includes('vimeo.com') ? 'VIMEO' : 'UPLOAD';
    setForm(f => ({ ...f, video: { url, type } }));
  };

  const cancelEdit = () => {
    setTab('list');
    setForm(emptyForm);
    setEditingId(null);
  };

  const filtered = noticias.filter(n =>
    n.title?.toLowerCase().includes(search.toLowerCase())
  );

  return {
    noticias: filtered,
    loading,
    tab, setTab,
    formTab, setFormTab,
    form, setForm,
    editingId,
    search, setSearch,
    saving,
    uploadProgress,
    handleChange,
    handleCategoryChange,
    handleSummaryChange,
    handleContentChange,
    handleTagToggle,
    openNew, openEdit,
    handleSave,
    handleDelete,
    handleUploadImage,
    handleUploadGalleryImage,
    handleRemoveGalleryImage,
    handleUploadVideo,
    handleVideoUrl,
    cancelEdit,
    loadNoticias,
  };
}
