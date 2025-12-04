import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Footer from "./componentes/Footer";
import SecaoServicos from "./componentes/SecaoServico";
import { ResultadosDFT } from "./componentes/Resultados";
import Segmentos from "./componentes/Segmentos";
import Formulario from "./componentes/Formulario";

const App = () => {
  return (
    <>
      {/* Botão flutuante do WhatsApp */}
      <a
  href="https://wa.me/5511992829484"
  className="fixed bottom-4 right-4 bg-[#25d366] rounded-full w-14 h-14 flex items-center justify-center shadow-lg z-[9999]"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="/imagens/WhatsApp.svg.webp"
    alt="WhatsApp"
    className="w-10 h-10"
  />
  <span className="absolute top-1 right-1 w-3 h-3 bg-red-600 border-2 border-white rounded-full"></span>
</a>


      <BrowserRouter>
        <div className="min-h-[80vh]">

          {/* ROTAS DEVEM FICAR DENTRO DE <Routes> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/solucao" element={<SecaoServicos />} />
            <Route path="/resultadosdft" element={<ResultadosDFT />} />
            <Route path="/segmentos" element={<Segmentos />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
