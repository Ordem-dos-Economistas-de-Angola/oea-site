import { useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import '../components/Admissao.css';
import './LoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Icon from '../components/Icon';
import { DELEGACOES } from '../data/content';

const AREAS = [
  'Economia', 'Gestão', 'Finanças', 'Planeamento',
  'Contabilidade', 'Administração Pública', 'Relações Internacionais',
  'Estatística', 'Matemática Aplicada', 'Outra área afim',
];

const GRAUS = ['Licenciatura', 'Mestrado', 'Doutoramento', 'Pós-Doutoramento'];

const DOCS = [
  'Certidão de Habilitações Literárias (original ou cópia autenticada)',
  'Bilhete de Identidade ou Passaporte válido',
  '2 Fotografias tipo passe actuais',
  'Curriculum Vitae detalhado',
  'Comprovativo de Pagamento da Jóia de Inscrição',
  'Declaração de idoneidade profissional (para estrangeiros)',
];

const STEPS = [
  { num: 1, icon: 'user', label: 'Dados Pessoais', short: 'Pessoais' },
  { num: 2, icon: 'lock', label: 'Dados de Acesso', short: 'Acesso' },
  { num: 3, icon: 'graduation', label: 'Habilitações', short: 'Habilitações' },
  { num: 4, icon: 'city', label: 'Delegação', short: 'Delegação' },
  { num: 5, icon: 'wallet', label: 'Pagamento', short: 'Pagamento' },
];

const TOTAL_STEPS = STEPS.length;

function FormField({ name, label, type = 'text', placeholder = '', required = true, value, options, onChange }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>{label}{required && ' *'}</label>
      {type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} className="form-input" required={required}>
          <option value="">{placeholder || 'Seleccione...'}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className="form-input" required={required} />
      )}
    </div>
  );
}

