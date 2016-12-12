import eslint from 'rollup-plugin-eslint';
import buble from 'rollup-plugin-buble';

export default({
  entry: './lib/index.js',
  dest: './dist/plugin.js',
  format: 'cjs',
  plugins: [
    eslint({ throwError: true }),
    buble()
  ]
})
