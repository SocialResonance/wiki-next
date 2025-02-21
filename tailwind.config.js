/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      fontSize: {
        base: '1.25rem', // 18px instead of default 16px
      },
      fontFamily: {
        'encode': ['var(--font-encode-sans-condensed)'],
      },
    }
  },
  plugins: []
}