module.exports = {
    darkMode: 'media',
    purge: [
      './src/**/*.svelte',
      './src/**/*.html',
      './public/**/*.html',
    ],
    theme: {
      extend: {
        colors: {
          svelte: '#ff3e00',
        },
      },
    },
    variants: {},
    plugins: [],
  }