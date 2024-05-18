/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'firstTheme-inset': 'inset 0px -4px 0px 0px #B3A497',
                'firstTheme-deleteresetinset': 'inset 0px -4px 0px 0px #414E73',
                'firstTheme-equalinset': '0px -4px 0px 0px #93261A inset',
                'secondTheme-inset': '0px -4px 0px 0px #A79E91 inset',
                'secondTheme-deleteresetinset':
                    '0px -4px 0px 0px #1B6066 inset',
                'secondTheme-equalinset': '0px -4px 0px 0px #873901 inset',
                'thirdTheme-inset': '0px -4px 0px 0px #881C9E inset',
                'thirdTheme-deleteresetinset': '0px -4px 0px 0px #BE15F4 inset',
                'thirdTheme-equalinset': '0px -4px 0px 0px #6CF9F1 inset',
            },
        },
    },
    plugins: [],
};
