/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            width: {
                "200px": "15rem",
                "13%": "13.515625%",
            },
            colors: {
                lightBase: "rgb(226, 232, 240)",
                lightSecond: "rgb(241, 245, 249)",
                lightPurple: "rgb(91, 33, 182)",
                darkBase: "rgb(15, 23, 42)",
                darkSecond: "rgb(20, 30, 51)",
                darkPurple: "rgb(124, 58, 237)",
            },
            gridTemplateColumns: {
                "3-custom": "13.515625% 1fr 13.515625%",
            },
        },

        screens: {
            tablet: "48rem",
            desktop: "80rem",
        },
    },
    plugins: [],
    darkMode: "class",
};
