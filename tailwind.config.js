/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            xs: '576px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1700px',
        },
        colors: {
            'blue': '#2596be',
            'greySuperLight': '#eeeee4',
            'black': '#21130d'
        },
        fontFamily: {
            'primary': ['Montserrat', 'sans-serif']
        },
        extend: {},
    },
    plugins: [

    ],
}
