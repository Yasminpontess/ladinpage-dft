import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function SecaoServicos() {
  const cards = [
    {
      title: "Armazenagem",
      text: "Estoque estratégico no CD SP, garantindo organização, controle e disponibilidade logística para sua operação.",
      img: "/imagens/Armazenagem.jpg",
    },
    {
      title: "Picking & Packing",
      text: "Processos ágeis com medição, conferência e embalagens para separações eficientes e seguras.",
      img: "/imagens/Picking & Packing.jpg",
    },
    {
      title: "Cross Docking",
      text: "Redução de estoque e integração rápida entre recebimento e expedição, acelerando seu fluxo logístico.",
      img: "/imagens/Cross Docking.jpg",
    },
    {
      title: "Programado ou Spot",
      text: "Soluções flexíveis para pedidos programados ou emergenciais, mantendo sua operação sempre em movimento.",
      img: "/imagens/Programado ou Spot.jpg",
    },
  ];

  return (
    <section
  className="
    mt-[30px]
    md:mt-[20px]
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
    pb-[10px]
    md:pt-[150px]
    md:pb-[70px]
    bg-cover
    bg-center
    bg-no-repeat
    md:bg-[url('/imagens/BG 2.jpg')]
  "
  style={{
    backgroundImage: "url('/imagens/BG 1.jpg')",
  }}
>


      
      {/* TÍTULOS */}
      <div className="text-center mb-[10px] md:mb-[20px]">
        <p className="text-white text-[26px] md:text-[38px]">
          Mais do que transporte
        </p>

        <h2
  className="
    block 
    w-full 
    text-[40px]
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
    mb-[10px] md:mb-[10px]
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
            delay: 2500,
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
                  <h3 className="font-extrabold text-xl">{card.title}</h3>
                  <p className="text-base leading-tight mt-2">{card.text}</p>
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
      <div className="-mt-[50px] md:mt-35 text-center">
        <button
          className="
            bg-red-600 
            hover:bg-white
            text-[15px] 
            text-white 
            hover:text-blue-700 
            font-bold 
            px-4
            py-1.5
            md:px-4
            md:py-2 
            rounded-md 
             
            transition
          "
        >
          A CHAMADA PARA AÇÃO VEM AQUI
        </button>
      </div>
    </section>
  );
}
