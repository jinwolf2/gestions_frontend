export default function Footer() {
  return (
    <footer className="bg-g-black text-white py-12 font-mono text-xs border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Lado Izquierdo: Estado de la empresa */}
        <div className="flex items-center gap-2">
          {/* El punto verde parpadeante "System Online" */}
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="tracking-widest uppercase">GESTIONS OÜ (EN TRÁMITE)</span>
        </div>
        
        {/* Lado Derecho: Ubicación y Copyright dinámico */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-gray-500 uppercase tracking-wider">
          <span>TALLINN, ESTONIA 🇪🇪</span>
          <span>COPYRIGHT {new Date().getFullYear()}</span>
        </div>
        
      </div>
    </footer>
  );
}