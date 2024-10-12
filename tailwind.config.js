module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // プライマリカラーの設定
        'primary-dark': '#1E40AF',
        secondary: '#9333EA', // セカンダリカラー
      },
    },
  },
  plugins: [],
}
