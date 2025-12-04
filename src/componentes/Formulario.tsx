import React from "react";
import { Mail, Phone, PhoneCall } from "lucide-react";

export default function Formulario() {
  return (
    <section className="w-full flex justify-center items-center py-16 bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

       {/* Lado Esquerdo */}
<div className="inline-block text-center md:text-left">
  <h2 className="text-4xl font-semibold text-[#2621BF] leading-tight">
    Solicite sua<br />

    <span
      className="
        font-extrabold 
        text-[40px] leading-[0.9]
        bg-gradient-to-r
        from-[#2621BF]
        via-[#501F70]
        to-[#F20505]
        text-transparent 
        bg-clip-text
      "
    >
      Proposta
    </span>

    <br />

    <span
      className="
        font-extrabold 
        text-[40px] leading-[0.9]
        bg-gradient-to-r
        from-[#2621BF]
        via-[#501F70]
        to-[#F20505]
        text-transparent 
        bg-clip-text
      "
    >
      Personalizada
    </span>
  </h2>

  {/* Linha vermelha */}
  <div className="w-[250px] h-[4px] bg-red-600 mt-2 mx-auto md:mx-0"></div>

  <div>
    <p className="mt-5 text-[#2621BF] text-[20px] max-w-sm font-[500] leading-relaxed mx-auto md:mx-0">
      Temos um time de especialistas<br />
      prontos para te entender e atender<br />
      a sua demanda.
    </p>

    <div className="mt-4 space-y-2 text-sm mx-auto md:mx-0">

      <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
        <Mail size={20} className="text-red-600" />
        leda.freire@dftlogistica.com.br
      </p>

      <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
        <Phone size={20} className="text-red-600" />
        (11) 4159-1832
      </p>

      <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
        <PhoneCall size={20} className="text-red-600" />
        (11) 99282-9484
      </p>

    </div>
  </div>
</div>


        {/* Lado Direito - Formulário */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full bg-gray-200 px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Seu e-mail corporativo"
            className="w-full bg-gray-200 px-4 py-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Seu WhatsApp"
            className="w-full bg-gray-200 px-4 py-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="CNPJ da sua empresa"
            className="w-full bg-gray-200 px-4 py-3 rounded-lg"
          />

          <select className="w-full bg-gray-200 px-4 py-3 rounded-lg">
            <option>Segmento</option>
            <option>Eletronicos</option>
            <option>Cosméticos</option>
            <option>Alimentos e Bebidas</option>
            <option>Têxtil</option>
            <option>Agronegocio</option>
            <option>Correlatos</option>
            <option>Saneantes</option>
            <option>Outros</option>
          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-[#3636c9] to-red-600 flex items-center justify-center gap-2"
          >
            SOLICITAR ORÇAMENTO ➤
          </button>
        </form>

      </div>
    </section>
  );
}
