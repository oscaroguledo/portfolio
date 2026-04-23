
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#f8f9fb',
        surface: '#ffffff',
        text: '#1a1a1a',
        accent: '#445E86',
        'accent-hover': '#374d6e',
        muted: '#e2e5ea',
        'muted-text': '#666666',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
