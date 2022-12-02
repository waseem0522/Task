// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lato: "Lato",
                "josefin-sans": "'Josefin Sans'",
                roboto: "Roboto",
            },
        },
        colors: {
            white: "#fff",
            brown: "#fb2e86",
            indigo: {
                "100": "#3f509e",
                "200": "#151875",
                "300": "#101750",
                "400": "#0d0e43",
            },
            gray: {
                "100": "#f6f7fb",
                "200": "#ebf4f3",
                "300": "#eeeffb",
                "400": "#e7e4f8",
                "500": "#9da0ae",
                "600": "#8a8fb9",
            },
            black: "#000",
        },
        fontSize: { xs: "12px", sm: "14px", base: "16px", lg: "18px", xl: "22px" },
    },
    corePlugins: { preflight: false },
};