import React, { useRef, useEffect } from "react";

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
        w-screen h-13 
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
      <section className="relative w-full h-[650px] md:h-[900px] flex items-end justify-center overflow-hidden">
        
        {/* ---- FUNDO ---- */}
        <img
          src="/imagens/Hero 2 DFT.png"
          alt="Banner DFT"
          className="absolute inset-0 w-full h-full object-cover"
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
            top-[52%] md:top-[60%]   /* 🔼 SUBE NO MOBILE */
            -translate-x-1/2
            z-20
            flex flex-col items-center
            w-full px-4 text-center
          "
        >

          {/* LOGO */}
          <img src="/imagens/logo-dft.png" className="w-60 -mb-[90px]" />

          {/* TÍTULO */}
          <h1
            className="
              text-white font-extrabold uppercase
              text-[20px] sm:text-[36px] md:text-[35px]
              leading-[1.05]
              drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]
              max-w-[1150px]
            "
          >
            TRANSPORTE DE CARGAS <br />
            FRACIONADAS EM SÃO PAULO
          </h1>

          {/* SUBTÍTULO */}
          <p className="mt-4 text-[13px] md:text-[20px] text-white drop-shadow-lg">
            Capital em até 24h • Interior de 2 a 3 dias
          </p>

          {/* BOTÃO */}
<button
  onClick={() => window.open("https://wa.me/5511992829484?text=Olá,%20quero%20uma%20proposta%20personalizada!", "_blank")}
  className="
    mt-2 md:mt-4
    bg-red-600 hover:bg-white
    text-white hover:text-blue-700
    font-bold
    px-3 py-1.5
    md:px-5 md:py-2
    rounded-md 
    text-xs md:text-lg
    shadow-xl btn-pulse
    transition-all duration-200
  "
>
  QUERO RECEBER UMA PROPOSTA PERSONALIZADA
</button>



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
    className="absolute w-screen left-1/2 -translate-x-1/2 
               top-[-15px] z-[100]"
  >
    <Marquee />
  </div>
</div>

    </>
  );
}
