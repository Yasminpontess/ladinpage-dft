// components/CarrosselSegmentos.tsx
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

  return (
    <div
      className="w-full py-16 bg-cover bg-center -mt-25"
      style={{ backgroundImage: "url('public/imagens/BG 2.jpg')" }}
    >
      <h2 className="text-center text-white text-sm tracking-wide">
        Experiência em múltiplos
      </h2>

      <h1 className="text-center text-[40px] text-red-300 font-bold mb-15">
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
                  h-[410px]
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
                  <h3 className="text-[#24269C] text-xl font-bold text-center">
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
      bg-white/10 backdrop-blur-md
      border border-white/30
      rounded-2xl
      p-6 md:p-10
      text-center
      shadow-xl
      order-2
    "
  >
    <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
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




{/* ---------------- BLOCO "DEPOIMENTOS" ---------------- */}
<div
  className="
    w-full px-5 mt-10
    flex flex-col md:flex-row justify-center items-center 
    gap-10 md:gap-20
    max-w-[1200px] mx-auto
  "
>

  {/* 4️⃣ TEXTOS — NO MOBILE FICA PRIMEIRO */}
  <div className="max-w-[400px] text-white text-center md:text-left order-4 md:order-1">
    <h2 className="text-2xl md:text-[28px] font-semibold font-sora leading-tight">
      Nossos clientes aprovam e
    </h2>

    <h1
      className="
        font-sora text-5xl md:text-6xl font-extrabold mb-6 leading-none
        bg-gradient-to-b from-red-400 to-red-700 
        bg-clip-text text-transparent
      "
    >
      Comprovam Resultados
    </h1>

    <p className="text-[10px] md:text-[18px] mb-8">
      Nossos clientes não só aprovam, mas <br /> comprovam o que nossa operação promete: <br />
      maior performance e eficiência logística.
    </p>
  </div>

  {/* 5️⃣ CARD — NO MOBILE FICA DEPOIS DO TÍTULO */}
  <div
    className="
      bg-white rounded-xl shadow-xl p-10 w-full max-w-[450px]
      text-center relative order-5 md:order-2
    "
  >
    <p className="text-gray-800 text-lg leading-relaxed mb-6">
      Empresa estruturada, equipe responsável e frota impecável.
    </p>

    <p className="text-red-600 font-bold text-lg">João Perinoto</p>
    <p className="text-gray-600 text-sm mt-1">Ricaln/Freegels</p>

    {/* Setas */}
    <button className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-[#0e1b93]">
      ❮
    </button>

    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-[#0e1b93]">
      ❯
    </button>

    {/* Bolinhas */}
    <div className="flex justify-center gap-2 mt-6">
      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
    </div>
  </div>
</div>


{/* 6️⃣ BOTÃO — NO MOBILE FICA POR ÚLTIMO */}
<div className="w-full flex justify-center mt-6 order-6">
  <button
    className="
      bg-red-600 hover:bg-red-700 text-white font-bold
      px-6 md:px-8 py-3 md:py-4 rounded-md
      shadow-xl transition-all
    "
  >
    A CHAMADA PARA AÇÃO VEM AQUI
  </button>
</div>




</div>
</div>

      
  );
}        
