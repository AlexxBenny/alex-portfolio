/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        background: "#050508", // Very dark deep space blue
        surface: "rgba(10, 10, 16, 0.6)", // Glassy panel background
        border: "rgba(255, 255, 255, 0.08)",
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald for active/success states
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          DEFAULT: "#0ea5e9", // Sky blue for glows
          purple: "#a855f7", // Purple nebula 
          cyan: "#22d3ee",
        }
      },
      boxShadow: {
        "soft-glow": "0 0 40px rgba(14, 165, 233, 0.25)",
        "cyan-glow": "0 0 30px rgba(34, 211, 238, 0.3)",
        "purple-glow": "0 0 30px rgba(168, 85, 247, 0.25)",
        "emerald-glow": "0 0 20px rgba(16, 185, 129, 0.4)",
        "glass": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
};

