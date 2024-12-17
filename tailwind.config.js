import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
               'brand-purple': '#8d52da',
               'brand-orange': '#ff6b2f',
                'brand-light-blue': '#9af',
                'brand-light-purple': '#cca6ff',
                'brand-white': 'white',
                'swatch-dark': '#141414',
                'brand-text-color': '#e0e0e0',
                'brand-green': '#4b7c39',
                'brand-blue': '#2d4be6',
                'brand-yellow': '#dffd51',
                'brand-black': 'black',
                'brand-light-yellow': '#df9',
                'brand-pale-orange': '#fff6ec',
                'brand-pale-purple': '#ede0ff',
                'brand-pale-green': '#d8f3b5',
                'brand-pale-blue': '#ccd0e5',
                'brand-pale-yellow': '#feffd9',
                'brand-dark-orange': '#4d2e27',
                'brand-dark-purple': '#300931',
                'brand-dark-green': '#283329',
                'brand-dark-blue': '#0f1032',
                'brand-dark-yellow': '#94b300',
            }
        },
    },

    plugins: [forms],
};
