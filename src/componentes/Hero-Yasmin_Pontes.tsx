import React, { useRef, useEffect } from "react";
import LogoDftImg from "../assets/imagens/logo-dft.png";

// 🔴 Componente da FAIXA ROLANTE (loop perfeito invertido)
function Marquee() {
  const outerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const scroller = scrollerRef.current;
    if (!outer || !scroller) return;

    const baseHTML = `
      <span class="text-[20px] md:text-[20px] font-extrabold text-white uppercase px-10">LOGÍSTICA</span>
      <span class="text-[20px] md:text-[20px] font-extrabold text-white uppercase px-10">MENOR LEAD TIME</span>
      <span class="text-[20px] md:text-[20px] font-extrabold text-white uppercase px-10">24H PARA SÃO PAULO</span>
    `;

    const baseGroup = document.createElement("div");
    baseGroup.className = "flex items-center";
    baseGroup.innerHTML = baseHTML;
    scroller.appendChild(baseGroup);

    const ensureLength = () => {
      const vw = outer.offsetWidth;
      let safety = 0;
      while (scroller.scrollWidth < vw * 2 && safety < 30) {
        const clone = baseGroup.cloneNode(true) as HTMLDivElement;
        scroller.appendChild(clone);
        safety++;
      }
    };

    ensureLength();

    let last = performance.now();
    let offset = 0;
    const speed = 0.08;

    const loop = (now: number) => {
      const delta = now - last;
      last = now;

      offset -= speed * delta;

      const limit = scroller.scrollWidth / 2;
      if (offset <= 0) offset += limit;

      scroller.style.transform = `translateX(-${offset}px)`;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div
      ref={outerRef}
      className="
        w-screen h-15 
        overflow-hidden 
        bg-red-600 
        -rotate-[1.1deg]
        flex items-center
      "
    >
      <div
        ref={scrollerRef}
        className="flex items-center whitespace-nowrap will-change-transform"
      />
    </div>
  );
}

// 🔵 HERO PRINCIPAL
export default function Hero() {
  return (
    <>
    <section className="absolute w-screen relative w-full h-[650px] md:h-[900px] flex items-end justify-center overflow-hidden">



        
        {/* ---- FUNDO ---- */}
        <img
          src="/imagens/imagem-14-compressed.webp"
          alt="Banner DFT"
          className="absolute w-screen inset-0 w-full h-full object-cover"


        />

        {/* ---- GRADIENTE EMBAIXO ---- */}
        <div 
          className="
            absolute bottom-0 left-0 
            w-full h-[60%] 
            bg-gradient-to-t from-[#0c1d73] via-[#0c1d73d5] to-transparent 
            pointer-events-none
          "
        ></div>

        {/* ---- CONTEÚDO ---- */}
        <div
          className="
            absolute left-1/2 
            top-[48%] md:top-[55%]   /* 🔼 SUBE NO MOBILE */
            -translate-x-1/2
            z-20
            flex flex-col items-center
            w-full px-4 text-center
          "
        >

          {/* LOGO */}
          <img
           src="/imagens/imagem-15-compressed.webp"
           className="w-48 md:w-75 -mb-[68px] md:-mb-[125px]" />

          {/* TÍTULO */}
          <h1
            className="
              text-white font-extrabold uppercase
              text-[22px] md:text-[35px]
              leading-[1.05]
              drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
              max-w-[1150px]
            "
          >
            TRANSPORTE DE CARGAS 
          </h1>

          <h1
            className="
              text-white font-extrabold uppercase
              text-[20px] text-[22px] md:text-[35px]
              leading-[1.05]
              drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
              max-w-[1150px]
            "
          >
            
            FRACIONADAS EM SÃO PAULO
          </h1>

          {/* SUBTÍTULO */}
          <p className="mt-4 text-[18px] md:text-[25px] text-white drop-shadow-lg">
            Capital em até 24h • Interior de 48h a 72h
          </p>

          {/* BOTÃO */}
          <a href="#formulario">
<button
  
  className="
    mt-6 md:mt-4
    bg-red-600 hover:bg-white
    text-white hover:text-blue-700
    font-bold
    px-5 py-3
    md:px-7 md:py-2
    rounded-md 
    text-xs md:text-lg
    shadow-xl btn-pulse
    transition-all duration-200
  "
>
  RECEBA UMA PROPOSTA PERSONALIZADA
</button>
</a>



          {/* ANIMAÇÃO DO BOTÃO */}
          <style>
            {`
              .btn-pulse {
                animation: pisca 1.5s infinite;
                box-shadow: 0px 0px 21px -6px #E8171E;
              }
              @keyframes pisca {
                70% { box-shadow: 0 0 0 25px rgba(255, 255, 255, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
              }
            `}
          </style>
        </div>
      </section>

      {/* 🔴 FAIXA ROLANTE SOBRE A PRÓXIMA SEÇÃO */}
<div className="relative w-full h-0 z-[100] pointer-events-none">
  <div 
    className="absolute left-0 w-full
 
               top-[-18px] z-[100]"
  >
    <Marquee />
  </div>
</div>

    </>
  );
}
