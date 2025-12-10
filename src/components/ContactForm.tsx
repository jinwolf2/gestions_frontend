"use client";

import { useState } from "react";
import { 
  IoMailOutline, 
  IoTimeOutline, 
  IoSendOutline, 
  IoCheckmarkCircleOutline, 
  IoAlertCircleOutline,
  IoReloadOutline 
} from "react-icons/io5";

export default function ContactForm() {
  // Estado para controlar la UI del botón (idle, cargando, éxito, error)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Detectar idioma del navegador (ej: 'es-ES' -> 'es')
    // Si falla, por defecto 'en' (backend lo maneja).
    const userLocale = typeof navigator !== 'undefined' 
      ? navigator.language.split('-')[0] 
      : 'en';

    // Objeto Payload
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      requestType: formData.get("requestType"),
      message: formData.get("message"),
      locale: userLocale 
    };

    try {
      // Conexión con tu Backend (Asegúrate de que esté corriendo en el puerto 3001)
      const response = await fetch("http://mailto.gestions.es/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // Limpiar el formulario visualmente
        
        // Volver al estado inicial después de 5 segundos para permitir otro envío
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setStatus("error");
    }
  };

  return (
    <section id="form-section" className="py-16 md:py-24 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
        
        {/* COLUMNA IZQUIERDA: Información */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-g-black">
            INICIAR<br />PROTOCOLO.
          </h2>
          <p className="text-gray-600 mb-8 font-mono text-sm leading-relaxed">
            Completa los parámetros del proyecto. Analizaremos la viabilidad técnica y responderemos con una propuesta de arquitectura y presupuesto.
          </p>
          
          <div className="space-y-4 font-mono text-xs text-gray-500">
            <div className="flex items-center gap-3">
              <IoMailOutline className="text-lg text-g-black" />
              <a href="mailto:info@gestions.es" className="hover:text-g-black transition-colors underline decoration-dotted underline-offset-4">
                info@gestions.es
              </a>
            </div>
            <div className="flex items-center gap-3">
              <IoTimeOutline className="text-lg text-g-black" />
              <span>Respuesta estimada: &lt; 24h</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Fila 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
                Nombre / Empresa
              </label>
              <input 
                name="name" // NECESARIO para FormData
                type="text" 
                placeholder="Gestions Inc." 
                className="input-tech" 
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
                Email Corporativo
              </label>
              <input 
                name="email" // NECESARIO para FormData
                type="email" 
                placeholder="hola@empresa.com" 
                className="input-tech" 
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>
          </div>

          {/* Fila 2: Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
              Tipo de Solicitud
            </label>
            <div className="relative">
              <select 
                name="requestType" // NECESARIO para FormData
                className="select-tech" 
                defaultValue="" 
                required
                disabled={status === "loading" || status === "success"}
              >
                <option value="" disabled>Seleccionar opción...</option>
                <option value="presupuesto">Realizar Presupuesto / Proyecto Nuevo</option>
                <option value="consultoria">Consultoría Técnica / Auditoría</option>
                <option value="mantenimiento">Mantenimiento de App existente</option>
                <option value="backend">Desarrollo Backend (API/DB)</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          {/* Fila 3: Mensaje */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
              Detalles Técnicos
            </label>
            <textarea 
              name="message" // NECESARIO para FormData
              rows={4} 
              placeholder="Describe brevemente el alcance del proyecto..." 
              className="input-tech resize-none"
              required
              disabled={status === "loading" || status === "success"}
            ></textarea>
          </div>

          {/* Botón de Envío con Lógica de Estado */}
          <button 
            type="submit" 
            disabled={status === "loading" || status === "success"}
            className={`btn-industrial w-full transition-all duration-300 ${
                status === "success" ? "bg-green-600 border-green-600 text-white hover:bg-green-700 hover:text-white" : 
                status === "error" ? "bg-red-600 border-red-600 text-white hover:bg-red-700 hover:text-white" : ""
            }`}
          >
            {/* Estado IDLE (Normal) */}
            {status === "idle" && (
                <span className="flex items-center gap-2">
                    Enviar Datos <IoSendOutline />
                </span>
            )}

            {/* Estado LOADING */}
            {status === "loading" && (
                <span className="flex items-center gap-2 animate-pulse">
                    <IoReloadOutline className="animate-spin" /> Procesando...
                </span>
            )}

            {/* Estado SUCCESS */}
            {status === "success" && (
                <span className="flex items-center gap-2">
                    Datos Enviados <IoCheckmarkCircleOutline className="text-lg" />
                </span>
            )}

            {/* Estado ERROR */}
            {status === "error" && (
                <span className="flex items-center gap-2">
                    Error de Conexión <IoAlertCircleOutline className="text-lg" />
                </span>
            )}
          </button>
          
          <p className="text-[10px] text-gray-400 font-mono text-center pt-2">
            *Tus datos serán procesados bajo la normativa GDPR (Estonia/EU).
          </p>
        </form>

      </div>
    </section>
  );
}