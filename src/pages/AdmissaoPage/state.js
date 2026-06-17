import { useState } from "react";

export function useAdmissaoPageState() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "",
    bi: "",
    email: "",
    telefone: "",
    morada: "",
    password: "",
    confirmPassword: "",
    grau: "",
    area: "",
    universidade: "",
    anoConclusao: "",
    delegacao: "",
    experiencia: "",
    comoConheceu: "",
    metodoPagamento: "transferencia",
    comprovativo: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setForm({
      nome: "",
      bi: "",
      email: "",
      telefone: "",
      morada: "",
      password: "",
      confirmPassword: "",
      grau: "",
      area: "",
      universidade: "",
      anoConclusao: "",
      delegacao: "",
      experiencia: "",
      comoConheceu: "",
      metodoPagamento: "transferencia",
      comprovativo: null,
    });
  };

  return { step, setStep, form, setForm, submitted, handleChange, nextStep, prevStep, handleSubmit, resetForm };
}
