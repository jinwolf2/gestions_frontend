import { 
  IoGridOutline, 
  IoLayersOutline, 
  IoCodeSlashOutline, 
  IoServerOutline, 
  IoCubeOutline 
} from "react-icons/io5";

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DE LA SECCIÓN */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-g-black">
              CAPACIDADES
            </h2>
            <p className="font-mono text-gray-500 text-sm">MODULE_LIST_V2.0</p>
          </div>
          <IoGridOutline className="text-3xl text-gray-300" />
        </div>

        {/* BENTO GRID LAYOUT */}
        {/* En móvil: columnas automáticas. En desktop: altura fija de 600px para cuadrar el grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* CARD 1: PRINCIPAL (Frontend) - Ocupa 2 columnas y 2 filas */}
          <div className="bento-card md:col-span-2 md:row-span-2 corner-marker h-full">
            {/* Decoración de fondo */}
            <div className="absolute top-4 right-4 text-4xl text-gray-100 -z-0">
              <IoLayersOutline />
            </div>
            
            {/* Contenido Principal */}
            <div className="relative z-10">
              <div className="w-10 h-10 bg-g-black text-white flex items-center justify-center mb-6">
                <IoCodeSlashOutline className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-g-black">Frontend Moderno & Reactivo</h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Desarrollo de interfaces de alto impacto utilizando <strong>Next.js</strong> para el mejor SEO y rendimiento. 
                Estilizado con la precisión de <strong>Tailwind CSS</strong>. Creamos SPAs (Single Page Applications) que se sienten instantáneas.
              </p>
            </div>

            {/* Footer de la tarjeta (Tags) */}
            <div className="relative z-10 mt-8 pt-8 border-t border-gray-100 flex gap-4 font-mono text-xs text-gray-400 flex-wrap">
              <span>&gt; SSR / CSR</span>
              <span>&gt; RESPONSIVE</span>
              <span>&gt; TYPESCRIPT</span>
            </div>
          </div>

          {/* CARD 2: BACKEND (Pequeña) */}
          <div className="bento-card group h-full hover:border-blue-600 transition-colors">
            <h3 className="text-lg font-bold flex items-center gap-2 text-g-black">
              <IoServerOutline className="text-blue-600" /> Backend Híbrido
            </h3>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              Flexibilidad con <strong>Node.js Express</strong> para MVPs rápidos, o robustez empresarial con <strong>Java Spring Boot</strong> para microservicios complejos.
            </p>
          </div>

          {/* CARD 3: INFRAESTRUCTURA (Pequeña - Estilo Oscuro) */}
          {/* Sobreescribimos el fondo blanco por defecto con bg-g-black */}
          <div className="bento-card bg-g-black text-white border-g-black h-full">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <IoCubeOutline className="text-green-400" /> Infraestructura
            </h3>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Bases de datos PostgreSQL gestionadas vía Supabase y pasarelas de pago seguras con Stripe Connect.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}