import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import Icon from '../../components/Icon/Icon';
import { useConselhoDirectivoPageState } from './state';
import '../OrdemPages.css';

const ORGAOS = [
  {
    icon: 'bank', title: 'Assembleia Geral',
    desc: '�rgão máximo da Ordem, composto por todos os membros no pleno gozo dos seus direitos. Aprova as grandes orientações estratégicas, elege os órgãos sociais e delibera sobre as matérias da sua competência estatutária.',
  },
  {
    icon: 'building', title: 'Conselho Directivo',
    desc: '�rgão executivo responsável pela administração e gestão corrente da OEA. Compete-lhe executar as deliberações da Assembleia Geral, elaborar os planos de actividades e gerir o património da Ordem.',
  },
  {
    icon: 'clipboard', title: 'Conselho Fiscal',
    desc: '�rgão de fiscalização económica e financeira, responsável pela verificação da regularidade das contas, da gestão orçamental e do cumprimento das obrigações legais e estatutárias.',
  },
  {
    icon: 'scale', title: 'Conselho Jurisdicional',
    desc: '�rgão com competência disciplinar, julga as infracções éticas e deontológicas praticadas pelos membros no exercício da profissão, aplicando as sanções previstas nos Estatutos.',
  },
  {
    icon: 'city', title: 'Conselhos Regionais',
    desc: '�rgãos descentralizados que representam a OEA nas regiões Norte, Centro, Leste e Sul, com planos de expansão para 5 Conselhos Regionais, promovendo a proximidade com os membros em todo o país.',
  },
  {
    icon: 'office', title: 'Colégios de Especialidades',
    desc: 'Estruturas técnicas organizadas por áreas de especialização (Macroeconomia, Economia de Empresas, Finanças, Planeamento e Estratégia), promovendo o aprofundamento do conhecimento e a produção técnica.',
  },
];

export default function ConselhoDirectivoPage() {
  useConselhoDirectivoPageState();

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
            <h2 className="section-title">Conselho Nacional Executivo</h2>
            <p className="section-desc">Conheça os órgãos sociais da Ordem dos Economistas de Angola e as suas competências institucionais.</p>
          </div>

          <div className="page-grid">
            <div className="page-content">
              <div className="reveal">
                <h3>Estrutura Orgânica da OEA</h3>
                <p>
                  A Ordem dos Economistas de Angola está organizada numa estrutura orgânica que garante a 
                  separação de poderes, a transparência na gestão e a participação dos membros na vida institucional. 
                  Os órgãos sociais da OEA são eleitos democraticamente pelos membros no pleno gozo dos seus direitos.
                </p>
              </div>

              <div style={{ marginTop: 24 }}>
                {ORGAOS.map((o, i) => (
                  <div key={o.title} className={`reveal${i % 2 === 0 ? '-left' : '-right'}`} style={{ marginBottom: 20 }}>
                    <div className="pillar-card">
                      <div className="pillar-card-header">
                        <span style={{ color: 'var(--red)' }}><Icon name={o.icon} size={24} /></span>
                        <div className="pillar-card-title">{o.title}</div>
                      </div>
                      <p className="pillar-card-desc">{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reveal" style={{ marginTop: 32 }}>
                <h4>Conselho Nacional Executivo</h4>
                <p>
                  O Conselho Nacional Executivo é o órgão executivo máximo da OEA, responsável pela 
                  implementação das políticas e estratégias definidas pela Assembleia Geral. 
                  �0 composto pelo Bastonário, Vice-Bastonário, Secretário-Geral, Tesoureiro e demais 
                  vogais eleitos para o mandato em curso.
                </p>
                <p>
                  O mandato do Conselho Nacional Executivo é de 4 anos, coincidindo com o mandato 
                  do Bastonário, podendo ser renovado por igual período nos termos dos Estatutos.
                </p>
              </div>
            </div>

            <div className="page-sidebar">
              <div className="page-sidebar-card">
                <h4><Icon name="building" size={18} /> Navegação</h4>
                <ul>
                  <li><Link to="/sobre">Sobre a OEA</Link></li>
                  <li><Link to="/missao-visao">Missão e Visão</Link></li>
                  <li><Link to="/estatutos">Estatutos</Link></li>
                  <li><Link to="/conselho-directivo" className="active">Conselho Directivo</Link></li>
                  <li><Link to="/relatorios-contas">Relatórios e Contas</Link></li>
                  <li><Link to="/planos-actividades">Planos de Actividades</Link></li>
                  <li><Link to="/legislacao">Legislação</Link></li>
                </ul>
              </div>
              <div className="page-sidebar-card">
                <h4><Icon name="trophy" size={18} /> Mandato 2026�2030</h4>
                <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6 }}>
                  O actual mandato do Conselho Nacional Executivo decorre de 2026 a 2030, 
                  sob o lema "Valorizar o Economista, Afirmar a Ordem, Fortalecer Angola".
                </p>
                <div style={{ marginTop: 12, padding: '12px 16px', background: 'rgba(192,24,26,0.06)', borderRadius: 8, border: '1px solid rgba(192,24,26,0.1)' }}>
                  <p style={{ fontSize: 12, color: 'var(--red)', margin: 0, fontWeight: 600 }}>
                    Eleições: Lista A, Lista B e Lista C
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
