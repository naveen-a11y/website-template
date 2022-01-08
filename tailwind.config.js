module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            height: {
                128: "32rem",
            },
            margin: {
                128: "36rem",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
