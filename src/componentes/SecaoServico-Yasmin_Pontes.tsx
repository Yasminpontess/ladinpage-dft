import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import EntregasSP from "../componentes/EntregasSp";

export default function SecaoServicos() {
  const cards = [
    {
      title: "Armazenagem",
      text: "Estoque estratégico com gestão WMS, garantindo organização, controle e disponibilidade logística para sua operação.",
      img: "/imagens/imagem-8-compressed.webp",
      
    },
    {
      title: "Picking & Packing",
      text: "Processos ágeis com medição, conferência e embalagens para separações eficientes e seguras.",
      img: "/imagens/imagem-18-compressed.webp",
    },
    {
      title: "Cross Docking",
      text: "Recebimento e expedição integrados, sem necessidade de armazenagem. Mais agilidade, menos estoque parado e um fluxo logístico muito mais eficiente.",     
      img: "/imagens/2.webp",
    },
    {
      
      title: "Cargas agendadas ou Spot",
      text: "Soluções flexíveis para pedidos programados ou emergenciais, mantendo sua operação sempre em movimento.",
      img: "/imagens/imagem-19-compressed.webp",
    },
  ];

  return (
    <section
  className="
  absolute w-screen
    mt-[-18px]
    md:mt-[-1px]
    relative z-10
    w-full
    min-h-[100vh]
    md:min-h-[110vh]
    flex
    flex-col
    justify-start
    items-center
    text-center
    px-4
    pt-[100px]
    pb-[30px]
    md:pt-[150px]
    md:pb-[70px]
    bg-cover
    bg-center
    bg-no-repeat
  "
  style={{
    backgroundImage:
      "url('/imagens/fundo mobile.webp')",
  }}
>

  {/* 🔥 BLOCO ENTREGAS 24h–72h */}
  <EntregasSP />



      
      {/* TÍTULOS */}
      <div className="text-center mt-15 mb-[4px] md:mb-[20px]">
        <p className="text-white text-[20px] md:text-[38px]  mt-[-35px]">
          Mais do que transporte
        </p>

        <h2
  className="
  block md:hidden
    block 
    w-full 
    text-[45px]
    md:text-[45px]
    font-extrabold
    bg-gradient-to-r
    from-[#FFF6F3]        /* branco suave, leve na esquerda */
    via-[#FFB9A6] via-[5%] /* rosado leve no meio */
    to-[#FF3B2E]          /* vermelho forte */
    bg-clip-text
    text-transparent
    inline-block
    leading-tight
    mb-[-15px] md:mb-[10px]
    
  "
>
  Uma solução 
</h2>
        <h2
  className="
  block md:hidden
    w-full 
    text-[38px]
    md:text-[45px]
    font-extrabold
    bg-gradient-to-r
    from-[#FFF6F3]        /* branco suave, leve na esquerda */
    via-[#FFB9A6] via-[5%] /* rosado leve no meio */
    to-[#FF3B2E]          /* vermelho forte */
    bg-clip-text
    text-transparent
    inline-block
    leading-tight
    mb-[20px] md:mb-[10px]
  "
>
  logística completa
</h2>

<h2
  className="
    hidden
    md:block md:inline-block
    w-full 
    text-[50px]
    md:text-[45px]
    font-extrabold
    bg-gradient-to-r
    from-[#FFF6F3]
    via-[#FFB9A6] via-[1%]
    to-[#FF3B2E]
    bg-clip-text
    text-transparent
    leading-tight
    mb-[20px] md:mb-[35px]
    pb-[10px]
    mt-[-15px] 
  "
>
  Uma solução logística completa
</h2>



      </div>

      {/* MOBILE - CARROSSEL */}
      <div className="w-[300px] md:hidden pt-6 pb-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}   /* TRAVADO IGUAL EM TODO CELULAR */
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                  relative 
                  h-[450px]
                  border border-white 
                  rounded-3xl
                  overflow-hidden 
                  shadow-xl
                "
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081F7A]/90 via-[#081F7A]/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h2 className="font-extrabold text-[26px] md:text-[45px] ">{card.title}</h2>
                  <p className="text-[16px] leading-tight mt-2">{card.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* DESKTOP - GRID */}
      <div className="hidden md:grid max-w-8xl mx-auto grid-cols-4 gap-8 px-6 mb-[10px] md:-mb-[50px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="
              group
              relative 
              h-[500px]
              border border-white 
              rounded-2xl
              overflow-hidden 
              shadow-xl
              transition-all 
              duration-500 
              hover:scale-[1.05]
              hover:shadow-3xl
            "
          >
            <img
              src={card.img}
              alt={card.title}
              className="
                w-full 
                h-full 
                object-cover
                transition-all 
                duration-700 
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081F7A]/90 via-[#081F7A]/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-extrabold text-xl">{card.title}</h3>
              <p className="text-base leading-tight mt-2">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO */}
      <div className="-mt-[30px] md:mt-35 text-center">
        <a href="#formulario">
        <button
          className="
            bg-red-600 
            hover:bg-white
            text-[18px] 
            text-white 
            hover:text-blue-700 
            font-bold 
            px-4
            py-2.5
            md:px-10
            md:py-3 
            rounded-md 
            shadow-xl btn-pulse
             
            transition
          "
        >
          SOLICITE UMA COTAÇÃO AGORA
        </button>
        </a>
      </div>
    </section>
  );
}
