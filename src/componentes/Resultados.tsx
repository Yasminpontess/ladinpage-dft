import React, { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to = 1000, duration = 2000, suffix = "" }) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;

          let start = null;

          const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);

            const current = Math.floor(progress * (to - from) + from);
            setValue(current);

            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

export default Counter;


// 🔴 Componente da FAIXA ROLANTE com LOOP perfeito
function Marquee() {
  const outerRef = useRef(null);
  const scrollerRef = useRef(null);

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
      while (scroller.scrollWidth < vw * 4 && safety < 30) {
        const clone = baseGroup.cloneNode(true);
        scroller.appendChild(clone);
        safety++;
      }
    };

    ensureLength();

    let last = performance.now();
    let offset = 0;
    const speed = 0.08;

    const loop = (now) => {
      const delta = now - last;
      last = now;
      offset += speed * delta;

      const limit = scroller.scrollWidth / 2;
      if (offset >= limit) offset -= limit;

      scroller.style.transform = `translateX(-${offset}px)`;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  return (
    <div
      ref={outerRef}
      className="w-screen h-13 overflow-hidden bg-red-600 rotate-[1.9deg] flex items-center"
    >
      <div
        ref={scrollerRef}
        className="flex items-center whitespace-nowrap will-change-transform"
      ></div>
    </div>
  );
}

export function ResultadosDFT() {
  const services = [
    {
      title: "Roteirização de entrega",
      description:
        "Tenha acesso ao meu método de prospecção que me permite ter clientes que pagam bem todos os dias.",
    },
    {
      title: "Rastreamento em tempo real",
      description:
        "Tenha acesso ao meu método de prospecção que me permite ter clientes que pagam bem todos os dias.",
    },
    {
      title: "Utilização de sistema WMS",
      description:
        "Tenha acesso ao meu método de prospecção que me permite ter clientes que pagam bem todos os dias.",
    },
    {
      title: "Seguro de carga",
      description:
        "Tenha acesso ao meu método de prospecção que me permite ter clientes que pagam bem todos os dias.",
    },
  ];

  return (
    <>
      <section
        className="py-12 md:py-15 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('public/imagens/Grid 1.png')",
        }}
      >
        <div className="container mx-auto px-4">
          {/* heading */}
          <div className="text-center mb-8">
            <div className="inline-block bg-red-600 text-white px-3 py-1 rounded mb-16">
              <h2 className=" text-[19px] md:text-2xl font-medium">
                Resultados que entregamos até aqui
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
<div className="text-center">
    <div className="text-[#1D1F96] text-5xl md:text-6xl font-extrabold">
      +<Counter to={10} duration={2000} />
    </div>
    <div className="text-blue-800 text-sm md:text-base">anos de mercado</div>
  </div>

  <div className="text-center">
    <div className="text-[#1D1F96] text-5xl md:text-6xl font-extrabold">
      <Counter to={98} duration={2000} suffix="%" />
    </div>
    <div className="text-blue-800 text-sm md:text-base">de nível de OTD</div>
  </div>

  <div className="text-center">
    <div className="text-[#1D1F96] text-5xl md:text-6xl font-extrabold">
      +<Counter to={12000} duration={2000} />
    </div>
    <div className="text-blue-800 text-sm md:text-base">Cargas fracionadas entregues</div>
  </div>

  

  <div className="text-center">
    <div className="text-[#1D1F96] text-5xl md:text-6xl font-extrabold">
      +<Counter to={28000} duration={2500} />
    </div>
    <div className="text-blue-800 text-sm md:text-base">toneladas expedidas</div>
  </div>

  
</div>
          </div>

          {/* content */}
          <div className="text-center max-w-3xl mx-auto">

            <p className="text-blue-800 text-[25px] leading-tight mt-20 mb-5 md:hidden">
  Maximize seu faturamento e <br /> crescimento com uma
</p>
<p className="hidden md:block text-blue-800 text-[30px] leading-tight md:mt-20 md:mb-5">
  Maximize seu faturamento e  crescimento com uma
