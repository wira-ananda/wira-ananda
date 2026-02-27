const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          fontFamily: {
            // Menambahkan Cascadia Mono
            cascadia: ["Cascadia Mono", "monospace"],
          },
        },
      },
    },
  },
};

export default config;
