
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
// import babel from '@rollup/plugin-babel';

const banner= `
/*
  Project: fetch-deom
  Author: Zakaria Elalaoui
  Date : ${new Date()}
  Git-Repo : https://github.com/zakarialaoui10/fetch-dom.js
  Git-Wiki : https://github.com/zakarialaoui10/fetch-dom.js/wiki
  Released under MIT License
*/
`
export default {
  input: 'src/index.js',
  output: [
    {
    file: 'dist/fetch-dom.cjs',
    format: 'cjs',
    banner,
    exports: "named"
  },
  {
    file: 'dist/fetch-dom.mjs',
    format: 'es',
    banner,
    exports: "named"
  },
  {
    file: 'dist/fetch-dom.js',
    format: 'umd',
    name:"FetchDom",
    banner,
    exports: "named"
  },
  {
    file: 'dist/fetch-dom.min.js',
    format: 'umd',
    name:"FetchDom",
    banner,
    exports: "named",
    plugins:[terser({
      output: {
        comments: (node, { type, value }) => type === 'comment2' && value.includes('Author'),
      },
    })]
  }
],
  plugins: [
    resolve(), 
    //commonjs(),
    // babel({
    //   babelHelpers: 'bundled', // or 'runtime'
    //   //exclude: 'node_modules/**',
    // }), 
  ],
};
