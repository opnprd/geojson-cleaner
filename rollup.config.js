import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

const outputDir = 'dist';
const name = 'geojson-cleaner';

const basePlugins = [
  resolve(),
  commonjs(),
  json(),
];

export default [
  {
    input: 'src/main.js',
    output: [
      { file: `docs/${name}.js`, format: 'iife', name: 'geojsonCleaner' },
      { file: `docs/${name}.min.js`, format: 'iife', name: 'geojsonCleaner' },
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
    input: 'src/lib.js',
    output: [
      { file: `${outputDir}/lib/index.js`, format: 'cjs' },
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
    external: [],
  },  {
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
