module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
      screens: {
            'tb': {'max': '760px'},
            // => @media (min-width: 640px) { ... }
            'lp': {'max': '1024px'},
            // => @media (min-width: 1024px) { ... }
          },
     minWidth: {
            '1/2': '50%',
          },
     extend: {
            colors: {
                'regal-gray': '#333333',
                'regal-red': '#FC6867',
                'white-gray': '#555555',
                'blue-gray':'#9CA3AF',
                'dark-gray':'#222222',
            },
            fontFamily: {
                'roboto': ['"Roboto"', 'cursive']
            },
            boxShadow: {
                    'rd': '0 0 16px rgb(252 104 103 / 60%)',
                    "wt": '0 0 2px rgb(256 256 256 / 50%)',
            },
            backgroundImage: {
                'separation': "url('https://www.inkdrop.app/section-separator.svg')",
            },
            gridTemplateColumns: {
                'five': 'repeat(5, 170px)',
                'search': 'auto 42px',
                'dropdown': 'auto 20px',
                'inputSearch': '13px auto 11px',
            },
        },
     tooltipArrows: theme => ({
                 'danger-arrow': {
                     borderColor: theme('colors.white'),
                     borderWidth: 1,
                     backgroundColor: theme('colors.white'),
                     size: 6,
                     offset: 10
                 },
             }),
  },
  plugins: [
    require('tailwindcss-tooltip-arrow-after')()
  ],
}
