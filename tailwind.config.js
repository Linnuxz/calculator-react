/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'firstTheme-inset': 'inset 0px -4px 0px 0px #B3A497',
                'firstTheme-delete-inset': 'inset 0px -4px 0px 0px #414E73',
            },
        },
    },
    plugins: [],
};
