export default function CTA() {
  return (
    <section id="cta" className="px-6 py-20 bg-blue-600 text-white text-center">
      <h3 className="text-3xl font-bold mb-6">
        Pronto para transformar seus resultados?
      </h3>

      <a
        href="https://api.whatsapp.com/send?phone=5511999999999"
        target="_blank"
        className="bg-white text-blue-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
}