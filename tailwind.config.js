/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#0B7A5A",     // Verde exato da letra "A" da logo MA
        brand: "#0E966E",      // Verde vibrante de apoio
        mint: "#E6F4F0",       // Verde pastel suave
        ink: "#1E1E1E",        // Preto da letra "M" da logo MA
        canvas: "#F8FAF9",     // Branco off-white limpo
        paper: "#FFFFFF",      // Branco puro
        onyx: "#0C100E",       // Preto profundo do rodapé
        mercury: "#6B7280",    // Cinza neutro suave
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      borderRadius: {
        '80': '80px',
        '100': '100px',
      }
    },
  },
  plugins: [],
};
