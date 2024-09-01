/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'header': '4.8rem',
        'header-sm': '6.8rem',
        'header-lg': '9rem',
      },
      scale: {
        '9': '.989',
      },
      height: {
        'h-calculated': 'calc(100vh - 60px)',
        'h-nav': '300rem',
      },
      width: {
        '13': '13rem',
      },
      margin: {
        '7': '7rem',
        '8': '8rem',
        'neg6': '-6rem',
      },
      padding: {
        '.8': '.8rem',
        '4ren': '4rem',
        '5rem': '5rem',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        'head': '5rem',
        'subhead': '7rem',
        'head-sm': '7rem',
        'subhead-sm': '10rem',
        'head-lg': '10rem',
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
        'dark': '#161616',
        'light': '#f2f2f2',
        'accent': '#20697a',
        'y3ll0w': '#f7b83d',
        'gr33n': '#10a43390',
        'cream': '#f0e6d4',
        'blueGray': '#3e5969',
        'bgTrans': '#06598640',
      },
      backgroundImage: {
        'mount1': "url('/backgrounds/mountains/mount-1.webp')",
        'mount2': "url('/backgrounds/mountains/mount-2.webp')",
        'mount3': "url('/backgrounds/mountains/mount-3.webp')",
        'mount4': "url('/backgrounds/mountains/mount-4.webp')",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
