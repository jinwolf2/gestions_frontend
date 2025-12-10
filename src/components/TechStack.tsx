import { 
  IoLogoVercel, 
  IoColorPaletteOutline, 
  IoLogoNodejs, 
  IoLeafOutline, 
  IoThunderstormOutline 
} from "react-icons/io5";

export default function TechStack() {
  // Clases comunes para los items en modo móvil vs escritorio
  const itemClasses = "flex items-center justify-center gap-2 border border-gray-100 bg-gray-50 py-3 rounded md:bg-transparent md:border-none md:p-0 md:rounded-none transition-colors hover:border-gray-300 md:hover:text-g-black cursor-default";

  return (
    <div className="border-b border-gray-200 bg-white py-6 md:py-4">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* LAYOUT RESPONSIVE:
          - Mobile: grid-cols-2 (Cuadrícula)
          - Desktop (md): flex row (Fila continua)
        */}
        <div className="grid grid-cols-2 gap-3 md:flex md:justify-center md:items-center md:gap-12 text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest">
            
            {/* Item 1: Next.js */}
            <div className={itemClasses}>
                <IoLogoVercel className="text-g-black text-base" /> 
                <span className="font-bold text-g-black md:font-normal md:text-gray-500">Next.js</span>
            </div>
            
            <span className="hidden md:block text-gray-300">/</span>

            {/* Item 2: Tailwind */}
            <div className={itemClasses}>
                <IoColorPaletteOutline className="text-base" /> 
                <span>Tailwind</span>
            </div>

            <span className="hidden md:block text-gray-300">/</span>

            {/* Item 3: Express */}
            <div className={itemClasses}>
                <IoLogoNodejs className="text-base" /> 
                <span>Express</span>
            </div>

            <span className="hidden md:block text-gray-300">/</span>

            {/* Item 4: Spring Boot */}
            <div className={itemClasses}>
                <IoLeafOutline className="text-base" /> 
                <span>Spring</span>
            </div>

            <span className="hidden md:block text-gray-300">/</span>

            {/* Item 5: Supabase */}
            {/* 'col-span-2' hace que ocupe todo el ancho en móvil para centrarse abajo */}
            <div className={`col-span-2 md:col-span-1 ${itemClasses}`}>
                <IoThunderstormOutline className="text-base" /> 
                <span>Supabase</span>
            </div>

        </div>
      </div>
    </div>
  );
}