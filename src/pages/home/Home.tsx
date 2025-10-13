import React, { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";
import FormularioWhatsApp from "../../componentes/FormularioWhatsApp";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaRegClock,
  FaRegHandshake,
  FaUserCheck,
  FaHeadset,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";
import ShinyText from "./ShinyText";
import "./ShinyText.css";
import FormularioHome from "../../componentes/FormularioWhatsApp";

const ArrowRightIcon = () => (
    // Simulação do ícone 'bi bi-arrow-right'
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        className="w-4 h-4 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" 
        viewBox="0 0 16 16"
    >
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
    </svg>
);



    
    // Simulação da lista de redes sociais para evitar repetição de código
    

const Home = () => {

  const socialLinks = [
        { name: "INSTAGRAM", href: "#" },
        { name: "FACEBOOK", href: "#" },
        { name: "GMAIL", href: "#" },
    ];
    
  return (
   <div className="w-full bg-white overflow-x-hidden">
  <section
    className="relative w-full min-h-screen bg-cover bg-center flex items-center px-6 sm:px-12"
    style={{
      backgroundImage: `url("/imagens/cenario 3.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Overlay escuro */}
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    

    {/* Botões laterais */}
    <div className="absolute right-4 top-1/3 flex flex-col space-y-4 z-20">
      <a
        href="https://wa.me/5511956576642"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full shadow-md hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/jluizconstrucao?igsh=MTZyc3RjZjB5YzEwbQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full shadow-md hover:scale-110 transition"
      >
        <FaInstagram className="text-white w-6 h-6" />
      </a>
    </div>

    {/* Gradiente branco inferior */}
   <div
  className="absolute bottom-[-80px] left-0 w-full h-[300px]
             bg-gradient-to-t from-white to-transparent z-30"
></div>


    {/* Conteúdo central */}
    
    <div className="relative z-20 w-full flex justify-center">
      <div className="relative w-[1600px] flex justify-center items-end">
        {/* Texto principal — SUBIU */}
{/* SOMENTE MOBILE */}
<h1
  className="block sm:hidden absolute text-center font-bold text-white  leading-tight 
  text-5xl"
  style={{
    top: "5%",     // Ajuste a altura até ficar certinho
    left: "50%",
    transform: "translateX(-50%)", // centraliza horizontalmente
    zIndex: 30,
    textShadow: "3px 3px 12px rgba(212, 212, 212, 0.9)"
  }}
>
  Construindo sonhos 
</h1>
<h1
  className="block sm:hidden absolute text-center font-bold text-orange-400  leading-tight 
  text-5xl"
  style={{
    top: "25%",     // Ajuste a altura até ficar certinho
    left: "50%",
    transform: "translateX(-50%)", // centraliza horizontalmente
    zIndex: 30,
  }}
>
   Entregando qualidade
</h1>

        
        {/* Texto da esquerda */}
<h1
  className="hidden sm:block absolute font-bold text-blue-950 leading-tight 
  text-3xl sm:text-5xl md:text-6xl lg:text-[80px]
  top-[-10%] sm:top-[10%] md:top-[12%] lg:top-[15%]"
  style={{
    left: "5%",
  }}
>
  CONSTRUINDO <br /> SONHOS
</h1>




        {/* Imagem com zoom no mobile */}
        <img
  src="/imagens/Design%20sem%20nome%20%289%29.png"
  alt="Construção"
  className="relative z-20 object-contain max-h-[80vh] transition-transform duration-700 ease-in-out
  sm:scale-130 scale-[1.4]
  mt-[250px] sm:mt-0" // <-- desce no mobile
  style={{ marginBottom: "-60px" }}
/>


        {/* Texto da direita */}
<h1
  className="hidden sm:block absolute font-bold text-orange-400 leading-tight text-right
  text-3xl sm:text-5xl md:text-6xl lg:text-[70px]
  bottom-[72%] sm:bottom-[35%] md:bottom-[28%] lg:bottom-[18%]
  right-[5%] sm:right-[10%] md:right-[12%] lg:right-[5%]"
  style={{
    zIndex: 20,
  }}
>
  ENTREGANDO <br /> QUALIDADE
</h1>


     </div>
    </div>

      {/* Efeito Shine */}
<span
  className="
    absolute 
    left-0 right-0 
    bottom-0 
    h-[180px] sm:h-[200px] md:h-[240px] lg:h-[280px]
    bg-gradient-to-t from-white via-white/80 to-transparent
    pointer-events-none
    z-30
  "
/>
  </section>

  <div className="w-screen flex flex-col items-center bg-whites mt-[-10px]">
        <div className="w-full flex justify-center items-center mt-24 px-4 mb-12mt-24 mb-24 relative z-10">
          <div className="bg-neutral-600/80 backdrop-blur-md p-10 rounded-xl z-5 max-w-2xl w-full border border-white/10 shadow-lg text-white text-center">
            <p className="text-base sm:text-xl font-bold text-white uppercase">
            Projetos residenciais e comerciais com excelência, segurança e prazo
            garantido.
          </p>
             <p className="mt-4 text-gray-200 text-sm sm:text-base">
            Mais do que construir obras, construímos histórias. Aqui na JLuiz
            Construção cada projeto é pensado para refletir o seu sonho, com
            segurança, transparência e dedicação em cada detalhe.
          </p>
            <button
  className="relative inline-flex items-center justify-center px-6 py-3 mt-10
             font-semibold text-white   bg-blue-950 
             rounded-lg shadow-md overflow-hidden group"
  data-aos="fade-up"
  data-aos-delay="400"
  data-aos-duration="1000"
>
  <span className="mr-2 relative z-10">FAÇA JÁ SEU ORÇAMENTO</span>
  <svg
    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2 relative z-10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1,5 L11,5" stroke="white" strokeWidth="2" />
    <polyline
      points="8 1 12 5 8 9"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>




</button>
          </div>
        </div>
        </div>




    

     <section className="w-full bg-white py-16 px-6 sm:px-12 mt-[40px]">

      
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-16  ">
    
   
    {/* Slogan */}
    <div className="relative z-10 max-w-4xl">

      

      
  {/* Título com efeito ShinyText */}
  <ShinyText
    text="Construa ou reforme sem preocupações"
    className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-extrabold uppercase"
  />

  {/* Subtítulo sem efeito */}
  <p className="mt-10 text-lg sm:text-xl font-bold text-black">
    JLuiz cuida de tudo do início ao fim da sua obra.
  </p>
  <div className="flex justify-center mt-2 ">
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
            <div className="w-12 h-2 bg-blue-950 mx-1"></div>
          </div>
</div>


    {/* Contador (ou Diferenciais resumidos) */}
    <div className="w-full flex flex-col items-center justify-center mb-6 
  scale-90 sm:scale-100 md:scale-100">
  <Diferenciais />


    

    {/* Cards de diferenciais */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

      {/* 1 - Experiência */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
          <FaRegClock className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Experiência</h3>
          <p className="text-white text-sm">
            Mais de 30 anos atuando no mercado de construções residenciais e comerciais.
          </p>
        </div>
      </motion.div>

      {/* 2 - Transparência */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
          <FaRegHandshake className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Transparência</h3>
          <p className="text-white text-sm">
            Negociações claras, contratos bem definidos e acompanhamento em cada etapa.
          </p>
        </div>
      </motion.div>

      {/* 3 - Compromisso */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
          <FaUserCheck className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Compromisso</h3>
          <p className="text-white text-sm">
            Obras entregues dentro do prazo, com segurança e qualidade garantida.
          </p>
        </div>
      </motion.div>

      {/* 4 - Qualidade */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
          <FaTools className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Qualidade</h3>
          <p className="text-white text-sm">
            Utilizamos materiais de primeira linha e profissionais altamente qualificados.
          </p>
        </div>
      </motion.div>

      {/* 5 - Inovação */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center">
          <FaLightbulb className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Inovação</h3>
          <p className="text-white text-sm">
            Projetos modernos e soluções criativas para atender cada necessidade.
          </p>
        </div>
      </motion.div>

      {/* 6 - Suporte */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-950 shadow-lg rounded-2xl p-6 flex items-start gap-4 hover:shadow-2xl transition"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
          <FaHeadset className="text-white text-4xl" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-white">Suporte</h3>
          <p className="text-white text-sm">
            Atendimento personalizado antes, durante e após a entrega da obra.
          </p>
        </div>
      </motion.div>
</div>
    </div>
  </div>
</section>




      
<section >
       

        <TextParallaxContent
  imgUrl="/imagens/colocacao-de-telhas-ceramicas-colocar-argamassa-em-um-piso-de-concreto-como-preparacao-para-o-assentamento-de-ladrilhos-brancos.jpg"
  subheading="PORQUE ESCOLHER A JLUIZ CONSTRUÇÃO?"
  heading="AQUI, SEU PROJETO É NOSSO COMPROMISSO."
>
  <div id="Servicos" className="w-full  ">
    {/* Título da seção */}
    <div className="text-center mb-12 ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
        Nossos <span className="text-blue-950">Serviços</span>
      </h2>
    </div>

   {/* Grid responsivo ocupando toda a largura */}
<div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 ">
  {[
    { img: "/imagens/projetos.jpg", title: "Projeto estrutural e fundações" },
    { img: "/imagens/obras.jpg", title: "Execução de Obras" },
    { img: "/imagens/alvenaria.jpg", title: "Alvenaria e montagem de estrutura" },
    { img: "/imagens/acabamento.jpg", title: "Revestimentos e acabamentos" },
    { img: "/imagens/retrato-de-engenheiros-no-local-de-trabalho-durante-o-horario-de-trabalho.jpg", title: "Planejamento e Gestão de Obras" },
    { img: "/imagens/instalacao.jpg", title: "Instalações elétricas, hidráulicas e sanitárias" },
    { img: "/imagens/reforma.jpg", title: "Reformas e Manutenções" },
    { img: "/imagens/Impermeabilização.jpg", title: "Impermeabilização e isolamento" },
  ].map((servico, index) => (
    <div
      key={index}
      className="relative h-80 group overflow-hidden shadow-lg"
    >
      <img
        src={servico.img}
        alt={servico.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{servico.title}</h3>
        <div className="w-16 h-0.5 bg-blue-900 mb-6"></div>
        <button className="px-4 py-2 border border-white text-sm md:text-base rounded-md hover:bg-white hover:text-black transition">
          Saiba mais
        </button>
      </div>
    </div>
  ))}
</div>

    
  </div>
     <div className="w-full flex justify-end mt-10">
 <button
  className="relative inline-flex items-center justify-center px-6 py-3 mt-10
             font-semibold text-white   bg-blue-950 
             rounded-lg shadow-md overflow-hidden group"
  data-aos="fade-up"
  data-aos-delay="400"
  data-aos-duration="1000"
>
  <span className="mr-2 relative z-10">Todos os nossos serviços</span>
  <svg
    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2 relative z-10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1,5 L11,5" stroke="white" strokeWidth="2" />
    <polyline
      points="8 1 12 5 8 9"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
  </svg>

  {/* Efeito Shine */}
  <span
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
               -translate-x-full group-hover:translate-x-full 
               transition-transform duration-700 ease-in-out"
  />
</button>


</div>
  
</TextParallaxContent>
</section>

 {/* Espaçamento extra aumentado entre TextParallax e seção Sobre */}
      <div className="h-40"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-30 pointer-events-none"></div>


      {/* Sobre a empresa*/}

   
          
<section id="Sobre" className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Slide Sobre - marquee */}
    {/* ---------- MARQUEE DE PONTA A PONTA ---------- */}
<div
  className="overflow-hidden whitespace-nowrap py-6 mb-16 relative bg-white"
  data-aos="fade-up"
  data-aos-duration="1000"
  style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}
>
  <div className="marquee-inner animate-scroll-x w-max">
    {Array.from({ length: 10 }).map((_, i) => (
      <React.Fragment key={i}>
        <span className="text-5xl md:text-7xl font-extrabold text-gray-900 uppercase">
          Sobre a 
        </span>
        <span className="text-5xl md:text-7xl text-gray-400 font-light mx-3 text-blue-900 block uppercase">
          JLuiz Construção
        </span>
      </React.Fragment>
    ))}
  </div>
</div>


    {/* conteudo-sobre */}
    <div  className=" bg-white flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24 ">
      {/* left-sobre */}
      <div
        className="w-full lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="mb-10">
          <h1 className="text-4xl md:text-2x1 font-bold mb-4 text-gray-900 text-center">
            Mais do que obras, entregamos realizações. 
          </h1>
          
          <p className=" text-gray-600  text-lg md:text-xl  mb-6 leading-relaxed">
            Somos uma empresa com mais de 30 anos de experiência no setor da construção
              civil, atuando em projetos residenciais e comerciais.
          </p>
          <p className=" text-gray-600 leading-relaxed  mb-8 leading-relaxed">
            Nosso compromisso é entregar qualidade, transparência e inovação em cada
              obra, garantindo que o sonho de nossos clientes seja transformado em
              realidade com segurança e prazo definido.
          </p>

          <h3 className="text-2xl md:text-2x1 font-bold mb-4 text-gray-900 text-center">
            Vamos começar a construir o seu sonho?
          </h3>
           
        </div>

        <div className="flex flex-col space-y-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group text-base font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center w-max"
            >
              {link.name}
              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </div>

      {/* right-sobre */}
      <div
        className="w-full lg:w-1/2 relative flex justify-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src="/imagens/mestre.png"
                alt="Equipe da JLuiz Construção trabalhando"
                className="w-full h-auto  "
              />
              {/* Overlay decorativo */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-400/30 rounded-lg -z-10"></div>
            </div>
            
          </div>


       
      </div>
       
    </div>
    
  </div>
  

</section>



<section className="relative w-full bg-blue-950 py-20 px-6 sm:px-12">

  <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-30 pointer-events-none"></div>
       
        
        

  
  <div
  
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
     
    {/* Título e Descrição */}
<div id="Servicos" className="text-center mb-12 sm:mb-16 mt-16 sm:mt-24 px-4">
  <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-300 mb-3 sm:mb-4 uppercase tracking-wide leading-tight">
    Pronto para transformar seu espaço?
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-white max-w-xl sm:max-w-2xl mx-auto">
    Entre em contato e solicite um orçamento sem compromisso.
  </p>
</div>


    {/* Container */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Card do Formulário */}
      <FormularioHome />

      {/* Informações e CTA */}
      <div
        className="space-y-8"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <div>
          <h4 className="text-3xl font-bold text-gray-300 mb-3">
            Entre em contato direto
          </h4>
          <p className="text-white mb-6">
            Preferir falar direto conosco? Use os canais abaixo:
          </p>

          <ul className="space-y-4">
            <li>
              <a
                href="https://wa.me/5511956576642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                WhatsApp: (55) 11 95657-6642
              </a>
            </li>
            <li>
              <a
                href="mailto:email@seuemail.com.br"
                className="flex items-center gap-3 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                <i className="fa-solid fa-envelope text-2xl"></i>
                jluizcontrucaoereforma@gmail.com
              </a>
            </li>
            
          </ul>
        </div>

        {/* Botão de Ação */}
        <div className="pt-4">
          <a
            href="https://wa.me/5511956576642?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 text-lg"
          >
            💬 Fale conosco pelo WhatsApp
          </a>
        </div>

        
      </div>
    </div>
  </div>
      </section> 




      </div>

      

      
    
  );
};

export default Home;

/* -------------------- COMPONENTES -------------------- */

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[110vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

/* -------------------- CONTADOR + DIFERENCIAIS -------------------- */

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 segundos
    const incrementTime = Math.floor(duration / end);

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.span
        className="text-5xl sm:text-6xl font-bold text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {count}+
      </motion.span>
      <p className="text-gray-700 font-medium text-sm sm:text-base mt-2">
        {label}
      </p>
    </div>
  );
};

const Diferenciais = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 flex flex-col items-center justify-center">
      {/* Contadores */}
      <div className="flex flex-wrap justify-center items-center text-center gap-6 sm:gap-10 mt-10">
  <div className="flex flex-col items-center">
    <h2 className="text-3xl sm:text-5xl font-bold">30+</h2>
    <p className="text-sm sm:text-base mt-1">Anos de Experiência</p>
  </div>

  <div className="flex flex-col items-center">
    <h2 className="text-3xl sm:text-5xl font-bold">1200+</h2>
    <p className="text-sm sm:text-base mt-1">Obras Concluídas</p>
  </div>

  <div className="flex flex-col items-center">
    <h2 className="text-3xl sm:text-5xl font-bold">550+</h2>
    <p className="text-sm sm:text-base mt-1">Clientes Satisfeitos</p>
  </div>
</div>

    </section>
  );
};
