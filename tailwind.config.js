/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
      extend: {
          fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
              brand: {
                  50: '#f8fafc',
                  100: '#f1f5f9',
                  500: '#64748b',
                  800: '#1e293b',
                  900: '#0f172a',
              }
          },
          animation: {
              'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              'blob': 'blob 7s infinite',
          },
          keyframes: {
              fadeInUp: {
                  '0%': { opacity: '0', transform: 'translateY(20px)' },
                  '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              blob: {
                  '0%': { transform: 'translate(0px, 0px) scale(1)' },
                  '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                  '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                  '100%': { transform: 'translate(0px, 0px) scale(1)' },
              }
          }
      }
  },
  plugins: [],
}
