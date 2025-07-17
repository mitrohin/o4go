/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        tablet: '850px',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poiret: ["Poiret One", "cursive"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: '#a3c957', // основной зелёный
        bg: '#fffefb', // фон
        accent: '#f7f6f2', // светлый акцент
        gray: '#d9d9d9', // светло-серый (кнопки, бордеры)
        dark: '#222', // тёмный текст
        muted: '#888', // приглушённый текст
        black: '#000',
        border: '#e5e5e5',
        white: '#fff',
        // дополнительные из макета
        fmdYellow: '#f7e9a0',
        fmdGreen: '#b6d7a8',
        fmdPink: '#f7c6c7',
      },
      borderRadius: {
        'xl': '24.5px', // для кнопок и карточек
        'full': '9999px',
      },
      opacity: {
        70: '0.7',
        80: '0.8',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['32px', '40px'],
        '3xl': ['40px', '48px'],
        '4xl': ['64px', '72px'],
        huge: ['101px', '110px'],
      },
      letterSpacing: {
        wide: '0.48px',
        wider: '0.8px',
      },
      lineHeight: {
        normal: 'normal',
        tight: '1',
        snug: '1.1',
        relaxed: '1.5',
        loose: '2',
        zero: '0',
      },
    },
  },
  plugins: [],
}

