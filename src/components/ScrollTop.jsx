import './ScrollTop.css';

export default function ScrollTop() {
  return (
    <button className="scroll-top" id="scrollTop" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Voltar ao topo">↑</button>
  );
}
