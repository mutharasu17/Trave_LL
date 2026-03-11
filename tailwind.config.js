/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fffdf0',
                    100: '#fef7be',
                    200: '#fded7d',
                    300: '#fbdc3c',
                    400: '#f9ca13',
                    500: '#d9a406',
                    600: '#b47b04',
                    700: '#8f5906',
                    800: '#75470b',
                    900: '#643c0f',
                    950: '#3a1f05',
                },
            },
            fontFamily: {
                serif: ['Italiana', 'serif'],
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                'slow-drift': 'drift 20s ease-in-out infinite',
                'fade-in': 'fadeIn 2s ease-out forwards',
            },
            keyframes: {
                drift: {
                    '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
                    '50%': { transform: 'scale(1.1) translate(-1%, -1%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
