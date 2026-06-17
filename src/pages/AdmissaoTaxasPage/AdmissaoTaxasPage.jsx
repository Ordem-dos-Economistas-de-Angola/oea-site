import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useAdmissaoTaxasPageState } from './state';
import '../AdmissaoPages.css';

const custoPorAno = [
  { label: 'Jóia Inscrição', value: 25000, color: 'var(--red)' },
  { label: 'Quota Anual', value: 30000, color: 'var(--gold)' },
  { label: 'Cédula Profissional', value: 5000, color: 'var(--red-dark)' },
  { label: 'Certidões', value: 3500, color: '#6B3C00' },
];

const comparacaoMensal = [
  { label: 'Jóia de Inscrição', value: 'Kz 25.000', period: 'pagamento único', tag: 'uma vez', tagColor: 'var(--red)' },
  { label: 'Quota Mensal', value: 'Kz 2.500', period: 'por mês', tag: 'mensal', tagColor: 'var(--gold)' },
];

const receitas = [
  { label: 'Quotas de Membros', value: 58, color: 'var(--red)' },
  { label: 'Jóias de Inscrição', value: 18, color: 'var(--gold)' },
  { label: 'Eventos e Formação', value: 12, color: 'var(--red-dark)' },
  { label: 'Protocolos e Parcerias', value: 8, color: '#6B3C00' },
  { label: 'Outras Receitas', value: 4, color: 'var(--mid)' },
];

function BarChart({ data }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className="chart-bar-group">
      {data.map((d) => (
        <div key={d.label} className="chart-bar-row reveal">
          <span className="chart-bar-label">{d.label}</span>
          <div className="chart-bar-track">
            <div className="chart-bar-fill" style={{ width: `${(d.value / max) * 100}%`, background: d.color }}>
              {d.value >= max * 0.6 ? `Kz ${d.value.toLocaleString('pt-PT')}` : ''}
            </div>
          </div>
          <span className="chart-bar-value" style={{ color: d.color }}>Kz {d.value.toLocaleString('pt-PT')}</span>
        </div>
      ))}
    </div>
  );
}

function PieChart({ data, size = 100 }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  const cx = size / 2, cy = size / 2, r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="chart-pie-svg">
      {data.map((d, i) => {
        const pct = d.value / total;
        const len = circ * pct;
        const dash = `${len} ${circ - len}`;
        const s = { strokeDasharray: dash, strokeDashoffset: -offset, stroke: d.color, fill: 'none', strokeWidth: r * 2 - 4, cx, cy, r: r - 1 };
        offset += len;
        return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="none" stroke={d.color} strokeWidth={s.strokeWidth} strokeDasharray={s.strokeDasharray} strokeDashoffset={s.strokeDashoffset} transform={`rotate(-90 ${cx} ${cy})`} style={{ transition: 'all 0.5s' }} />;
      })}
      <circle cx={cx} cy={cy} r={r - 2} fill="var(--white)" />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={size * 0.12} fontWeight={700} fill="var(--dark)">{total}%</text>
    </svg>
  );
}

