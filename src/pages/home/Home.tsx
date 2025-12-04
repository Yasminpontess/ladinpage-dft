import Hero from "../../componentes/Hero";
import { ResultadosDFT } from "../../componentes/Resultados";

import SecaoServicos from "../../componentes/SecaoServico";
import Segmentos from "../../componentes/Segmentos";
import Formulario from "../../componentes/Formulario";

export default function Home() {
  return (
    <>
      <Hero />
      <SecaoServicos />
      <ResultadosDFT />
      <Segmentos />
      <Formulario />
    </>
  );
}
