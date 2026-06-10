import { useState } from 'react';

import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Ticker from '../components/Ticker';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import Pilares from '../components/Pilares';
import Admissao from '../components/Admissao';
import Vantagens from '../components/Vantagens';
import Delegacoes from '../components/Delegacoes';
import Protocolos from '../components/Protocolos';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import SearchOverlay from '../components/SearchOverlay';
import ScrollTop from '../components/ScrollTop';
import { useReveal, useScrollTop, useCountUp } from '../hooks/useReveal';

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

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
      <Pilares />
      <Admissao />
      <Vantagens />
      <Delegacoes />
      <Protocolos />
      <Newsletter />
      <Footer />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <ScrollTop />
    </>
  );
}
