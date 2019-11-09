import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

const entrypoint = 'main';
const outputDir = 'dist';
const name = 'geojson-cleaner';

const basePlugins = [
  resolve(),
  commonjs(),
  json(),
];

export default [
  {
    input: `src/${entrypoint}.js`,
    output: [
      { file: `${outputDir}/${name}.js`, format: 'iife' },
      { file: `${outputDir}/${name}.min.js`, format: 'iife' },
    ],
    plugins: [
      ...basePlugins,
      babel({
        configFile: false,
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env', {
            modules: false,
          }],
        ],
      }),
      terser({
        include: [/^.+\.min\.js$/, '*esm*'], 
      }),
    ],
  },
  {
    input: 'src/cli.js',
    output: [
      { file: `${outputDir}/cli/index.js`, format: 'cjs' },
    ],
    plugins: [
      ...basePlugins,
      babel({
        configFile: false,
        exclude: 'node_modules/**',
        presets: [
          [ '@babel/preset-env', {
            modules: false,
            targets: {
              node: 12,
            },
            ignoreBrowserslistConfig: true,
          }],
        ],
      }),
    ],
    external: [ 'fs', 'util' ],
  },
];
