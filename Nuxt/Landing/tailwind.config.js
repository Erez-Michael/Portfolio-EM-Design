export const content = [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
];
export const darkMode = "class";
export const theme = {
    fontFamily: {
        sora: ["Sora", "sans-serif"],
    },
    container: {
        center: true,
        padding: "1rem",
    },
    extend: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            purple: "#994FF5",
            warning: "#FFC41F",
            light: "#F8F7F6",
            dark: "#050C17",
            gray: "#7780A1",
            white: "#FFFFFF",
        },

        backgroundSize: {
            'auto-25': 'auto 25%',
            'auto-50': 'auto 50%',
            'auto-65': 'auto 65%',
            'auto-75': 'auto 75%',
            'auto-125': 'auto 125%',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};

