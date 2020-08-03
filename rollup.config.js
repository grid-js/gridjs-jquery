import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-sizes'
import resolve from '@rollup/plugin-node-resolve';
const lib = 'gridjs';

const path = (env, postfix) => `dist/${lib}.${env}${postfix ? '.' + postfix : ''}.js`;


export default [
  {
    input: 'src/wrapper.ts',
    output: [
      { file: path('development'), name: lib, format: 'iife', sourcemap: true, globals: { jquery: 'jQuery' } },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
          compilerOptions : {
            module: "es2015"
          }
        }
      })
    ],
    external: ['jquery']
  },
  {
    input: 'src/wrapper.ts',
    output: [
      { file: path('production', 'min'), name: lib, format: 'iife', sourcemap: true, globals: { jquery: 'jQuery' }  },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.release.json",
        tsconfigOverride: {
          compilerOptions: {
            module: "es2015",
            declaration: false
          }
        }
      }),
      terser(),
      size({
        writeFile: false,
      }),
    ],
    external: ['jquery']
  },
]
