/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary-emerald': '#10b981',
                'primary-orange': '#ec5b13',
                'background-light': '#f8f6f6',
                'background-dark': '#221610',
                'background-darker': '#0a0a0b',
                'neutral-dark': '#17171a',
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                display: ['Public Sans', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%, 100%': { opacity: '0.7' },
                    '50%': { opacity: '1' },
                }
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out infinite 2s',
                'float-more-delayed': 'float 6s ease-in-out infinite 4s',
                'glow-pulse': 'glow 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