export default function AdmissaoPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: '', bi: '', email: '', telefone: '', morada: '',
    password: '', confirmPassword: '',
    grau: '', area: '', universidade: '', anoConclusao: '',
    delegacao: '', experiencia: '', comoConheceu: '',
    metodoPagamento: 'transferencia',
    comprovativo: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < TOTAL_STEPS) { setStep(step + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  const prevStep = () => {
    if (step > 1) { setStep(step - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
        <Topbar />
        <Navbar onSearchOpen={() => {}} />
        <section className="section">
          <div className="section-inner">
            <div className="section-header center" style={{ marginBottom: 48 }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>Candidatura Recebida</div>
              <div className="gold-sep" style={{ margin: '16px auto' }} />
              <h2 className="section-title">Obrigado, {form.nome.split(' ')[0]}!</h2>
              <p className="section-desc">
                A sua candidatura foi submetida com sucesso. A Comissão de Admissões irá analisar o seu processo e entrará em contacto através do email <strong>{form.email}</strong> nos próximos dias úteis.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 24, color: 'var(--red)' }}>
                <Icon name="check" size={64} />
              </div>
              <p style={{ fontSize: 15, color: 'var(--mid)', maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7 }}>
                Enquanto aguarda, pode ir reunindo a documentação necessária. Qualquer dúvida, contacte a Secretaria da OEA.
              </p>
              <Link to="/" className="btn btn-outline" style={{ marginRight: 12 }}>Voltar ao Início</Link>
              <button className="btn btn-primary" onClick={() => { setSubmitted(false); setStep(1); setForm({ nome: '', bi: '', email: '', telefone: '', morada: '', password: '', confirmPassword: '', grau: '', area: '', universidade: '', anoConclusao: '', delegacao: '', experiencia: '', comoConheceu: '', metodoPagamento: 'transferencia', comprovativo: null }); }}>
                Submeter Nova Candidatura
              </button>
            </div>
          </div>
        </section>
        <Footer />
        <ScrollTop />
      </>
    );
  }

  const pct = Math.round((step / TOTAL_STEPS) * 100);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="step-header">
              <div className="step-header-icon"><Icon name="user" size={18} /></div>
              <div className="step-header-text">
                <h4>Dados Pessoais</h4>
                <p>Informação de identificação do candidato</p>
              </div>
            </div>
            <div className="form-row">
              <FormField name="nome" label="Nome Completo" placeholder="Digite o seu nome completo" value={form.nome} onChange={handleChange} />
            </div>
            <div className="form-row form-row-2">
              <FormField name="bi" label="BI / Passaporte" placeholder="Nº do documento" value={form.bi} onChange={handleChange} />
              <FormField name="telefone" label="Telefone" type="tel" placeholder="(+244) 900 000 000" value={form.telefone} onChange={handleChange} />
            </div>
            <div className="form-row form-row-2">
              <FormField name="email" label="Email" type="email" placeholder="exemplo@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-row">
              <FormField name="morada" label="Morada" placeholder="Rua, bairro, município, província" value={form.morada} onChange={handleChange} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="step-header">
              <div className="step-header-icon"><Icon name="lock" size={18} /></div>
              <div className="step-header-text">
                <h4>Dados de Acesso</h4>
                <p>Crie as suas credenciais para a Área de Membros</p>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 16, lineHeight: 1.6 }}>
              Após a aprovação da sua candidatura, estas credenciais permitir-lhe-ão aceder à Área de Membros da OEA.
            </p>
            <div className="form-row form-row-2">
              <FormField name="password" label="Senha" type="password" placeholder="Mínimo 8 caracteres" value={form.password} onChange={handleChange} />
              <FormField name="confirmPassword" label="Confirmar Senha" type="password" placeholder="Repita a senha" value={form.confirmPassword} onChange={handleChange} />
            </div>
            <div className="login-social" style={{ marginTop: 8 }}>
              <p style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 10, textAlign: 'center' }}>Ou registe-se com as suas redes sociais</p>
              <button className="btn login-social-btn" type="button" onClick={() => {}}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="step-header">
              <div className="step-header-icon"><Icon name="graduation" size={18} /></div>
              <div className="step-header-text">
                <h4>Habilitações Académicas</h4>
                <p>Formação académica na área económica</p>
              </div>
            </div>
            <div className="form-row form-row-2">
              <FormField name="grau" label="Grau Académico" type="select" placeholder="Seleccione..." value={form.grau} options={GRAUS} onChange={handleChange} />
              <FormField name="area" label="Área de Formação" type="select" placeholder="Seleccione..." value={form.area} options={AREAS} onChange={handleChange} />
            </div>
            <div className="form-row form-row-2">
              <FormField name="universidade" label="Universidade / Instituição" placeholder="Nome da instituição" value={form.universidade} onChange={handleChange} />
              <FormField name="anoConclusao" label="Ano de Conclusão" type="number" placeholder="2020" value={form.anoConclusao} onChange={handleChange} />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="step-header">
              <div className="step-header-icon"><Icon name="city" size={18} /></div>
              <div className="step-header-text">
                <h4>Delegação Regional</h4>
                <p>Informação complementar e vínculo regional</p>
              </div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 16, lineHeight: 1.6 }}>
              Escolha a delegação da OEA à qual pretende ficar vinculado, de acordo com a sua área de residência ou exercício profissional.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="delegacao">Delegação *</label>
                <select id="delegacao" name="delegacao" value={form.delegacao} onChange={handleChange} className="form-input" required>
                  <option value="">Seleccione a sua região...</option>
                  {DELEGACOES.map((d) => (
                    <option key={d.title} value={d.title}>{d.title}</option>
                  ))}
                </select>
                {form.delegacao && <p style={{ fontSize: 12, color: 'var(--mid)', marginTop: 6 }}>
                  {DELEGACOES.find((d) => d.title === form.delegacao)?.provinces}
                </p>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="experiencia">Experiência Profissional (opcional)</label>
                <textarea id="experiencia" name="experiencia" value={form.experiencia} onChange={handleChange} className="form-input form-textarea" placeholder="Descreva brevemente a sua experiência profissional na área económica ou financeira..." rows={3} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="comoConheceu">Como conheceu a OEA? (opcional)</label>
                <select id="comoConheceu" name="comoConheceu" value={form.comoConheceu} onChange={handleChange} className="form-input">
                  <option value="">Seleccione...</option>
                  <option value="Site">Site institucional</option>
                  <option value="Redes Sociais">Redes sociais</option>
                  <option value="Indicação">Indicação de outro membro</option>
                  <option value="Universidade">Universidade / Instituição de ensino</option>
                  <option value="Evento">Evento ou conferência</option>
                  <option value="Media">Comunicação social</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="step-header">
              <div className="step-header-icon"><Icon name="wallet" size={18} /></div>
              <div className="step-header-text">
                <h4>Pagamento</h4>
                <p>Jóia de inscrição e primeira quota</p>
              </div>
            </div>

            <div className="payment-total">
              <div className="total-label">Total a Pagar (1.º Ano)</div>
              <div className="total-amount">Kz 55.000</div>
              <div className="total-desc">Jóia Kz 25.000 + 12 × Quota Kz 2.500</div>
            </div>

            <div className="payment-summary">
              <div className="fee-box">
                <div className="fee-label">Jóia de Inscrição</div>
                <div className="fee-amount">Kz 25.000</div>
                <div className="fee-period">pagamento único</div>
              </div>
              <div className="fee-box">
                <div className="fee-label">Quota Mensal</div>
                <div className="fee-amount">Kz 2.500</div>
                <div className="fee-period">por mês (12 meses)</div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: 'var(--mid)', marginBottom: 16, lineHeight: 1.6 }}>
              Selecione o método de pagamento para a jóia de inscrição e primeira quota.
            </p>

            <div className="payment-methods">
              <label className={`payment-method ${form.metodoPagamento === 'transferencia' ? 'selected' : ''}`}>
                <input type="radio" name="metodoPagamento" value="transferencia" checked={form.metodoPagamento === 'transferencia'} onChange={handleChange} />
                <div>
                  <div className="payment-method-label">Transferência Bancária</div>
                  <div className="payment-method-desc">Transferência para a conta da OEA no BAI</div>
                </div>
              </label>
              <label className={`payment-method ${form.metodoPagamento === 'multicaixa' ? 'selected' : ''}`}>
                <input type="radio" name="metodoPagamento" value="multicaixa" checked={form.metodoPagamento === 'multicaixa'} onChange={handleChange} />
                <div>
                  <div className="payment-method-label">Multicaixa / ATM</div>
                  <div className="payment-method-desc">Pagamento presencial nos terminais Multicaixa</div>
                </div>
              </label>
              <label className={`payment-method ${form.metodoPagamento === 'presencial' ? 'selected' : ''}`}>
                <input type="radio" name="metodoPagamento" value="presencial" checked={form.metodoPagamento === 'presencial'} onChange={handleChange} />
                <div>
                  <div className="payment-method-label">Pagamento Presencial</div>
                  <div className="payment-method-desc">Dirija-se à sede ou delegação da OEA</div>
                </div>
              </label>
            </div>

            {form.metodoPagamento === 'transferencia' && (
              <div>
                <p style={{ fontSize: 12, color: 'var(--mid)', marginBottom: 8 }}>Dados bancários para transferência:</p>
                <div className="iban-box">
                  Banco: BAI &nbsp;|&nbsp; IBAN: AO06 0040 0000 1234 5678 9010 0<br />
                  NIB: 0040 0000 1234 5678 9010 0 &nbsp;|&nbsp; Titular: OEA — Ordem dos Economistas de Angola
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="comprovativo">Comprovativo de Transferência (opcional)</label>
                    <input id="comprovativo" name="comprovativo" type="file" accept="image/*,application/pdf" onChange={(e) => setForm({ ...form, comprovativo: e.target.files[0] })} className="form-input" style={{ padding: 10 }} />
                    <p style={{ fontSize: 11, color: 'var(--mid)', marginTop: 4 }}>Formatos aceites: JPG, PNG, PDF. Máx. 5 MB.</p>
                  </div>
                </div>
              </div>
            )}

            {form.metodoPagamento === 'multicaixa' && (
              <div style={{ padding: 14, background: 'var(--light)', borderRadius: 10, fontSize: 13, color: 'var(--mid)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--dark)' }}>Como pagar no Multicaixa:</strong><br />
                1. Dirija-se a qualquer terminal Multicaixa<br />
                2. Selecione "Pagamentos" → "Outras Entidades"<br />
                3. Digite o código da OEA: <strong style={{ color: 'var(--red)' }}>12345</strong><br />
                4. Insira o valor total (<strong>Kz 55.000</strong>)<br />
                5. Guarde o comprovativo para entregar na secretaria
              </div>
            )}

            {form.metodoPagamento === 'presencial' && (
              <div style={{ padding: 14, background: 'var(--light)', borderRadius: 10, fontSize: 13, color: 'var(--mid)', lineHeight: 1.7 }}>
                <strong style={{ color: 'var(--dark)' }}>Pagamento Presencial:</strong><br />
                Dirija-se à Secretaria da OEA na sede em Luanda ou a qualquer delegação regional, em horário útil (Seg–Sex, 09h00–17h00), e efectue o pagamento em numerário ou multicaixa.
              </div>
            )}

            <div style={{ marginTop: 20, padding: 14, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 10 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 6 }}>Importante</p>
              <p style={{ fontSize: 12, color: 'var(--mid)', lineHeight: 1.6 }}>
                O pagamento da jóia de inscrição é obrigatório para a validação da candidatura. Após a aprovação, receberá um email com os detalhes para pagamento das quotas subsequentes.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{ marginBottom: 16 }}>
            <Link to="/" style={{ fontSize: 13, color: 'var(--mid)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              ← Voltar ao site
            </Link>
          </div>
          <div className="section-header center" style={{ marginBottom: 48 }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Inscrição — Etapa {step} de {TOTAL_STEPS}</div>
            <div className="gold-sep" style={{ margin: '16px auto' }} />
            <h2 className="section-title">Formulário de Inscrição</h2>
            <p className="section-desc">Preencha todos os campos obrigatórios para iniciar o seu processo de admissão como membro da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="progress-wrapper">
            <div className="progress-header">
              <span className="progress-title">{STEPS[step - 1].label}</span>
              <span className="progress-pct">{pct}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-steps">
              {STEPS.map((s) => (
                <div key={s.num} className={`progress-step ${s.num === step ? 'active' : ''} ${s.num < step ? 'done' : ''}`}>
                  <span className="step-dot" />
                  <span>{s.short}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="admissao-grid">
            <form className="admissao-form" onSubmit={handleSubmit}>
              {renderStep()}

              <div className="step-nav">
                <div>
                  {step > 1 && (
                    <button type="button" className="btn btn-outline" onClick={prevStep} style={{ fontSize: 14, padding: '12px 28px' }}>
                      ← Anterior
                    </button>
                  )}
                </div>
                {step < TOTAL_STEPS ? (
                  <button type="button" className="btn btn-primary" onClick={nextStep} style={{ fontSize: 14, padding: '12px 28px' }}>
                    Próximo →
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>
                    Submeter Candidatura →
                  </button>
                )}
              </div>

              <p style={{ fontSize: 12, color: 'var(--mid)', marginTop: 16, textAlign: 'center' }}>
                Ao submeter, declara que as informações fornecidas são verdadeiras. Os dados serão tratados de acordo com a Política de Privacidade da OEA.
              </p>
            </form>

            <div>
              <div className="info-card">
                <div className="info-card-title"><Icon name="clipboard" size={20} /> Documentos Necessários</div>
                <ul className="info-list">
                  {DOCS.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
              <div className="info-card">
                <div className="info-card-title"><Icon name="wallet" size={20} /> Taxas e Quotas</div>
                <div className="fee-grid">
                  <div className="fee-box">
                    <div className="fee-label">Jóia de Inscrição</div>
                    <div className="fee-amount">Kz 25.000</div>
                    <div className="fee-period">pagamento único</div>
                  </div>
                  <div className="fee-box">
                    <div className="fee-label">Quota Mensal</div>
                    <div className="fee-amount">Kz 2.500</div>
                    <div className="fee-period">por mês</div>
                  </div>
                </div>
              </div>
              <div className="info-card" style={{ background: 'rgba(192,24,26,0.05)', border: '1px solid rgba(192,24,26,0.15)' }}>
                <div className="info-card-title" style={{ color: 'var(--red)' }}><Icon name="phone" size={20} /> Contacte-nos</div>
                <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.65 }}>Para mais informações sobre o processo de admissão, contacte a Secretaria da OEA.</p>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ fontSize: 14, color: 'var(--dark)' }}><Icon name="phone" size={14} /> (+244) 922 274 854</div>
                  <div style={{ fontSize: 14, color: 'var(--dark)' }}><Icon name="email" size={14} /> secretaria.geral@ordemeconomistas.ao</div>
                  <div style={{ fontSize: 14, color: 'var(--mid)' }}><Icon name="clock" size={14} /> Seg–Sex: 09h00–17h00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollTop />
    </>
  );
}
