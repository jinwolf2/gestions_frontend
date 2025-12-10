import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-20 px-6 border-b border-gray-200 overflow-hidden">
      {/* Fondo de cuadrícula técnica (definido en globals.css) */}
      <div className="absolute inset-0 z-0 tech-grid pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto e Impacto */}
        <div>
          {/* Badge de Estado */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-g-black text-white text-[10px] uppercase font-mono tracking-widest mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Systems Operational
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-g-black">
            NEXT GEN<br />SOFTWARE.
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
            Consultora de ingeniería de software full-cycle. Especialistas en arquitecturas escalables y alto rendimiento.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#form-section" className="btn-industrial w-full sm:w-fit">
              Solicitar Presupuesto <IoArrowDownOutline />
            </Link>
          </div>
        </div>

        {/* COLUMNA DERECHA: Code Snippet Visual */}
        {/* Hidden md:block -> Oculto en móvil para no saturar, visible en desktop */}
        <div className="hidden md:block bg-[#1a1a1a] text-gray-300 font-mono text-xs p-6 rounded shadow-2xl opacity-90 leading-relaxed border border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
          
          {/* Botones de ventana (Mac style) */}
          <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Contenido del Código */}
          <div>
            <p>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">gestionsStack</span> = {"{"}
            </p>
            <p className="pl-4">
              frontend: [<span className="text-green-300">'Next.js 14'</span>,{" "}
              <span className="text-green-300">'Tailwind CSS'</span>],
            </p>
            <p className="pl-4">
              backend: [<span className="text-green-300">'NodeJS Express'</span>,{" "}
              <span className="text-green-300">'Java Spring Boot'</span>],
            </p>
            <p className="pl-4">
              db: <span className="text-yellow-200">'Supabase (PostgreSQL)'</span>,
            </p>
            <p className="pl-4">
              payments: <span className="text-yellow-200">'Stripe Connect'</span>,
            </p>
            <p className="pl-4">
              location: <span className="text-yellow-200">'Estonia (EU)'</span>
            </p>
            <p>{"}"}</p>
            
            <p className="mt-4 text-gray-500">// Waiting for client input...</p>
            
            {/* Cursor parpadeante */}
            <span className="animate-pulse text-green-500 font-bold">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}