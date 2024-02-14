/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        screens: {
            xsm: "320px",
            sm: "520px",
            md: "720px",
            lg: "960px",
            xl: "1140px",
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                xl: "1200px",
            },
        },
        extend: {
          colors: {
            primary: "#14203E",
            secondary: "#F6F0E8",
          },
          fontFamily: {
            primary: ['IBM Plex Sans', 'Arial', 'Tahoma', 'sans-serif'],
        }
        }
    },
    plugins: [],
};
