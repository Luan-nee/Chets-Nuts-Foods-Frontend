/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === 1. COLORES BASE ===
        'base-dark': '#0d1527',       // Fondo Principal (Negro Profundo)
        'surface-dark': '#1E1E1E',    // Fondo de Tarjetas/Contenedores
        'surface-medium': '#252525',  // Fondo para campos de entrada o barras
        
        // === 2. TEXTO ===
        'text-primary': '#E0E0E0',    // Texto Principal (Blanco Suave)
        'text-secondary': '#A0A0A0',  // Texto Secundario (para descripciones, etc.)
        'text-danger': '#D50000',     // Texto para anunciar peligros o errores
        'text-warning': '#f5ff2c',    // Texto para enunciar riesgos o advertir de un susceso
        
        // === 3. ACENTOS Y FUNCIONALES ===
        'accent-primary': '#00C4FF',  // Para elementos activos y números importantes
        
        // === 4. FONDO DE COMPONENTES
        'metricCard-dark': '#1E1E1E',

        // Colores para definir los estados
        'status-success': '#69F0AE',  // Verde para Crecimiento
        'status-warning': '#f5ff2c',  // Amarillo para Advertencia
        'status-danger': '#D50000',   // Rojo para peligro
      },
      // Si quieres que la sombra de tu acento principal brille:
      boxShadow: {
        'neon-accent': '0 0 10px rgba(0, 196, 255, 0.5), 0 0 20px rgba(0, 196, 255, 0.2)',
      }
    },
  },
  plugins: [],
}