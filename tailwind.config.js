const prod = process.env.NODE_ENV === 'production';
const purge = prod ? { enabled: true, content: ['./views/**/*.ejs', './src/**/*.tsx'] } : [];

module.exports = {
    purge,
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
