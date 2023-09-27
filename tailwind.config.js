/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'blockchainBG': "url('/src/assets/images/bc3.jpg')",
        'cardbg': "url('/src/assets/images/chainbg.jpg')",
        'decentralized': "url('/src/assets/images/decentralized.jpg')",
        'world': "url('/src/assets/images/giphy.webp')",
        
        
      }
    },
  },
  plugins: [],
}