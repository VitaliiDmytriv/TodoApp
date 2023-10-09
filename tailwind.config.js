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
                lightTxtBase: "rgb(71, 85, 105)",

                darkBase: "rgb(15, 23, 42)",
                darkSecond: "rgb(20, 30, 51)",
                darkPurple: "rgb(124, 58, 237)",
                darkTxtBase: "rgb(148, 163, 184)",
            },
            gridTemplateColumns: {
                "3-custom": "13.515625% 1fr 13.515625%",
                "header-3x": "1fr 0.5fr 1fr",
                "header-4x": "auto 1fr 1fr 1fr",
            },
        },

        screens: {
            sm: "40rem",
            tablet: "48rem",
            desktop: "80rem",
        },
    },
    plugins: [],
    darkMode: "class",
};
