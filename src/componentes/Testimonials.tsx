export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <h3 className="text-3xl font-bold text-center mb-10">Depoimentos</h3>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="p-6 bg-white shadow rounded-lg">
          <p className="text-gray-700 italic">
            “Minha empresa começou a converter muito mais depois da landing page.
            Super recomendo!”
          </p>
          <p className="mt-4 font-semibold">— Cliente Satisfeito</p>
        </div>

        <div className="p-6 bg-white shadow rounded-lg">
          <p className="text-gray-700 italic">
            “Rápida, profissional e muito bonita. Ajudou muito no tráfego.”
          </p>
          <p className="mt-4 font-semibold">— Cliente Premium</p>
        </div>
      </div>
    </section>
  );
}