// components/CarrosselSegmentos.tsx
// topo do arquivo Segmentos.tsx
import React, { useState, useEffect } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import EntregasSP from "./EntregasSp";

export default function Carrossel() {
  const segmentos = [
    { title: "Eletrônicos", img: "/imagens/imagem-11-compressed.webp" },
    { title: "Cosméticos", img: "/imagens/imagem-7-compressed.webp" },
    { title: "Alimentos e Bebidas", img: "/imagens/Alimentos e Bebidas.png" },
    { title: "Têxtil", img: "/imagens/textil.webp" },
    { title: "Agronegócio", img: "/imagens/agro.webp" },
    { title: "Correlatos", img: "/imagens/imagem-6-compressed.webp" },
    { title: "Saneantes", img: "/imagens/limpeza.webp" },
  ];

  const depoimentos = [
    {
      texto: "\"Empresa estruturada, equipe responsável e frota impecável.\"",
      nome: "João Perinoto",
      cargo: "Riclan / Freegels",
    },
    {
      texto: "\"Empresa referência nacional no segmento de transportes, frota própria, equipe treinada e atendimento nota mil.\"",
      nome: "Maycon Rodrigues",
      cargo: "JM Agro Distribuidora",
    },
    {
      texto: "\"Parceira de longa data, cuida do estoque, da separação e da entrega. Conhece nossas necessidades e garante agilidade com qualidade. Bora DFT!\" ",
      nome: "Adriana Puerta",
      cargo: "CEO da Jomer Aramados",
    },
    {
      texto: "\"Uso os serviços da Transportadora DFT e sempre da tudo certo. Muito rápido e eficiente. Sempre sou muito bem atendido pela equipe. Só tenho que agradecer.\" ",
      nome: "Mário Duarte",
      cargo: "All Horse",
    },
  ];

  const [index, setIndex] = useState(0);

  const [reverse, setReverse] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1536px)");

  const handleChange = () => {
    setReverse(mediaQuery.matches);
  };

  handleChange(); // inicial
  mediaQuery.addEventListener("change", handleChange);

  return () => mediaQuery.removeEventListener("change", handleChange);
}, []);


  const anterior = () => {
    setIndex((prev) => (prev === 0 ? depoimentos.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndex((prev) => (prev === depoimentos.length - 1 ? 0 : prev + 1));
  };

  return (
    
    <div
      className=" w-screen py-[-10px] md:py-2 bg-cover bg-center -mt-22"
      style={{ backgroundImage: "url('/imagens/imagem-4-compressed.webp')" }}
    >

       
  
      <h2 className="text-center text-white text-[25px] py-20 tracking-wide ">
        Experiência em múltiplos
      </h2>

      <h1
        className="
          text-center text-[55px] md:text-[65px] font-bold mb-16 -mt-25
          md:bg-gradient-to-l bg-gradient-to-r
          from-[#FFF6F3] 
          via-[#FFB9A6] via-5%
          to-[#FF3B2E]
          bg-clip-text text-transparent
        "
      >
        Segmentos
      </h1>

      {/* 🔒 ÚNICA ALTERAÇÃO: container centralizado */}
      <div className="relative pb-12 w-screen  flex justify-center items-center">
  <div className="w-full">


    <Swiper
  modules={[Autoplay, Pagination]}
  loop={true}
  pagination={{ clickable: true }}
  spaceBetween={24}
  slidesPerView="auto"
  slidesPerGroup={1}
  autoplay={{
    delay: 2500,               // tempo entre cada card
    disableOnInteraction: false,   // 👈 só telas grandes
  }}
  speed={reverse ? 1000 : 5}     // 👈 movimento só em telas grandes
  className="w-full"
>




      {segmentos.map((item, i) => (
        <SwiperSlide key={i} className="!w-auto">
                <div
  className="
    relative
    h-[350px]
    w-[clamp(280px,22vw,420px)]
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
        </div>
        </div>

{/* ---------------- SEÇÃO QUEM SOMOS ---------------- */}
<section className="w-full flex flex-col justify-center items-center px-4 mt-10 md:mt-16">

  {/* 1️⃣ IMAGEM */}
  <div className="w-full max-w-4xl mb-6 order-1">
    <div className="w-full aspect-video rounded-2xl shadow-xl overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/xO4uup5KLGE"
    title="YouTube video player"
    className="w-full h-full"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div>

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



    <p className="text-white text-[18px] md:text-[20px] leading-relaxed mb-4">
      Com mais de 10 anos de experiência no setor logístico, somos especialistas em transporte seguro
      e eficiente em todo o país.
    </p>

    <p className="text-white text-[18px] md:text-[20px] leading-relaxed">
      Contamos com frota própria, estrutura moderna e tecnologia de ponta, garantindo entregas com
      rastreabilidade e precisão. Nossas bases estrategicamente localizadas em São Paulo nos
      posicionam para atender com agilidade, garantindo entregas em até 24h na capital e de 2 a 3 dias
      no interior e litoral.
    </p>
  </div>

  {/* 3️⃣ LINHA VERMELHA */}
  <div className="w-full max-w-4xl border-b-4 border-red-600 mt-20 order-3"></div>

</section>




{/* ---------------- BLOCO DEPOIMENTOS ---------------- */}
<section className="w-full py-20 px-4">
  <div
    className="
      mx-auto
      w-full
      max-w-[1200px]
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-10
    "
  >

  {/* ---------- TEXTOS ---------- */}
  <div className="max-w-[460px] text-white md:text-left text-center">
    <h2 className="text-[20px] md:text-[32px] font-semibold leading-tight mt-[-15px] mb-1">
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
<p className="block md:hidden text-[18px] leading-tight mt-1 mb-4">
  Nossos clientes não só aprovam, mas <br /> comprovam o que nossa operação promete: <br />
  maior performance e eficiência logística.
</p>


   

  </div>

{/* ---------- CARROSSEL ---------- */}
<div className="flex flex-col items-center w-full md:max-w-[550px]">

  {/* CARD */}
  <div
    className="
      bg-white rounded-2xl shadow-xl
      w-[92%] md:w-full
      h-[340px] md:h-[360px]
      relative
      px-10
    "
  >

    {/* TEXTO CENTRAL FIXO */}
    <div
      className="
        absolute
        inset-x-10
        top-40
        -translate-y-1/2
        text-center
      "
    >
      <p
        className="
          text-[#0e1b93]
          leading-[1.20]

          mx-auto

         text-[clamp(1.3rem,4.8vw,1.55rem)]

        "
      >
        {depoimentos[index].texto}
      </p>
    </div>

    {/* AUTOR FIXO EMBAIXO */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
      <p className="text-red-600 font-bold text-[clamp(1rem,1.6vw,1.25rem)]">
        {depoimentos[index].nome}
      </p>
      <p className="text-gray-600 text-[clamp(0.75rem,1.4vw,0.875rem)] mt-1">
        {depoimentos[index].cargo}
      </p>
    </div>

    

    {/* SETA DIREITA */}
    <button
      onClick={proximo}
      className="
        absolute right-5 top-1/6 -translate-y-1/2
        w-8 h-8 rounded-full border-2 border-[#0e1b93]
        flex items-center justify-center
        text-[#0e1b93]
      "
    >
      ❯
    </button>
  </div>

  {/* INDICADORES (FORA DO CARD) */}
  <div className="flex justify-center gap-3 mt-5">
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


        
      
</section>




</div>


      
  );
}        
