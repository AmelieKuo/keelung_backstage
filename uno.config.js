import { defineConfig } from 'unocss/vite';
import presetUno from 'unocss/preset-uno';

export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', 'public', 'build'],
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      mainYellow: '#F8AE1A',
      warnedRed: '#CB3434',
      normalGray: '#909090',
      lightYellow: '#FDF9F6',
      successGreen: '#39A613',
    },
    fontSize: {
      h1: '26px',
      h2: '21px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      p: '14px',
    },
    breakpoints: {
      sm: '429px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1500px',
    },
  },
});
