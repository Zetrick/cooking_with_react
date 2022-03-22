module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  safelist: [
    {
      pattern: /bg-(amber|cyan)-(100|200|300|400|500|600|700|800|900)/,
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
