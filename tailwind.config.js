/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        'primary-light': '#6366F1',
        'primary-dark': '#4338CA',
        secondary: '#14B8A6',
        'secondary-light': '#2DD4BF',
        'secondary-dark': '#0D9488',
        accent: '#F472B6',
        'accent-light': '#F9A8D4',
        'accent-dark': '#EC4899',
        neutral: '#6B7280',
        'neutral-light': '#9CA3AF',
        'neutral-dark': '#374151',
        background: '#F9FAFB',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
