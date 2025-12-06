// components/CarrosselSegmentos.tsx
// topo do arquivo Segmentos.tsx
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Carrossel() {
  const segmentos = [
    { title: "Eletrônicos", img: "public/imagens/Eletronicos.png" },
    { title: "Cosméticos", img: "public/imagens/Cosméticos.png" },
    { title: "Alimentos e Bebidas", img: "public/imagens/Alimentos e Bebidas.png" },
    { title: "Têxtil", img: "public/imagens/Textil.png" },
    { title: "Agronegócio", img: "public/imagens/Agro.png" },
    { title: "Correlatos", img: "public/imagens/Correlatos.png" },
    { title: "Saneantes", img: "public/imagens/Saneantes.png" },
  ];


  


const depoimentos = [
    {
      texto: "\"Empresa estruturada, equipe responsável e frota impecável.\"",
      nome: "João Perinoto",
      cargo: "Riclan / Freegels",
    },
    {
      texto: "\"Atendimento excelente e entrega dentro do prazo.\"",
      nome: "Maria Souza",
      cargo: "Parceira DFT",
    },
    {
      texto: "\"Logística precisa e transparente. Recomendo!\" ",
      nome: "Carlos Lima",
      cargo: "Cliente",
    },
  ];

  const [index, setIndex] = useState(0);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full py-12 bg-cover bg-center -mt-25"
      style={{ backgroundImage: "url('public/imagens/BG 2.jpg')" }}
    >
      <h2 className="text-center text-white text-[25px] py-30 tracking-wide">
        Experiência em múltiplos
      </h2>

      <h1
  className="
    text-center text-[55px] md:text-[65px] font-bold mb-5 -mt-30
    md:bg-gradient-to-l bg-gradient-to-r
     from-[#FFF6F3] 
     via-[#FFB9A6] via-5%
     to-[#FF3B2E]
    bg-clip-text text-transparent
  "

  
>
  Segmentos
</h1>



      <div className="relative pb-12">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView="auto"   // ✅ faz todas as telas exibirem igual
          className="px-0"
        >
          {segmentos.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              <div
                className="
                  relative
                  h-[350px]
                  w-[300px]      /* ✅ largura fixa sem espaçamento gigante */
                  rounded-xl
                  overflow-hidden
                  shadow-lg
                  transition-all 
                  duration-500 
                  hover:scale-[1.04] 
                  hover:shadow-2xl
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                <div
                  className="
                    absolute 
                    inset-0 
                    bg-gradient-to-t
                    from-[#FFFFFF]/10 
                    via-[#FFFFFF]/10 
                    to-transparent
                    flex 
                    flex-col 
                    justify-end 
                    p-6
                  "
                >
                  <h3 className="text-[#1D1F96] text-[30px] font-bold text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
{/* ---------------- SEÇÃO QUEM SOMOS ---------------- */}
<section className="w-full flex flex-col justify-center items-center px-4 mt-10 md:mt-16">

  {/* 1️⃣ IMAGEM */}
  <div className="w-full max-w-4xl mb-6 order-1">
    <img
      src="public/imagens/WhatsApp Image 2025-12-01 at 10.07.14.jpeg"
      alt="Imagem Quem Somos"
      className="w-full rounded-2xl shadow-xl"
    />
  </div>

  {/* 2️⃣ TEXTO QUEM SOMOS */}
  <div
    className="
      max-w-4xl w-full
       backdrop-blur-md
      border border-white/30
      rounded-2xl
      p-6 md:p-10
      text-center
      shadow-xl
      order-2
    "
  >
   <h2
  className="
    text-3xl md:text-4xl font-bold mb-4
    bg-gradient-to-r
    from-[#FFFFFF] from-20%
    via-[#FF3B2E] via-65%
    to-[#FF3B2E]
    bg-clip-text text-transparent
  "
>
  Quem Somos
</h2>



    <p className="text-white text-sm md:text-base leading-relaxed mb-4">
      Com mais de 10 anos de experiência no setor logístico, somos especialistas em transporte seguro
      e eficiente em todo o país.
    </p>

    <p className="text-white text-sm md:text-base leading-relaxed">
      Contamos com frota própria, estrutura moderna e tecnologia de ponta, garantindo entregas com
      rastreabilidade e precisão. Nossas bases estrategicamente localizadas em São Paulo nos
      posicionam para atender com agilidade, garantindo entregas em até 24h na capital e de 2 a 3 dias
      no interior e litoral.
    </p>
  </div>

  {/* 3️⃣ LINHA VERMELHA */}
  <div className="w-full max-w-4xl border-b-4 border-red-600 mt-6 order-3"></div>

</section>




{/* ---------------- BLOCO DEPOIMENTOS ---------------- */}
<section className="w-full py-20 px-4 md:px-65 flex flex-col md:flex-row justify-between items-center gap-10">

  {/* ---------- TEXTOS ---------- */}
  <div className="max-w-[460px] text-white md:text-left text-center">
    <h2 className="text-3xl md:text-[32px] font-semibold leading-tight">
      Nossos clientes aprovam e
    </h2>

    <h1
      className="
        font-sora text-5xl md:text-[64px] font-extrabold leading-none 
        bg-gradient-to-r from-[#FFF6F3] via-[#FF8C73] to-[#FF3B2E]
        bg-clip-text text-transparent
      "
    >
      Comprovam
    </h1>

    <h1
      className="
        font-sora text-5xl md:text-[64px] font-extrabold leading-none mb-6
        bg-gradient-to-r from-red-700 to-white
        bg-clip-text text-transparent
      "
    >
      Resultados
    </h1>

    {/* Desktop only */}
<p className="hidden md:block text-[20px] leading-tight mb-8">
  Nossos clientes não só aprovam, mas <br /> comprovam o que nossa operação promete: <br />
  maior performance e eficiência logística.
</p>

{/* Mobile only */}
<p className="block md:hidden text-[19px] leading-tight mb-8">
  Nossos clientes não só aprovam, mas <br /> comprovam o que nossa operação promete: <br />
  maior performance e eficiência logística.
</p>


   <button
  className="
    hidden md:block
    bg-red-600 hover:bg-red-700 
    text-white font-bold
    px-6 py-4 md:px-6 md:py-2
    rounded-md shadow-xl 
    transition-all
  "
>
  A CHAMADA PARA AÇÃO VEM AQUI
</button>

  </div>

  {/* ---------- CARROSSEL ---------- */}
  <div className="flex justify-center w-full md:max-w-[550px]">

    <div
      className="
        bg-white rounded-2xl shadow-xl
        p-12 w-[92%] md:w-full text-center relative
        min-h-[330px] flex flex-col justify-center
      "
    >

      
      {/* CONTEÚDO DO CARD */}
      <p className="text-[#0e1b93] text-[24px] leading-relaxed mb-6 max-w-[420px] mx-auto">
        {depoimentos[index].texto}
      </p>

      <p className="text-red-600 font-bold text-xl">
        {depoimentos[index].nome}
      </p>
      <p className="text-gray-600 text-sm mt-1">
        {depoimentos[index].cargo}
      </p>

      {/* SETA ESQUERDA */}
      <button
        onClick={anterior}
        className="
          absolute left-6 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full border-2 border-[#0e1b93]
          flex items-center justify-center
          text-2xl text-[#0e1b93]
          "
          >
        ❮
      </button>
      

      {/* SETA DIREITA */}
      <button
        onClick={proximo}
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          w-12 h-12 rounded-full border-2 border-[#0e1b93]
          flex items-center justify-center
          text-2xl text-[#0e1b93]
        "
      >
        ❯
      </button>

      {/* INDICADORES */}
      <div className="flex justify-center gap-3 mt-6">
        {depoimentos.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-red-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>


    </div>
  </div>
        
      <button
  className="
    block md:hidden
    bg-red-600 hover:bg-red-700 
    text-white font-bold
    px-6 py-4
    rounded-md shadow-xl 
    transition-all
    mt-10
  "
>
  A CHAMADA PARA AÇÃO VEM AQUI
</button>
</section>




</div>
</div>

      
  );
}        
