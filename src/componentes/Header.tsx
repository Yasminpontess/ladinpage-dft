export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50 shadow">
      <h1 className="text-2xl font-bold">SuaMarca</h1>

      <a
        href="#cta"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Começar Agora
      </a>
    </header>
  );
}