export default function AdmissaoTaxasPage() {
  useAdmissaoTaxasPageState();

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
          <div className="section-header">
            <div className="section-tag">Admissões</div>
            <div className="gold-sep" />
            <h2 className="section-title">Taxas e Quotas</h2>
            <p className="section-desc">Conheça os valores das taxas de inscrição e quotas da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="admissao-sub-nav">
            <Link to="/admissao-como-inscrever"><Icon name="edit" size={16} /> Como Inscrever-se</Link>
            <Link to="/admissao-requisitos"><Icon name="clipboard" size={16} /> Requisitos</Link>
            <Link to="/admissao-estrangeiros"><Icon name="globe" size={16} /> Inscrição Estrangeiros</Link>
            <Link to="/admissao-taxas" className="active"><Icon name="wallet" size={16} /> Taxas e Quotas</Link>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Tabela de Taxas e Quotas</h3>
                <p>A inscrição na Ordem dos Economistas de Angola está sujeita ao pagamento de uma jóia de inscrição e de quotas periódicas, nos valores actualmente em vigor.</p>
              </div>

              <div className="reveal" style={{ marginTop: 24 }}>
                <div className="comparison-grid">
                  {comparacaoMensal.map((c) => (
                    <div key={c.label} className="comparison-card">
                      <h4>{c.label}</h4>
                      <div className="price">{c.value}</div>
                      <div className="period">{c.period}</div>
                      <div className="tag" style={{ background: c.tagColor, color: 'white' }}>{c.tag}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <div className="chart-card">
                  <h4><Icon name="chart" size={18} /> Custos de Inscrição (Primeiro Ano)</h4>
                  <BarChart data={custoPorAno} />
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 8 }}>
                <div className="chart-card">
                  <h4><Icon name="chart" size={18} /> Distribuição das Receitas da OEA</h4>
                  <div className="chart-pie-grid">
                    {receitas.map((r) => (
                      <div key={r.label} className="chart-pie-item">
                        <PieChart data={[r, { label: 'Outros', value: 100 - r.value, color: 'var(--light)' }]} size={100} />
                        <div className="chart-pie-label">{r.label}</div>
                        <div className="chart-pie-value" style={{ color: r.color }}>{r.value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 8 }}>
                <div className="chart-card">
                  <h4><Icon name="chart" size={18} /> Custo Anual Total para o Membro</h4>
                  <div className="chart-bar-group">
                    <div className="chart-bar-row">
                      <span className="chart-bar-label">Jóia (1º ano)</span>
                      <div className="chart-bar-track">
                        <div className="chart-bar-fill" style={{ width: '45%', background: 'var(--red)' }}>Kz 25.000</div>
                      </div>
                      <span className="chart-bar-value" style={{ color: 'var(--red)' }}>Kz 25.000</span>
                    </div>
                    <div className="chart-bar-row">
                      <span className="chart-bar-label">Quotas (12 meses)</span>
                      <div className="chart-bar-track">
                        <div className="chart-bar-fill" style={{ width: '55%', background: 'var(--gold)' }}>Kz 30.000</div>
                      </div>
                      <span className="chart-bar-value" style={{ color: 'var(--gold)' }}>Kz 30.000</span>
                    </div>
                    <div className="chart-bar-row" style={{ marginTop: 8, paddingTop: 12, borderTop: '2px solid var(--border)' }}>
                      <span className="chart-bar-label" style={{ fontWeight: 700, color: 'var(--black)' }}>Total 1º Ano</span>
                      <div className="chart-bar-track">
                        <div className="chart-bar-fill" style={{ width: '100%', background: 'linear-gradient(90deg, var(--red), var(--gold))' }}>Kz 55.000</div>
                      </div>
                      <span className="chart-bar-value" style={{ fontWeight: 700, color: 'var(--black)' }}>Kz 55.000</span>
                    </div>
                    <div className="chart-bar-row">
                      <span className="chart-bar-label" style={{ fontWeight: 600, color: 'var(--gray)' }}>Anos Seguintes</span>
                      <div className="chart-bar-track">
                        <div className="chart-bar-fill" style={{ width: '55%', background: 'var(--gold)' }}>Kz 30.000</div>
                      </div>
                      <span className="chart-bar-value" style={{ color: 'var(--gold)' }}>Kz 30.000/ano</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 8, padding: 20, background: 'var(--light)', borderRadius: 12 }}>
                <h4 style={{ marginTop: 0 }}>Formas de Pagamento</h4>
                <p style={{ fontSize: 14, color: 'var(--gray)' }}>
                  Os pagamentos podem ser efectuados por transferência bancária, depósito ou presencialmente na sede da OEA.
                </p>
                <div style={{ marginTop: 12, padding: '12px 16px', background: 'var(--white)', borderRadius: 8, border: '1px solid var(--border)', fontSize: 14, fontFamily: 'monospace' }}>
                  <strong>IBAN:</strong> AO06.0044.0000.2563.8184.1018.5
                </div>
                <p style={{ fontSize: 13, color: 'var(--mid)', marginTop: 12 }}>
                  ORDEM DOS ECONOMISTAS DE ANGOLA – O.E.A
                </p>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="clipboard" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/admissao-como-inscrever">Como Inscrever-se</Link></li>
                  <li><Link to="/admissao-requisitos">Requisitos</Link></li>
                  <li><Link to="/admissao-estrangeiros">Inscrição de Estrangeiros</Link></li>
                  <li><Link to="/admissao-taxas" className="active">Taxas e Quotas</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <h4 style={{ color: 'var(--gold)' }}><Icon name="wallet" size={18} /> Resumo</h4>
                <div style={{ fontSize: 13, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--mid)' }}>Jóia</span>
                    <span style={{ fontWeight: 600, color: 'var(--dark)' }}>Kz 25.000</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--mid)' }}>Quota/mês</span>
                    <span style={{ fontWeight: 600, color: 'var(--dark)' }}>Kz 2.500</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
                    <span style={{ fontWeight: 600, color: 'var(--black)' }}>1º Ano</span>
                    <span style={{ fontWeight: 700, color: 'var(--red)' }}>Kz 55.000</span>
                  </div>
                </div>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="phone" size={18} /> Dúvidas?</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  Contacte a Secretaria da OEA para mais informações sobre taxas e quotas.
                </p>
                <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'var(--dark)' }}>
                  <span><Icon name="phone" size={13} /> (+244) 922-274-854</span>
                  <span><Icon name="email" size={13} /> geral@oea.economistas.ao</span>
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
