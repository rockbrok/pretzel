module.exports = {
  content: [
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screen: {
      'xs': '300px',
      'sm': '428px',
      'md': '640px',
      'lg': '768px',
      'xl': '976px',
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    extend: {
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}