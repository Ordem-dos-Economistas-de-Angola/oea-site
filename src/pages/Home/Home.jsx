import Topbar from '../../components/Topbar/Topbar';
import Navbar from '../../components/Navbar/Navbar';
import Ticker from '../../components/Ticker/Ticker';
import Hero from '../../components/Hero/Hero';
import Sobre from '../../components/Sobre/Sobre';
import Noticias from '../../components/Noticias/Noticias';
import Eventos from '../../components/Eventos/Eventos';
import Pilares from '../../components/Pilares/Pilares';
import IndicadoresPanel from '../../components/IndicadoresPanel/IndicadoresPanel';
import Admissao from '../../components/Admissao/Admissao';
import Vantagens from '../../components/Vantagens/Vantagens';
import Delegacoes from '../../components/Delegacoes/Delegacoes';
// import Protocolos from '../../components/Protocolos/Protocolos';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import SearchOverlay from '../../components/SearchOverlay/SearchOverlay';
import ScrollTop from '../../components/ScrollTop/ScrollTop';
import { useReveal, useScrollTop, useCountUp } from '../../hooks/useReveal';
import { useHomeState } from './state';

export default function Home() {
  const { searchOpen, setSearchOpen } = useHomeState();

  useReveal();
  useScrollTop();
  useCountUp();

  return (
    <>
      <Topbar />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <Ticker />
      <Hero />
      <Sobre />
      <Noticias />
      <Eventos />
      <IndicadoresPanel />
      <Pilares />
      <Admissao />
      <Vantagens />
      <Delegacoes />
      {/* <Protocolos /> */}
      <Newsletter />
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollTop />
    </>
  );
}