</p>


            <h3
              className="
              mb-5
              text-5xl md:text-6xl
              font-extrabold
              inline-block
              leading-[1.15] md:leading-[1.2]
              pb-1
              bg-gradient-to-r
              from-[#FF0000]
              via-[#C3007A]
              to-[#003366]
              bg-clip-text
              text-transparent
            "
            >
              Logística Inteligente
            </h3>
          </div>

          {/* GRID CENTRALIZADO */}
          <div
  className="
    grid 
    grid-cols-1 
    lg:grid-cols-3 
    gap-6 
    lg:gap-1 
    items-start 
    justify-items-center 
    max-w-full 
    lg:max-w-[1000px]
    mx-auto
  "
>


            
            {/* Imagem desktop */}
            <div className="hidden lg:block lg:col-span-1 justify-self-center">
              <div 
  id="sideImage"
  className="
    w-full
    max-w-[1050px]
    h-[630px]
    rounded-lg
    overflow-hidden
    shadow-lg
    sticky top-20
    z-40
  "
>
  <img
    src="public/imagens/resultados.png"
    alt="DFT logística"
    className="w-full h-full object-cover"
  />
</div>

            </div>

            {/* Imagem mobile */}
<div className="lg:hidden flex justify-center">
  <img
    src="public/imagens/resultados.png"
    alt="DFT logística"
    className="w-[860px] h-[270px] rounded-lg object-cover shadow-lg"
  />
</div>


            {/* right column */}
            <div className="lg:col-span-2 justify-self-center">
              <div className="space-y-2 relative">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className={`
                      bg-[#24269C]
                      text-white
                      rounded-lg
                      p-10
                      md:p-12
                      lg:p-5
                      shadow-lg
                      min-h-[160px]
                      md:min-h-[150px]
                      border-2
                      md:max-w-[300px]
                      lg:max-w-[450px]
                      mx-auto
                      border-white
                      flex
                      flex-col
                      justify-center
                      shadow-[0_-10px_30px_rgba(0,0,0,0.5)]
                      overflow-hidden
                      transition-all
                      ${i % 1 === 0 ? "sticky top-20" : "sticky top-[300px]"}
                    `}
                  >
                    <h4
                      className="
                        text-lg md:text-xl font-bold mb-4 bg-gradient-to-r
                        from-[#F20505]
                        via-[#FFFFFF]
                        to-[#FF3B2E]
                        bg-clip-text
                        text-transparent
                        inline-block
                        leading-tight
                      "
                    >
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base opacity-90">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button className="bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition">
                  A CHAMADA PARA AÇÃO VEM AQUI
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE VERSION */}
          <div className="block md:hidden w-full pt-6 pb-6 mt-10 text-center">
            <p className="text-blue-700 text-[25px] font-medium mb-0">
              Por que escolher a
            </p>

            <h2
              className="
                text-[40px] font-extrabold
                bg-gradient-to-r
                from-[#FF0000]
                via-[#C3007A]
                to-[#003366]
                bg-clip-text
                text-transparent
                inline-block
              "
            >
              DFT LOGÍSTICA?
            </h2>

            <img
              src="public/imagens/Road.png"
              alt="Roadmap Mobile"
              className="w-[1000px] h-auto object-cover scale-[1.1] mt-[-95px] mb-25"
            />
          </div>

          {/* DESKTOP VERSION */}
          <div className="hidden md:block w-full pt-40 pb-40 text-center">
            <p className="text-[#1D1F96] text-[35px] font-medium mb-0">
              Por que escolher a
            </p>

            <h2
              className="
                text-[65px] font-extrabold
                bg-gradient-to-r
                from-[#FF0000]
                via-[#C3007A]
                to-[#003366]
                bg-clip-text
                text-transparent
                inline-block
              "
            >
              DFT LOGÍSTICA?
            </h2>

            <div className="pt-20 w-screen relative left-1/2 -translate-x-1/2">
              <img
                src="public/imagens/BG.png"
                alt="Roadmap DFT"
                className="w-screen h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🔴 Faixa rolante */}
      <div className="absolute w-screen left-1/2 -translate-x-1/2 z-[50] rotate-[-1deg] translate-y-[-2px] -mt-30">
        <Marquee />
      </div>
    </>
  );
}
