import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        <div className="mb-5">
          <img
            src="public/imagens/Dft 4.png"
            alt="DFT Logística"
            className="object-contain w-[260px] md:w-[100px] lg:w-[200px]"
          />
        </div>

        <p className="text-center text-gray-700 text-sm">
          © Todos os direitos reservados | {new Date().getFullYear()} | DFT
          Logística | Desenvolvido por{" "}
          <a
            href="https://mepro.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0e1b93] font-semibold hover:underline"
          >
            Agência MEPRO
          </a>
        </p>
      </div>
    </footer>
  );
}
