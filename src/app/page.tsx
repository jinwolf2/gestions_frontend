import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] selection:bg-black selection:text-white">
      {/* 1. Barra de Navegación (Sticky) */}
      <Navbar />
      
      {/* 2. Sección Principal (Hero) */}
      <Hero />
      
      {/* 3. Cinta de Tecnologías (Grid en móvil / Ticker en Desktop) */}
      <TechStack />
      
      {/* 4. Bento Grid de Servicios */}
      <Services />
      
      {/* 5. Formulario de Contacto (Panel de Control) */}
      <ContactForm />
      
      {/* 6. Pie de página */}
      <Footer />
    </main>
  );
}