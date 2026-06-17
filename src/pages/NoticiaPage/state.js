import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { NOTICIAS } from '../../data/content';

const MOCK_COMMENTS = [
  { id: 1, author: 'Maria Santos', avatar: 'MS', role: 'Economista Sénior', date: '3 Jun 2026 às 14:23', text: 'Excelente notícia! A eleição do novo Bastonário representa um marco importante para a classe económica angolana. Esperamos que o novo mandato traga as reformas necessárias para a valorização do economista em Angola.', replies: [] },
  { id: 2, author: 'João Mendes', avatar: 'JM', role: 'Membro Efectivo', date: '3 Jun 2026 às 16:45', text: 'Parabéns ao novo Bastonário e à sua equipa. O plano estratégico apresentado é ambicioso mas necessário. A digitalização dos serviços e a descentralização são passos fundamentais para aproximar a OEA dos seus membros em todo o país.', replies: [] },
  { id: 3, author: 'Ana Ferreira', avatar: 'AF', role: 'Membro Efectivo', date: '4 Jun 2026 às 09:12', text: 'Muito bom ver a OEA a modernizar-se. Aguardo ansiosamente pela implementação do portal digital e dos serviços online. Espero que o Centro de Estudos e Formação traga programas de capacitação relevantes para o mercado actual.', replies: [] },
];

const STORAGE_KEY = (id) => `oea_comments_${id}`;

function formatDate() {
  return new Date().toLocaleDateString('pt-PT', { day:'numeric', month:'short', year:'numeric' }) + ' às ' + new Date().toLocaleTimeString('pt-PT', { hour:'2-digit', minute:'2-digit' });
}

function loadComments(id) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY(id));
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  return MOCK_COMMENTS;
}

export function useNoticiaPageState() {
  const { id } = useParams();
  const location = useLocation();
  const commentsRef = useRef(null);
  const noticia = NOTICIAS.find((n) => n.id === Number(id));
  const related = NOTICIAS.filter((n) => n.id !== Number(id)).slice(0, 3);
  const [showComments, setShowComments] = useState(location.state?.openComments === true);
  const [comments, setComments] = useState(() => loadComments(Number(id)));
  const [newComment, setNewComment] = useState('');
  const [replyText, setReplyText] = useState('');
  const [repliesOpen, setRepliesOpen] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const COMMENTS_PER_PAGE = 10;
  const visibleComments = showAllComments ? comments : comments.slice(0, COMMENTS_PER_PAGE);
  useReveal();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY(Number(id)), JSON.stringify(comments));
  }, [comments, id]);

  useEffect(() => {
    if (showComments && commentsRef.current) {
      setTimeout(() => commentsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [showComments]);

  const addComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, {
      id: Date.now(), author: 'Visitante', avatar: 'V', role: '',
      date: formatDate(), text: newComment, replies: []
    }]);
    setNewComment('');
  };

  const addReply = (parentId) => {
    if (!replyText.trim()) return;
    setComments(comments.map((c) => {
      if (c.id !== parentId) return c;
      return { ...c, replies: [...c.replies, { id: Date.now(), author: 'Visitante', avatar: 'V', date: formatDate(), text: replyText }] };
    }));
    setReplyText('');
    setRepliesOpen(null);
  };

  return {
    id, noticia, related, showComments, setShowComments, comments, newComment, setNewComment,
    replyText, setReplyText, repliesOpen, setRepliesOpen, showAllComments, setShowAllComments,
    visibleComments, COMMENTS_PER_PAGE, commentsRef, addComment, addReply
  };
}
