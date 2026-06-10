import { Link } from 'react-router-dom';
import Icon from './Icon';
import { DELEGACOES } from '../data/content';
import './Admissao.css';

const STEPS = [
  { n: 1, title: 'Verifique os Requisitos', desc: 'Licenciatura, mestrado ou doutoramento em Economia, Gestão, Finanças, Planeamento ou áreas afins, obtido em Angola ou no estrangeiro.' },
  { n: 2, title: 'Reúna a Documentação', desc: 'Certidão de habilitações, bilhete de identidade/passaporte, fotografia actualizada, curriculum vitae e comprovativo de pagamento da jóia.' },
  { n: 3, title: 'Submeta a Candidatura', desc: 'Preencha o formulário online ou entregue o processo completo na sede da OEA.' },
  { n: 4, title: 'Aguarde Aprovação', desc: 'A Comissão de Admissões analisa o processo e, após aprovação, emite a cédula profissional e número de membro.' },
  { n: 5, title: 'Bem-vindo à OEA!', desc: 'Aceda a todos os benefícios: formação, eventos, mentoria, representação e a rede de economistas angolanos.' },
];

const DOCS = [
  'Certidão de Habilitações Literárias (original ou cópia autenticada)',
  'Bilhete de Identidade ou Passaporte válido',
  '2 Fotografias tipo passe actuais',
  'Curriculum Vitae detalhado',
  'Comprovativo de Pagamento da Jóia de Inscrição',
  'Declaração de idoneidade profissional (para estrangeiros)',
];

export default function Admissao() {
  return (
    <section className="section" id="admissao">
      <div className="section-inner">
        <div className="section-header center" style={{ marginBottom: 48 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Como Aderir</div>
          <div className="gold-sep" style={{ margin: '16px auto' }} />
          <h2 className="section-title">Torne-se Membro da OEA</h2>
          <p className="section-desc">Junte-se à família dos economistas angolanos e beneficie de todos os serviços, representação e reconhecimento da Ordem.</p>
        </div>

        <div className="admissao-steps-row reveal">
          {STEPS.map((s) => (
            <div className="step-mini" key={s.n}>
              <div className="step-mini-num">{s.n}</div>
              <div className="step-mini-title">{s.title}</div>
            </div>
          ))}
        </div>

        <div className="admissao-grid">
          <div className="reveal-left">
            <div className="admissao-cta-card">
              <div className="admissao-cta-icon"><Icon name="edit" size={40} /></div>
              <h3 className="admissao-cta-title">Pronto para se candidatar?</h3>
              <p className="admissao-cta-desc">
                Preencha o formulário de inscrição online. O processo é simples e rápido.
                Após a submissão, a Comissão de Admissões analisará a sua candidatura.
              </p>
              <Link to="/admissao" className="btn btn-primary" style={{ fontSize: 15, padding: '14px 36px' }}>
                Formulário de Inscrição →
              </Link>
              <p className="admissao-cta-note">
                Alternativamente, entregue o processo completo na sede da OEA em Luanda.
              </p>
            </div>
            <div className="admissao-steps-full">
              {STEPS.map((s) => (
                <div className="step" key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div className="step-content">
                    <div className="step-title">{s.title}</div>
                    <div className="step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admissao-info reveal-right">
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
            <div className="info-card" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="info-card-title" style={{ color: 'var(--gold)' }}><Icon name="building" size={20} /> Delegações Regionais</div>
              <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.65, marginBottom: 12 }}>
                A OEA está presente em 4 regiões do país, com planos de expansão para 5 Conselhos Regionais até 2030.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {DELEGACOES.map((d) => (
                  <div key={d.title} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}><Icon name={d.icon} size={16} /></span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)' }}>{d.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--mid)' }}>{d.provinces}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/#delegacoes" style={{ display: 'inline-block', marginTop: 12, fontSize: 13, color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
                Saber mais →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
