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
