/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff5252',
        secondary: '#FF3D00',
        light: '#F5F5F5',
        dark: '#212121',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#BDBDBD',
      },
      backgroundColor:{
        primary: '#ff5252',
        secondary: '#FF3D00',
        light: '#F5F5F5',
        dark: '#212121',
        white: '#FFFFFF',
        black: '#000000',
        gray: '#BDBDBD',
      },
    },
  },
  plugins: [],
}

