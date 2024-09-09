export const content = [
    "./components/**/*.{js,vue,ts}",
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
            yellow: "#FFC41F",
            light: "#F8F7F6",
            dark: "#050C17",
            gray: "#7780A1",
            white: "#FFFFFF",
            primary: {
                white: "#FFFFFF",
                gray1: "#D3D3D3",
                gray2: "#A9A9A9",
                gray3: "#696969",
                gray: "#7780A1",
                blue: "#3BA5BE",
                blue2: "#22464b",
                green: "#203a3a",
                green2:"#61a93a",
                yellow: "#FFC41F"
              }
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

