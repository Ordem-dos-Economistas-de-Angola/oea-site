import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { usePlanosActividadesPageState } from './state';
import '../OrdemPages.css';

const FASES = [
  { num: '0�6 meses', label: 'Arranque', color: 'var(--red)', icon: 'rocket', items: ['Diagnóstico institucional', 'Actualização cadastral', 'Canais digitais activos', 'Portal digital versão inicial', 'Protocolos institucionais', 'Webinars e Podcast'] },
  { num: '6�18 meses', label: 'Consolidação', color: 'var(--gold)', icon: 'chart', items: ['Congresso Nacional', 'Prémio Anual do Economista', 'Centro de Estudos e Formação', 'Biblioteca da Ordem', 'Conselhos Regionais', 'Programa de Mentoria'] },
  { num: '18�36 meses', label: 'Afirmação', color: 'var(--red-dark)', icon: 'trophy', items: ['Digitalização total', '5 Conselhos Regionais', 'Barómetro de Fiscalidade', 'Parcerias internacionais', 'Programas de carreira', '80% satisfação membros'] },
];

const EIXOS = [
  {
    icon: 'trophy', title: 'Valorização Profissional',
    desc: 'Afirmar o economista angolano como actor central no desenvolvimento económico, com reconhecimento formal e prestígio institucional.',
    metas: ['Congresso Nacional � �0� 300 participantes', 'Prémio Anual do Economista', 'Programa de Mentoria � 30 pares', 'Literacia económica e financeira'],
  },
  {
    icon: 'announcement', title: 'Afirmação da Ordem',
    desc: 'Consolidar a OEA como referência técnica nacional, com voz activa no debate económico e presença internacional.',
    metas: ['�0� 4 pareceres técnicos/ano', 'Conferência Anual do OGE', 'Revista, Cadernos e Anuário', 'Barómetro de Fiscalidade'],
  },
  {
    icon: 'laptop', title: 'Modernização Institucional',
    desc: 'Digitalizar 100% dos serviços, instalar 5 Conselhos Regionais e garantir índice de satisfação dos membros �0� 80%.',
    metas: ['Portal digital com �0� 3 serviços online', 'Base de dados actualizada 100%', 'Centro de Estudos e Formação', '�0� 5 Conselhos Regionais activos'],
  },
];

export default function PlanosActividadesPage() {
  usePlanosActividadesPageState();

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => {}} />
      <section className="section">
        <div className="section-inner">
          <div style={{ marginBottom: 16 }}>
            <Link to="/" style={{ fontSize: 13, color: 'var(--mid)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              � � Voltar ao site
            </Link>
          </div>
          <div className="section-header">
            <div className="section-tag">Ordem</div>
            <div className="gold-sep" />
            <h2 className="section-title">Plano de Acção Estratégico 2026�2030</h2>
            <p className="section-desc">Valorizar o Economista, Afirmar a Ordem, Fortalecer Angola � o plano estratégico que orienta o mandato 2026�2030.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Enquadramento</h3>
                <p>
                  O Plano de Acção Estratégico 2026�2030 constitui o instrumento operacional de materialização 
                  do Manifesto Eleitoral apresentado no âmbito da eleição para o cargo de Bastonário da Ordem 
                  dos Economistas de Angola.
                </p>
                <p>
                  O plano assenta numa abordagem estruturada, orientada para resultados e alinhada com os 
                  desafios institucionais e profissionais que a Ordem enfrenta no actual contexto económico 
                  nacional. Num momento em que Angola procura consolidar a estabilidade macroeconómica, 
                  diversificar a sua base produtiva e reforçar a competitividade, torna-se imperativo que 
                  a OEA assuma um papel mais activo e influente.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Fases de Implementação</h4>
                <div className="phases-grid">
                  {FASES.map((f) => (
                    <div key={f.label} className="phase-card">
                      <div className="phase-icon" style={{ background: f.color }}>{f.num}</div>
                      <h4>{f.label}</h4>
                      <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                        {f.items.map((item) => (
                          <li key={item} style={{ fontSize: 12, color: 'var(--mid)', marginBottom: 4, paddingLeft: 0 }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Eixos Estratégicos</h4>
                {EIXOS.map((e) => (
                  <div key={e.title} className="pillar-card">
                    <div className="pillar-card-header">
                      <span style={{ color: 'var(--red)' }}><Icon name={e.icon} size={22} /></span>
                      <div className="pillar-card-title">{e.title}</div>
                    </div>
                    <p className="pillar-card-desc">{e.desc}</p>
                    <ul>
                      {e.metas.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Indicadores Transversais do Mandato</h4>
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-num">50%</div>
                    <div className="stat-label">Participação dos Membros</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">8+/ano</div>
                    <div className="stat-label">Eventos de Formação</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">4+/ano</div>
                    <div className="stat-label">Pareceres Técnicos</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">100%</div>
                    <div className="stat-label">Serviços Digitalizados</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao">Missão e Visão</Link></li>
                  <li><Link to="/estatutos">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades" className="active">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <h4 style={{ color: 'var(--gold)' }}><Icon name="scroll" size={18} /> Documento</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  O documento completo do Plano de Acção Estratégico 2026�2030 está disponível para consulta dos membros.
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--dark)', marginTop: 8 }}>
                  <Icon name="scroll" size={14} /> Plano de Acção Estratégico OEA (2026�2030)
                </p>
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
