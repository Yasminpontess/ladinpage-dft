import React, { useState, useEffect } from "react";
import { Car, Mail, Phone, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Formulario() {
  const [loading, setLoading] = useState(false); // 🔥 loading

  const [form, setForm] = useState({
    nome: "",
    nomeempresa: "",
    whatsapp: "",
    segmento: "",
    cnpj: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatWhatsApp = (value: string): string => {
    return value.replace(/\D/g, "").slice(0, 11);
  };

  const validarCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cnpj)) return false;

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== Number(digitos.charAt(0))) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += Number(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    return resultado === Number(digitos.charAt(1));
  };

  const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
};

useEffect(() => {
  const utms = getUTMParams();

  if (utms.utm_source) {
    localStorage.setItem("utm_source", utms.utm_source);
    localStorage.setItem("utm_medium", utms.utm_medium);
    localStorage.setItem("utm_campaign", utms.utm_campaign);
  }
}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const saved_utm_source = localStorage.getItem("utm_source");
const saved_utm_medium = localStorage.getItem("utm_medium");
const saved_utm_campaign = localStorage.getItem("utm_campaign");

let origem = "direto";
let meio = "none";

const referrer = document.referrer;

if (referrer.includes("google")) {
  origem = "google_orgânico";
  meio = "organic";
} else if (referrer.includes("instagram")) {
  origem = "instagram_orgânico";
  meio = "social";
} else if (referrer.includes("facebook")) {
  origem = "facebook_orgânico";
  meio = "social";
}

const utm_source = saved_utm_source || origem;
const utm_medium = saved_utm_medium || meio;
const utm_campaign = saved_utm_campaign || "none";

    if (
      !form.nome ||
      !form.nomeempresa ||
      !form.whatsapp ||
      !form.segmento ||
      !form.cnpj ||
      !form.email
    ) {
      Swal.fire({
        title: "Preencha todos os campos",
        text: "Todos os campos são obrigatórios.",
        icon: "warning",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    if (!validarCNPJ(form.cnpj)) {
      Swal.fire({
        title: "CNPJ inválido",
        text: "Digite um CNPJ válido.",
        icon: "error",
        confirmButtonColor: "#dc2626",
      });
      return;
    }

    setLoading(true); // 🔥 começa loading

    emailjs
      .send(
        "service_a7igk3f",
        "template_ccfulqs",
        {
  nome: form.nome,
  nomeempresa: form.nomeempresa,
  whatsapp: form.whatsapp,
  segmento: form.segmento,
  cnpj: form.cnpj,
  email: form.email,

  utm_source: utm_source,
  utm_medium: utm_medium,
  utm_campaign: utm_campaign,
},
        "WuhAel_XHW7IaN3eQ"
      )
      .then(() => {
        setLoading(false); // 🔥 para loading

        Swal.fire({
          title: "Solicitação enviada com sucesso!",
          html: `Em breve, nosso time comercial entrará <br/>em contato com você.<br/><br/>
                 Enquanto isso, que tal conhecer mais sobre a DFT?`,
          icon: "success",
          confirmButtonText: "Ir para Instagram",
          confirmButtonColor: "#E1306C",
        }).then(() => {
          window.open("https://www.instagram.com/dftlogistica/", "_blank");
        });
      })
      .catch((err) => {
        setLoading(false);

        Swal.fire({
          title: "Erro ao enviar",
          text: "Tente novamente em instantes.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#dc2626",
        });

        console.error(err);
      });
  };

  return (
    <div className="relative w-full ">
      <section id="formulario" className="w-screen flex justify-center items-center py-10  bg-white">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">

          {/* LADO ESQUERDO */}
          <div className="inline-block text-center md:text-left">
            <h2 className="text-[40px] md:text-[50px] font-semibold text-[#2621BF] leading-tight">
              Solicite sua<br />
              <span className="font-extrabold text-[45px] md:text-[50px] leading-[0.9] bg-gradient-to-r from-[#2621BF] via-[#501F70] to-[#F20505] text-transparent bg-clip-text">
                Proposta
              </span>
              <br />
              <span className="font-extrabold text-[45px] md:text-[50px] leading-[0.9] bg-gradient-to-r from-[#2621BF] via-[#501F70] to-[#F20505] text-transparent bg-clip-text">
                Personalizada
              </span>
            </h2>

            <div className="w-[250px] h-[4px] bg-red-600 mt-2 mx-auto md:mx-0"></div>

            <p className="mt-5 text-[#2621BF] text-[20px] max-w-sm font-[500] leading-relaxed mx-auto md:mx-0">
              Temos um time de especialistas<br />
              prontos para te entender e atender<br />
              a sua demanda.
            </p>

            <div className="mt-4 space-y-2 text-sm mx-auto md:mx-0 hidden md:block">
              <p className="flex items-center gap-2 text-[#2621BF] justify-center text-[18px] md:justify-start">
                <Mail size={20} className="text-red-600 " /> comercial3@dftlogistica.com.br
              </p>
              <p className="flex items-center gap-2 text-[#2621BF] justify-center text-[18px] md:justify-start">
                <Phone size={20} className="text-red-600" /> (11) 4159-3558
              </p>
              <p className="flex items-center gap-2 text-[#2621BF] justify-center text-[18px] md:justify-start">
                <PhoneCall size={20} className="text-red-600" /> (11) 91585-5163
              </p>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <input name="nome" required type="text" placeholder="Digite o seu nome " value={form.nome} onChange={handleChange} className="w-full bg-gray-200 px-4 py-3 rounded-lg" />

            <input name="whatsapp" required type="text" placeholder="Seu WhatsApp" value={form.whatsapp}
              onChange={(e) =>
                setForm({ ...form, whatsapp: formatWhatsApp(e.target.value) })
              }
              className="w-full bg-gray-200 px-4 py-3 rounded-lg"
            />

            <input name="nomeempresa" required type="text" placeholder="Digite o nome da empresa" value={form.nomeempresa} onChange={handleChange} className="w-full bg-gray-200 px-4 py-3 rounded-lg" />

            <input name="cnpj" required type="text" placeholder="Digite o CNPJ" value={form.cnpj} onChange={handleChange} className="w-full bg-gray-200 px-4 py-3 rounded-lg" />

            <input name="email" required type="email" placeholder="Digite o seu email" value={form.email} onChange={handleChange} className="w-full bg-gray-200 px-4 py-3 rounded-lg" />

            <select name="segmento" value={form.segmento} onChange={handleChange} className="w-full bg-gray-200 px-4 py-3 rounded-lg">
              <option value="">Segmento</option>
              <option>Eletronicos</option>
              <option>Cosméticos</option>
              <option>Alimentos e Bebidas</option>
              <option>Têxtil</option>
              <option>Agronegocio</option>
              <option>Correlatos</option>
              <option>Saneantes</option>
              <option>Outros</option>
            </select>

            {/* 🔥 BOTÃO COM LOADING */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[#3636c9] to-red-600 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Enviando...
                </>
              ) : (
                "SOLICITAR ORÇAMENTO ➤"
              )}
            </button>

            {/* 🔥 PARTE QUE VOCÊ DISSE QUE FALTOU (MANTIDA) */}
            <div className="mt-4 space-y-2 text-sm mx-auto md:mx-0 block md:hidden">
              <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
                <Mail size={20} className="text-red-600" />
                comercial3@dftlogistica.com.br
              </p>

              <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
                <Phone size={20} className="text-red-600" />
                (11) 4159-3558
              </p>

              <p className="flex items-center gap-2 text-[#2621BF] justify-center md:justify-start">
                <PhoneCall size={20} className="text-red-600" />
                (11) 91585-5163
              </p>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}