import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import { EVENTOS } from '../../data/content';

export function useEventoPageState() {
  const { id } = useParams();
  const evento = EVENTOS.find(e => e.id === Number(id));
  const relacionados = EVENTOS.filter(e => e.id !== Number(id)).slice(0, 3);
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);
  useReveal();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return { id, evento, relacionados, form, submitted, handleChange, handleSubmit, resetForm };
}
