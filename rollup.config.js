import cleaner from 'rollup-plugin-cleaner';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [
    cleaner({
      targets: ['dist'],
    }),
    resolve(),
    commonjs(),
  ],
};
