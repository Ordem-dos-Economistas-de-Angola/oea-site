import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Icon from '../../../components/Icon/Icon';
import AdminLayout from '../AdminLayout/AdminLayout';
import { useAdminNoticiasState } from './state';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../../components/ui/table/table';
import { Badge } from '../../../components/ui/badge/badge';
import { Pagination } from '../../../components/ui/pagination/pagination';
import '../../../styles/shadcn.css';
import './style.css';

const TAG_OPTIONS = ['Institucional', 'Estratégia', 'Protocolos', 'Parecer Técnico', 'Formação', 'Internacional', 'Actualização'];
const CATEGORY_OPTIONS = ['NEWS', 'ANNOUNCEMENTS', 'EVENTS', 'PUBLICATIONS', 'LEGISLATION'];
const categorySelectOptions = CATEGORY_OPTIONS.map(c => ({ value: c, label: c }));
const STATUS_OPTIONS = [{ value: 'published', label: 'Publicado' }, { value: 'draft', label: 'Rascunho' }];

const categoryColors = {
  NEWS: '#cbd5e1',
  ANNOUNCEMENTS: '#93c5fd',
  EVENTS: '#a5b4fc',
  PUBLICATIONS: '#c4b5fd',
  LEGISLATION: '#86efac',
};

const statusLabels = { published: 'Publicado', draft: 'Rascunho' };

