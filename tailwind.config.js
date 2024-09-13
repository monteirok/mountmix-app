/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // lineHeight = leading (i.e., leading-5)
      lineHeight: {
        'coming-soon': '4.5rem',
        'coming-soon-md': '6rem',
        'book-catering': '3.5rem',
      },
      scale: {
        '9': '.989',
      },
      height: {
        'calc': 'calc(100vh - 105px)',
        'nav': '105px',
      },
      width: {
        '13': '13rem',
      },
      margin: {
        'header': '4rem',
      },
      padding: {
        'header': '4rem',
        '.8': '.8rem',
        '7rem': '7rem',
        '5rem': '5rem',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        '404': '1.6rem',
        '404-sm': '2rem',
        '404-lg': '2.2rem',
        'header': '3rem',
        'header-sm': '4rem',
        'nav-lg': '1.1rem',
        'coming': '4.5rem',
        'coming-md': '6.5rem',
        'coming-lg': '7rem',
        'coming-xl': '8rem',
        'soon': '6.4rem',
        'soon-md': '9.2rem',
        'soon-lg': '7rem',
        'soon-xl': '8rem',
      },
      transitionDuration: {
        '225': '225ms',
        '250': '250ms',
        '275': '275ms',
        '300': '300ms',
        '350': '350ms',
        '400': '400ms',
        '450': '450ms',
      },
      colors: {
        'transparent': '#16161600',
        'dark': '#161616',
        'light': '#f2f2f2',
        'accent': '#20697a',
        'y3ll0w': '#f7b83d',
        'gr33n': '#10a43390',
        'cream': '#f0e6d4',
        'blueGray': '#3e5969',
      },
      backgroundImage: {
        'mount1': "url('/backgrounds/mountains/mount-1.webp')",
        'mount2': "url('/backgrounds/mountains/mount-2.webp')",
        'mount3': "url('/backgrounds/mountains/mount-3.webp')",
        'mount4': "url('/backgrounds/mountains/mount-4.webp')",
        'cells-dark': 'url("/backgrounds/gradients/cells-dark.png")',
        'blobs-animated': 'url("/backgrounds/gradients/blobs-animated.svg")',
        'blob-red': 'url("/backgrounds/shapes/blobs/red.svg")',
        'blob-corners': 'url("/backgrounds/shapes/blobs/corners.svg")',
        'poly-grid-lg': 'url("/backgrounds/shapes/poly-grids/lg.svg")',
        'poly-grid-sm': 'url("/backgrounds/shapes/poly-grids/sm.svg")',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
