

export default function EntregasSP() {
  return (
    <section className="w-full  ">
      <div
        className="
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-6
          lg:px-12
          py-16
          sm:py-20
          lg:py-28
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            justify-between
            gap-10
            lg:gap-20
            mb-[-200px] 
          "
        >
          {/* TEXTO */}
          <div className="max-w-[600px] text-white text-center lg:text-left mb-5 md:mb-35 mt-15 mt:mb-35">
            <h2
  className="
    text-[30px] md:text-[49px] font-extrabold leading-tight
    bg-gradient-to-r
    from-[#FFD2C2]     /* rosa claro */
    via-[#FF9A7A] via-[45%] /* salmão */
    to-[#FF3B2E]       /* vermelho forte */
    bg-clip-text
    text-transparent
    mt-[-100px]
  "
>
  Entregas de 24h à 72h <br />
  em todo o estado <br />
  de São Paulo
</h2>


            <p
              className="
              mt-15 mt:mb-0
                text-white/80
                text-[22px]
                sm:text-[25px]
                md:text-[25px]
                leading-relaxed
                mb-20
                
              "
            >
              <strong>Com 18 bases estrategicamente distribuídas</strong>,
              garantimos que sua carga fracionada seja entregue
              de <strong>24h à 72h</strong> em todo o estado de São Paulo.
            </p>
          </div>

          {/* IMAGEM */}
          <div
            className="
              w-full
              max-w-[420px]
              sm:max-w-[500px]
              md:max-w-[560px]
              xl:max-w-[620px]
              flex
              justify-center
              mb-45 md:mb-38
              mt-[-100px]
            "
          >
            <img
              src="/imagens/imagem-1-compressed.webp"
              alt="Mapa do estado de São Paulo com bases logísticas"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

