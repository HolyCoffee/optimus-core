import cleaner from 'rollup-plugin-cleaner';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/build.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [
    cleaner({
      targets: ['dist'],
    }),
    resolve(),
    commonjs(),
  ],
};
