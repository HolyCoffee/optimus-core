import cleaner from 'rollup-plugin-cleaner';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/cli.js',
  output: {
    file: 'build/index.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [
    cleaner({
      targets: ['build'],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
  ],
};
