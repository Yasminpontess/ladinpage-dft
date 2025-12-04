export default function Benefits() {
  const items = [
    "Carregamento super rápido",
    "Layout profissional e responsivo",
    "Pronta para tráfego pago",
    "Focada totalmente em conversão",
  ];

  return (
    <section className="px-6 py-20 bg-gray-100">
      <h3 className="text-3xl font-bold text-center mb-10">
        Por que escolher nossa landing page?
      </h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div
            className="p-6 bg-white shadow rounded-lg text-center text-lg font-medium"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}