/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1700px',
        },
        colors: {
            darkgray: '#191919',
            superlightgray: '#D9D9D9',
            text: '#7B7B7B',
            white: '#fff',
        },
        fontFamily: {
            primary: ['Montserrat', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
