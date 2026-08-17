import React from "react";
import emailjs from "@emailjs/browser";

export default function FormularioTeste() {
  const testeEmailJS = () => {
    emailjs.send(
      "service_g5pxffn",
      "template_x4o5fmx",
      {
        nome: "Teste",
        email: "teste@teste.com",
        whatsapp: "5511999999999",
        cnpj: "12345678000100",
        segmento: "Eletronicos"
      },
      "sW9hE_3Tpoo8BFU56"
    )
    .then(() => {
      alert("Email enviado com sucesso!");
    })
    .catch((err) => {
      alert("Erro ao enviar email. Veja console.");
      console.error(err);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Teste EmailJS</h1>
      <button
        onClick={testeEmailJS}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Enviar Email de Teste
      </button>
    </div>
  );
}
