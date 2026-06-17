import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WhatsAppBtn from "./components/WhatsAppBtn/WhatsAppBtn";
import Home from "./pages/Home/Home";
import AdmissaoPage from "./pages/AdmissaoPage/AdmissaoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SobrePage from "./pages/SobrePage/SobrePage";
import MissaoVisaoPage from "./pages/MissaoVisaoPage/MissaoVisaoPage";
import EstatutosPage from "./pages/EstatutosPage/EstatutosPage";
import ConselhoDirectivoPage from "./pages/ConselhoDirectivoPage/ConselhoDirectivoPage";
import RelatoriosContasPage from "./pages/RelatoriosContasPage/RelatoriosContasPage";
import PlanosActividadesPage from "./pages/PlanosActividadesPage/PlanosActividadesPage";
import LegislacaoPage from "./pages/LegislacaoPage/LegislacaoPage";
import DelegacaoNortePage from "./pages/DelegacaoNortePage/DelegacaoNortePage";
import DelegacaoCentroPage from "./pages/DelegacaoCentroPage/DelegacaoCentroPage";
import DelegacaoLestePage from "./pages/DelegacaoLestePage/DelegacaoLestePage";
import DelegacaoSulPage from "./pages/DelegacaoSulPage/DelegacaoSulPage";
import AdmissaoComoInscreverPage from "./pages/AdmissaoComoInscreverPage/AdmissaoComoInscreverPage";
import AdmissaoRequisitosPage from "./pages/AdmissaoRequisitosPage/AdmissaoRequisitosPage";
import AdmissaoEstrangeirosPage from "./pages/AdmissaoEstrangeirosPage/AdmissaoEstrangeirosPage";
import AdmissaoTaxasPage from "./pages/AdmissaoTaxasPage/AdmissaoTaxasPage";
import NoticiasPage from "./pages/NoticiasPage/NoticiasPage";
import NoticiaPage from "./pages/NoticiaPage/NoticiaPage";
import EventosPage from "./pages/EventosPage/EventosPage";
import EventoPage from "./pages/EventoPage/EventoPage";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";
import AdminNoticias from "./pages/admin/AdminNoticias/AdminNoticias";
import AdminEventos from "./pages/admin/AdminEventos/AdminEventos";
import AdminMembros from "./pages/admin/AdminMembros/AdminMembros";
import AdminQuotas from "./pages/admin/AdminQuotas/AdminQuotas";
import AdminLoginPage from "./pages/admin/AdminLoginPage/AdminLoginPage";

function ProtectedRoute({ children }) {
  const auth = localStorage.getItem('oea_admin_auth');
  if (!auth) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissao" element={<AdmissaoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
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
        <Route
          path="/admissao-como-inscrever"
          element={<AdmissaoComoInscreverPage />}
        />
        <Route
          path="/admissao-requisitos"
          element={<AdmissaoRequisitosPage />}
        />
        <Route
          path="/admissao-estrangeiros"
          element={<AdmissaoEstrangeirosPage />}
        />
        <Route path="/admissao-taxas" element={<AdmissaoTaxasPage />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/noticia/:id" element={<NoticiaPage />} />
        <Route path="/eventos" element={<EventosPage />} />
        <Route path="/evento/:id" element={<EventoPage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/noticias"
          element={
            <ProtectedRoute>
              <AdminNoticias />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/eventos"
          element={
            <ProtectedRoute>
              <AdminEventos />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/membros"
          element={
            <ProtectedRoute>
              <AdminMembros />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/quotas"
          element={
            <ProtectedRoute>
              <AdminQuotas />
            </ProtectedRoute>
          }
        />
      </Routes>
      <WhatsAppBtn />
    </BrowserRouter>
  );
}
