import { FaEnvelope,  FaInstagram, FaWhatsapp } from "react-icons/fa";
import {  FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full ">
      {/* Conteúdo principal */}
      <div className="max-w-[1440px] bg-white text-blue-950 w-full mx-auto flex flex-col items-center md:flex-row justify-between items-center gap-10 md:gap-0 px-6 py-10">
        {/* Logo e descrição */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center">
          <img
            src="/imagens/logo nav.png"
            alt="Logo"
            className="h-30 mb-4"
          />
          <p className="text-sm text-black font-bold  max-w-sm">
            Mais do que construir obras, construímos histórias. <br />
            Aqui na JLuiz Construção cada projeto é pensado para refletir o seu sonho, com segurança, transparência e dedicação em cada detalhe.
          </p>
        </div>

        {/* Companhia */}
        <div className="w-full md:w-1/3 flex justify-center text-sm">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Companhia</h3>
            <a
              href="#Sobre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors  text-black  font-bold duration-300"
            >
              Sobre nós
            </a>
            <a
              href="https://linktr.ee/linkedingrupo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors  text-black font-bold duration-300"
            >
              Contatos
            </a>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="w-full md:w-1/3  ">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaWhatsapp /> <a href="https://wa.me/5511956576642" className="hover:text-blue-400">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> <a href="https://www.instagram.com/jluizconstrucao?igsh=MTZyc3RjZjB5YzEwbQ==" className="hover:text-blue-400">Instagram</a>
            </li>
            
            <li className="flex items-center gap-2">
              <FaFacebook /> <a href="https://www.facebook.com/share/1KWBpcHatR/" className="hover:text-blue-400">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="jluizcontrucaoereforma@gmail.com" className="hover:text-blue-400">E-Mail</a>
            </li>
            
          </ul>
        </div>
      </div>

      {/* Créditos - agora fora do flex principal */}
      <div className="mt-10 bg-white text-black text-center border-t border-gray-700 pt-6 flex justify-center items-center py-4">
        <div className="max-w-[1440px] w-full flex justify-center px-4 sm:px-6">
          {/* Logo e texto lado a lado no desktop, empilhados no mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-x-4 text-center sm:text-left">
            <img
              src="/imagens/Logo yasmin branca.png"
              alt="Logo Yasmin"
              className="h-10 sm:h-14"
            />
            <h1 className="text-xs sm:text-sm md:text-base">
              JLUIZ CONSTRUÇÃO & REFORMA © Todos os direitos reservados | Desenvolvido
              por Yasmin Pontes - Desenvolvedora Web
            </h1>
          </div>
          </div>
          </div>
    </footer>
  );
}

export default Footer;
