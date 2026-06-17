import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useMissaoVisaoPageState } from './state';
import '../OrdemPages.css';

const VALORES = [
  { icon: 'trophy', title: 'Excelência', desc: 'Promoção da mais elevada qualidade técnica e científica no exercício da profissão de economista.' },
  { icon: 'handshake', title: 'Ética e Deontologia', desc: 'Defesa intransigente dos princípios éticos, da honestidade intelectual e da responsabilidade profissional.' },
  { icon: 'globe', title: 'Responsabilidade Social', desc: 'Compromisso com o desenvolvimento económico sustentável e o bem-estar da sociedade angolana.' },
  { icon: 'lightbulb', title: 'Inovação', desc: 'Estímulo ao pensamento crítico, à investigação económica e à modernização institucional.' },
  { icon: 'scale', title: 'Independência', desc: 'Actuação com autonomia técnica, imparcialidade e isenção no exercício das funções consultivas.' },
  { icon: 'users', title: 'Solidariedade', desc: 'Fortalecimento da coesão, cooperação e espírito de corpo entre os economistas angolanos.' },
];

export default function MissaoVisaoPage() {
  useMissaoVisaoPageState();

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
            <div className="section-tag">Ordem</div>
            <div className="gold-sep" />
            <h2 className="section-title">Missão e Visão</h2>
            <p className="section-desc">Os princípios fundamentais que orientam a actuação da Ordem dos Economistas de Angola.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Missão</h3>
                <p style={{ fontSize: 17, fontStyle: 'italic', color: 'var(--dark)', borderLeft: '3px solid var(--red)', paddingLeft: 20, marginBottom: 32 }}>
                  "Valorizar o Economista, Afirmar a Ordem, Fortalecer Angola"
                </p>
                <p>
                  A missão da OEA consiste em regular, representar e dignificar a profissão de economista em Angola, 
                  promovendo a excelência técnica, a conduta ética e o desenvolvimento profissional contínuo dos seus membros, 
                  e contribuindo activamente para o debate económico nacional e para a formulação de políticas públicas 
                  que promovam o desenvolvimento sustentável do país.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 40 }}>
                <h3>Visão</h3>
                <p style={{ fontSize: 17, fontStyle: 'italic', color: 'var(--dark)', borderLeft: '3px solid var(--gold)', paddingLeft: 20, marginBottom: 32 }}>
                  "Ser a referência técnica nacional no pensamento económico e a instituição incontornável na 
                  regulação e valorização da profissão de economista em Angola e no espaço africano."
                </p>
                <p>
                  A OEA aspira a consolidar-se como uma instituição moderna, digitalizada e descentralizada, 
                  com capacidade de influência técnica e política, reconhecida pela qualidade dos seus pareceres, 
                  pela excelência da sua formação e pela efectividade dos seus serviços aos membros.
                </p>
              </div>

              <div className="reveal" style={{ marginTop: 40 }}>
                <h3>Valores</h3>
                <p>Os valores que norteiam a actuação da Ordem dos Economistas de Angola são:</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 20 }}>
                  {VALORES.map((v) => (
                    <div key={v.title} className="stat-card" style={{ textAlign: 'left', padding: 20 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ color: 'var(--red)' }}><Icon name={v.icon} size={18} /></span>
                        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--black)' }}>{v.title}</h4>
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--mid)', margin: 0, lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao" className="active">Missão e Visão</Link></li>
                  <li><Link to="/estatutos">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="scroll" size={18} /> Lema</h4>
                <p style={{ fontSize: 14, fontStyle: 'italic', color: 'var(--dark)', lineHeight: 1.6 }}>
                  "Valorizar o Economista, Afirmar a Ordem, Fortalecer Angola"
                </p>
                <div style={{ marginTop: 12, padding: '12px 16px', background: 'rgba(201,168,76,0.1)', borderRadius: 8, border: '1px solid rgba(201,168,76,0.2)' }}>
                  <p style={{ fontSize: 12, color: 'var(--mid)', lineHeight: 1.5, margin: 0 }}>
                    Este lema traduz o compromisso da OEA com a valorização profissional, 
                    o fortalecimento institucional e o desenvolvimento económico de Angola.
                  </p>
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
