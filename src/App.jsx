import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WhatsAppBtn from './components/WhatsAppBtn';
import Home from './pages/Home';
import AdmissaoPage from './pages/AdmissaoPage';
import LoginPage from './pages/LoginPage';
import SobrePage from './pages/SobrePage';
import MissaoVisaoPage from './pages/MissaoVisaoPage';
import EstatutosPage from './pages/EstatutosPage';
import ConselhoDirectivoPage from './pages/ConselhoDirectivoPage';
import RelatoriosContasPage from './pages/RelatoriosContasPage';
import PlanosActividadesPage from './pages/PlanosActividadesPage';
import LegislacaoPage from './pages/LegislacaoPage';
import DelegacaoNortePage from './pages/DelegacaoNortePage';
import DelegacaoCentroPage from './pages/DelegacaoCentroPage';
import DelegacaoLestePage from './pages/DelegacaoLestePage';
import DelegacaoSulPage from './pages/DelegacaoSulPage';
import AdmissaoComoInscreverPage from './pages/AdmissaoComoInscreverPage';
import AdmissaoRequisitosPage from './pages/AdmissaoRequisitosPage';
import AdmissaoEstrangeirosPage from './pages/AdmissaoEstrangeirosPage';
import AdmissaoTaxasPage from './pages/AdmissaoTaxasPage';
import NoticiasPage from './pages/NoticiasPage';
import NoticiaPage from './pages/NoticiaPage';
import EventosPage from './pages/EventosPage';
import EventoPage from './pages/EventoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissao" element={<AdmissaoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/missao-visao" element={<MissaoVisaoPage />} />
        <Route path="/estatutos" element={<EstatutosPage />} />
        <Route path="/conselho-directivo" element={<ConselhoDirectivoPage />} />
        <Route path="/relatorios-contas" element={<RelatoriosContasPage />} />
        <Route path="/planos-actividades" element={<PlanosActividadesPage />} />
        <Route path="/legislacao" element={<LegislacaoPage />} />
        <Route path="/delegacao-norte" element={<DelegacaoNortePage />} />
        <Route path="/delegacao-centro" element={<DelegacaoCentroPage />} />
        <Route path="/delegacao-leste" element={<DelegacaoLestePage />} />
        <Route path="/delegacao-sul" element={<DelegacaoSulPage />} />
        <Route path="/admissao-como-inscrever" element={<AdmissaoComoInscreverPage />} />
        <Route path="/admissao-requisitos" element={<AdmissaoRequisitosPage />} />
        <Route path="/admissao-estrangeiros" element={<AdmissaoEstrangeirosPage />} />
        <Route path="/admissao-taxas" element={<AdmissaoTaxasPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticia/:id" element={<NoticiaPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/evento/:id" element={<EventoPage />} />
      </Routes>
      <WhatsAppBtn />
    </BrowserRouter>
  );
}
