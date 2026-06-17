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
  const [filters, setFilters] = useState({ category: null, status: null, tags: [] });
  const [page, setPage] = useState(1);
  const perPage = 8;

  const loadNoticias = useCallback(async () => {
    setLoading(true);
    try {
      const params = { search };
      if (filters.category) params.category = filters.category;
      if (filters.status) params.status = filters.status;
      if (filters.tags.length) params.tags = filters.tags.join(',');

      const data = await newsApi.list(params);
      const items = Array.isArray(data) ? data
        : Array.isArray(data.data) ? data.data
        : Array.isArray(data.noticias) ? data.noticias
        : Array.isArray(data.news) ? data.news
        : data?.rows || data?.items || [];
      setNoticias(items);
    } catch (e) {
      console.error('Erro ao carregar notícias:', e);
      setNoticias([]);
    } finally {
      setLoading(false);
    }
  }, [search, filters]);

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
    try {
      const detail = await newsApi.getById(item.id);
      const d = detail.data || detail.noticia || detail.news || detail || {};
      setForm({
        title: d.title || '',
        summary: d.summary || '',
        content: d.content || '',
        category: d.category || 'NEWS',
        tags: d.tags || [],
        author: d.author || '',
        published: d.published || false,
        featured: d.featured || false,
        featuredImage: d.featuredImage || null,
        video: d.video || null,
        imageGallery: d.imageGallery || [],
      });
      setEditingId(item.id);
      setTab('form');
      setFormTab('geral');
    } catch (err) {
      console.error('Erro ao carregar detalhes, a usar dados da listagem:', err);
      toast.warn('A usar dados da listagem — detalhe não disponível');
      const d = item;
      setForm({
        title: d.title || '',
        summary: d.summary || '',
        content: d.content || '',
        category: d.category || 'NEWS',
        tags: d.tags || [],
        author: d.author || '',
        published: d.published || false,
        featured: d.featured || false,
        featuredImage: d.featuredImage || null,
        video: d.video || null,
        imageGallery: d.imageGallery || [],
      });
      setEditingId(item.id);
      setTab('form');
      setFormTab('geral');
    }
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

  const setFilter = (key, value) => {
    setFilters(f => ({ ...f, [key]: value }));
    setPage(1);
  };

  const removeFilter = (key) => {
    setFilters(f => {
      const next = { ...f };
      if (key === 'tags') next.tags = [];
      else next[key] = null;
      return next;
    });
    setPage(1);
  };

  const removeTagFilter = (tag) => {
    setFilters(f => ({ ...f, tags: f.tags.filter(t => t !== tag) }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({ category: null, status: null, tags: [] });
    setPage(1);
  };

  const filtered = noticias.filter(n => {
    const matchSearch = !search || n.title?.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !filters.category || n.category === filters.category;
    const matchStatus = !filters.status || (filters.status === 'published' ? n.published : !n.published);
    const matchTags = !filters.tags.length || filters.tags.some(t => n.tags?.includes(t));
    return matchSearch && matchCategory && matchStatus && matchTags;
  });

  const totalFiltered = filtered.length;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const activeFilterCount = [filters.category, filters.status, ...(filters.tags.length ? ['_'] : [])].filter(Boolean).length;

  return {
    noticias: paginated,
    allNoticias: noticias,
    loading,
    tab, setTab,
    formTab, setFormTab,
    form, setForm,
    editingId,
    search, setSearch,
    saving,
    uploadProgress,
    filters, setFilter, removeFilter, removeTagFilter, clearFilters,
    page, setPage, perPage,
    totalFiltered,
    activeFilterCount,
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