function FilterSheet({ s }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="admin-btn admin-btn-outline" onClick={() => setOpen(true)}>
        <Icon name="filter" size={16} /> Filtros
        {s.activeFilterCount > 0 && (
          <span className="filter-count-badge">{s.activeFilterCount}</span>
        )}
      </button>
      {open && (
        <>
          <div className="offcanvas-overlay" onClick={() => setOpen(false)} />
          <div className="offcanvas-panel">
            <div className="offcanvas-header">
              <h3>Filtros</h3>
              <p>Filtrar notícias por categoria, estado ou tags</p>
              <button className="offcanvas-close" onClick={() => setOpen(false)}>
                <Icon name="close" size={16} />
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="admin-form-group">
                <label className="admin-form-label">Categoria</label>
                <Select
                  options={categorySelectOptions}
                  value={categorySelectOptions.find(o => o.value === s.filters.category) || null}
                  onChange={o => s.setFilter('category', o ? o.value : null)}
                  placeholder="Todas as categorias"
                  isClearable
                  isSearchable={false}
                  styles={{ control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 8, minHeight: 38, fontFamily: 'inherit', fontSize: 13 }), menu: (base) => ({ ...base, borderRadius: 8, fontSize: 13 }), option: (base, { isFocused, isSelected }) => ({ ...base, backgroundColor: isSelected ? 'var(--red)' : isFocused ? 'var(--light)' : 'transparent', color: isSelected ? '#fff' : 'var(--dark)' }) }}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Estado</label>
                <Select
                  options={STATUS_OPTIONS}
                  value={STATUS_OPTIONS.find(o => o.value === s.filters.status) || null}
                  onChange={o => s.setFilter('status', o ? o.value : null)}
                  placeholder="Todos os estados"
                  isClearable
                  isSearchable={false}
                  styles={{ control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 8, minHeight: 38, fontFamily: 'inherit', fontSize: 13 }), menu: (base) => ({ ...base, borderRadius: 8, fontSize: 13 }), option: (base, { isFocused, isSelected }) => ({ ...base, backgroundColor: isSelected ? 'var(--red)' : isFocused ? 'var(--light)' : 'transparent', color: isSelected ? '#fff' : 'var(--dark)' }) }}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-form-label">Tags</label>
                <div className="an-tag-list">
                  {TAG_OPTIONS.map(t => (
                    <label key={t} className={`an-tag-chip ${s.filters.tags.includes(t) ? 'active' : ''}`}>
                      <input type="checkbox" checked={s.filters.tags.includes(t)} onChange={() => {
                        s.setFilter('tags', s.filters.tags.includes(t) ? s.filters.tags.filter(x => x !== t) : [...s.filters.tags, t]);
                      }} hidden />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="offcanvas-footer">
              <button className="admin-btn admin-btn-outline" onClick={s.clearFilters} style={{ flex: 1 }}>Limpar filtros</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function FilterBar({ s }) {
  const chips = [];
  if (s.filters.category) chips.push({ key: 'category', label: `Categoria: ${s.filters.category}`, onRemove: () => s.removeFilter('category') });
  if (s.filters.status) chips.push({ key: 'status', label: `Estado: ${statusLabels[s.filters.status]}`, onRemove: () => s.removeFilter('status') });
  s.filters.tags.forEach(t => chips.push({ key: `tag-${t}`, label: t, onRemove: () => s.removeTagFilter(t) }));

  if (!chips.length) return null;

  return (
    <div className="filter-bar">
      {chips.map(chip => (
        <Badge key={chip.key} variant="secondary" className="shadcn-badge-clickable">
          {chip.label}
          <button className="shadcn-badge-remove" onClick={chip.onRemove}>&times;</button>
        </Badge>
      ))}
      <button className="admin-btn-sm" onClick={s.clearFilters} style={{ marginLeft: 8, fontSize: 12 }}>Limpar</button>
    </div>
  );
}

function ActionDropdown({ n, s }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div className="action-dropdown" ref={ref}>
      <button className="action-dropdown-trigger" title="Opções" onClick={() => setOpen(!open)}>
        <Icon name="more-horizontal" size={16} />
      </button>
      {open && (
        <div className="action-dropdown-menu">
          <button className="action-dropdown-item" onClick={() => { setOpen(false); s.openEdit(n); }}>
            <Icon name="edit" size={14} /> Editar
          </button>
          <div className="action-dropdown-divider" />
          <button className="action-dropdown-item action-dropdown-item-danger" onClick={() => { setOpen(false); s.handleDelete(n.id); }}>
            <Icon name="trash" size={14} /> Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdminNoticias() {
  const s = useAdminNoticiasState();

  return (
    <AdminLayout>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <div className="admin-page">
        <div className="admin-page-header">
          <div>
            <h2>Notícias</h2>
            <p>Gerenciar publicações e comunicados</p>
          </div>
        </div>

        <div className="an-tabs">
          <button className={`an-tab ${s.tab === 'list' ? 'active' : ''}`} onClick={() => s.setTab('list')}>
            <Icon name="newspaper" size={16} /> Listagem
          </button>
          <button className={`an-tab ${s.tab === 'form' ? 'active' : ''}`} onClick={() => s.tab === 'list' ? s.openNew() : null}>
            <Icon name="edit" size={16} /> {s.editingId ? 'Editar Notícia' : 'Nova Notícia'}
          </button>
        </div>

        {s.tab === 'list' && (
          <div className="admin-card" style={{ padding: 0 }}>
            <div className="list-toolbar">
              <input className="admin-search-input" placeholder="Pesquisar notícias..." value={s.search} onChange={e => { s.setSearch(e.target.value); s.setPage(1); }} style={{ width: 280 }} />
              <div className="list-toolbar-spacer" />
              <FilterSheet s={s} />
              <button className="admin-btn admin-btn-primary" onClick={s.openNew}>
                <Icon name="edit" size={16} /> Nova Notícia
              </button>
            </div>
            <div style={{ padding: '0 16px' }}>
              <FilterBar s={s} />
            </div>
            <div style={{ overflowX: 'auto' }}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ paddingLeft: 28, width: '40%' }}>Título</TableHead>
                    <TableHead style={{ width: '15%' }}>Categoria</TableHead>
                    <TableHead style={{ width: '12%' }}>Estado</TableHead>
                    <TableHead style={{ width: '15%' }}>Data</TableHead>
                    <TableHead style={{ width: 100, textAlign: 'center' }}>Acções</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {s.loading && (
                    <TableRow>
                      <TableCell colSpan={5} style={{ textAlign: 'center', padding: 32, color: 'var(--muted-foreground)' }}>A carregar...</TableCell>
                    </TableRow>
                  )}
                  {!s.loading && s.noticias.map(n => (
                    <TableRow key={n.id}>
                      <TableCell style={{ paddingLeft: 28 }}>
                        <span className="truncate" style={{ display: 'block', maxWidth: 400, fontWeight: 500 }}>{n.title}</span>
                      </TableCell>
                      <TableCell>
                        <span style={{ fontSize: 12, fontWeight: 600, color: categoryColors[n.category] }}>
                          {n.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`admin-status ${n.published ? 'admin-status-success' : 'admin-status-muted'}`}>
                          {n.published ? 'Publicado' : 'Rascunho'}
                        </span>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {n.publishedAt ? new Date(n.publishedAt).toLocaleDateString('pt-PT') : n.createdAt ? new Date(n.createdAt).toLocaleDateString('pt-PT') : '-'}
                      </TableCell>
                      <TableCell style={{ textAlign: 'center' }}>
                        <ActionDropdown n={n} s={s} />
                      </TableCell>
                    </TableRow>
                  ))}
                  {!s.loading && s.noticias.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} style={{ textAlign: 'center', padding: 32, color: 'var(--muted-foreground)' }}>Nenhuma notícia encontrada</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <Pagination total={s.totalFiltered} page={s.page} perPage={s.perPage} onChange={s.setPage} />
          </div>
        )}

        {s.tab === 'form' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <h3>{s.editingId ? 'Editar Notícia' : 'Nova Notícia'}</h3>
            </div>
            <div className="admin-card-body">
              <div className="an-form-tabs">
                <button className={`an-form-tab ${s.formTab === 'geral' ? 'active' : ''}`} onClick={() => s.setFormTab('geral')}>
                  Informação Geral
                </button>
                <button className={`an-form-tab ${s.formTab === 'imagens' ? 'active' : ''}`} onClick={() => s.setFormTab('imagens')}>
                  Imagens
                </button>
                <button className={`an-form-tab ${s.formTab === 'video' ? 'active' : ''}`} onClick={() => s.setFormTab('video')}>
                  Vídeo
                </button>
              </div>

              <form onSubmit={s.handleSave}>
                {s.formTab === 'geral' && (
                  <div className="an-form-section">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Título *</label>
                      <input className="admin-form-input" name="title" value={s.form.title} onChange={s.handleChange} required />
                    </div>
                    <div className="admin-form-row">
                      <div className="admin-form-group">
                        <label className="admin-form-label">Categoria</label>
                        <Select
                          options={categorySelectOptions}
                          value={categorySelectOptions.find(o => o.value === s.form.category)}
                          onChange={s.handleCategoryChange}
                          placeholder="Selecionar categoria..."
                          isSearchable={false}
                          styles={{
                            control: (base) => ({ ...base, borderColor: 'var(--border)', borderRadius: 8, minHeight: 40, fontFamily: 'inherit', fontSize: 13 }),
                            menu: (base) => ({ ...base, borderRadius: 8, fontSize: 13 }),
                            option: (base, { isFocused, isSelected }) => ({ ...base, backgroundColor: isSelected ? 'var(--red)' : isFocused ? 'var(--light)' : 'transparent', color: isSelected ? '#fff' : 'var(--dark)' }),
                          }}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label className="admin-form-label">Autor</label>
                        <input className="admin-form-input" name="author" value={s.form.author} onChange={s.handleChange} />
                      </div>
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Tags</label>
                      <div className="an-tag-list">
                        {TAG_OPTIONS.map(t => (
                          <label key={t} className={`an-tag-chip ${s.form.tags.includes(t) ? 'active' : ''}`}>
                            <input type="checkbox" checked={s.form.tags.includes(t)} onChange={() => s.handleTagToggle(t)} hidden />
                            {t}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Resumo</label>
                      <ReactQuill theme="snow" value={s.form.summary} onChange={s.handleSummaryChange} modules={{ toolbar: [['bold', 'italic', 'underline'], [{ list: 'ordered' }, { list: 'bullet' }], ['link', 'clean']] }} className="an-editor" />
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Conteúdo</label>
                      <ReactQuill theme="snow" value={s.form.content} onChange={s.handleContentChange} modules={{ toolbar: [['bold', 'italic', 'underline', 'strike'], [{ list: 'ordered' }, { list: 'bullet' }], ['blockquote', 'code-block'], [{ header: [1, 2, 3, false] }], ['link', 'image', 'video'], ['clean']] }} className="an-editor" />
                    </div>
                    <div className="an-checkbox-row">
                      <label className="an-checkbox">
                        <input type="checkbox" name="published" checked={s.form.published} onChange={s.handleChange} />
                        <span>Publicado</span>
                      </label>
                      <label className="an-checkbox">
                        <input type="checkbox" name="featured" checked={s.form.featured} onChange={s.handleChange} />
                        <span>Destacado</span>
                      </label>
                    </div>
                  </div>
                )}

                {s.formTab === 'imagens' && (
                  <div className="an-form-section">
                    <div className="admin-form-group">
                      <label className="admin-form-label">Imagem de Destaque</label>
                      {s.form.featuredImage?.url ? (
                        <div className="an-image-preview">
                          <img src={s.form.featuredImage.url} alt="destaque" />
                          <button type="button" className="an-image-remove" onClick={() => s.setForm(f => ({ ...f, featuredImage: null }))}>
                            <Icon name="close" size={14} />
                          </button>
                        </div>
                      ) : (
                        <label className="an-upload-area">
                          <input type="file" accept="image/*" hidden onChange={e => e.target.files[0] && s.handleUploadImage(e.target.files[0])} />
                          <Icon name="image" size={24} />
                          <span>Clique para fazer upload da imagem de destaque</span>
                        </label>
                      )}
                      {s.uploadProgress?.type === 'image' && (
                        <div className="an-progress"><div className="an-progress-bar" style={{ width: `${s.uploadProgress.progress}%` }} /></div>
                      )}
                    </div>

                    <div className="admin-form-group">
                      <label className="admin-form-label">Galeria de Imagens</label>
                      <div className="an-gallery">
                        {s.form.imageGallery.map((img, i) => (
                          <div key={i} className="an-gallery-item">
                            <img src={img.url} alt={img.alt || ''} />
                            <button type="button" className="an-image-remove" onClick={() => s.handleRemoveGalleryImage(i)}>
                              <Icon name="close" size={14} />
                            </button>
                            <input className="admin-form-input" placeholder="Legenda" value={img.caption} onChange={e => {
                              const g = [...s.form.imageGallery];
                              g[i] = { ...g[i], caption: e.target.value };
                              s.setForm(f => ({ ...f, imageGallery: g }));
                            }} style={{ marginTop: 4, fontSize: 12 }} />
                          </div>
                        ))}
                        <label className="an-gallery-add">
                          <input type="file" accept="image/*" hidden onChange={e => e.target.files[0] && s.handleUploadGalleryImage(e.target.files[0])} />
                          <Icon name="plus" size={20} />
                        </label>
                      </div>
                      {s.uploadProgress?.type === 'gallery' && (
                        <div className="an-progress"><div className="an-progress-bar" style={{ width: `${s.uploadProgress.progress}%` }} /></div>
                      )}
                    </div>
                  </div>
                )}

                {s.formTab === 'video' && (
                  <div className="an-form-section">
                    <div className="admin-form-group">
                      <label className="admin-form-label">URL do Vídeo (YouTube / Vimeo)</label>
                      <input className="admin-form-input" placeholder="https://youtube.com/..." value={s.form.video?.url || ''} onChange={e => s.handleVideoUrl(e.target.value)} />
                    </div>
                    <div className="an-divider"><span>ou</span></div>
                    <div className="admin-form-group">
                      <label className="admin-form-label">Upload de Vídeo</label>
                      {s.form.video?.url && s.form.video?.type === 'UPLOAD' ? (
                        <div className="an-video-preview">
                          <video src={s.form.video.url} controls />
                          <button type="button" className="an-image-remove" onClick={() => s.setForm(f => ({ ...f, video: null }))}>
                            <Icon name="close" size={14} />
                          </button>
                        </div>
                      ) : (
                        <label className="an-upload-area">
                          <input type="file" accept="video/*" hidden onChange={e => e.target.files[0] && s.handleUploadVideo(e.target.files[0])} />
                          <Icon name="video" size={24} />
                          <span>Clique para fazer upload do vídeo</span>
                        </label>
                      )}
                      {s.uploadProgress?.type === 'video' && (
                        <div className="an-progress"><div className="an-progress-bar" style={{ width: `${s.uploadProgress.progress}%` }} /></div>
                      )}
                    </div>
                  </div>
                )}

                <div className="an-form-actions">
                  <button type="button" className="admin-btn admin-btn-outline" onClick={s.cancelEdit}>Cancelar</button>
                  <button type="submit" className="admin-btn admin-btn-primary" disabled={s.saving}>
                    {s.saving ? 'A salvar...' : s.editingId ? 'Actualizar' : 'Publicar'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
